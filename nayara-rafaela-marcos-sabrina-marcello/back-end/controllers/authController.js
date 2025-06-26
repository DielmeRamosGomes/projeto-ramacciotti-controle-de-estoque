const pool = require('../db');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    const { nome, Email, senha } = req.body;
    try {
        let user = await pool.query('SELECT * FROM Usuarios WHERE Email = $1', [Email]);
        if (user.rows.length > 0) {
            return res.status(400).json({ msg: 'Usuário já existe com este e-mail' });
        }

        const hashedPassword = await hashPassword(senha);

        user = await pool.query(
            'INSERT INTO Usuarios (nome, Email, senha) VALUES ($1, $2, $3) RETURNING id_usuario, nome, Email, data_cadastro, ativo',
            [nome, Email, hashedPassword]
        );

        const payload = {
            user: {
                id: user.rows[0].id_usuario,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: user.rows[0] });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

const loginUser = async (req, res) => {
    const { Email, senha } = req.body;
    try {
        const user = await pool.query('SELECT * FROM Usuarios WHERE Email = $1 AND ativo = TRUE', [Email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const isMatch = await comparePassword(senha, user.rows[0].senha);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const payload = {
            user: {
                id: user.rows[0].id_usuario,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { id_usuario: user.rows[0].id_usuario, nome: user.rows[0].nome, Email: user.rows[0].Email } });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

module.exports = { registerUser, loginUser };