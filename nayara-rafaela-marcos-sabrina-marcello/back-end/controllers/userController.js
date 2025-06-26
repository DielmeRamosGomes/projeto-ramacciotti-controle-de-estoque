const pool = require('../db');
const { hashPassword } = require('../utils/passwordUtils');

// Cadastrar Usuário (já tratado em authController.js para login)

// Listar todos os usuários
const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT id_usuario, nome, Email, data_cadastro, ativo FROM Usuarios ORDER BY data_cadastro DESC');
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Listar um usuário específico pelo ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await pool.query('SELECT id_usuario, nome, Email, data_cadastro, ativo FROM Usuarios WHERE id_usuario = $1', [id]);
        if (user.rows.length === 0) {
            return res.status(404).json({ msg: 'Usuário não encontrado' });
        }
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Atualizar um usuário (exemplo: nome, email)
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nome, Email, senha } = req.body;
    try {
        let updateFields = [];
        let queryParams = [id];
        let queryIndex = 2;

        if (nome) {
            updateFields.push(`nome = $${queryIndex++}`);
            queryParams.push(nome);
        }
        if (Email) {
            updateFields.push(`Email = $${queryIndex++}`);
            queryParams.push(Email);
        }
        if (senha) {
            const hashedPassword = await hashPassword(senha);
            updateFields.push(`senha = $${queryIndex++}`);
            queryParams.push(hashedPassword);
        }

        if (updateFields.length === 0) {
            return res.status(400).json({ msg: 'Nenhum campo para atualizar fornecido' });
        }

        const query = `UPDATE Usuarios SET ${updateFields.join(', ')} WHERE id_usuario = $1 RETURNING *`;
        const updatedUser = await pool.query(query, queryParams);

        if (updatedUser.rows.length === 0) {
            return res.status(404).json({ msg: 'Usuário não encontrado' });
        }
        res.json({ msg: 'Usuário atualizado com sucesso', user: updatedUser.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Marcar um usuário como inativo (soft delete)
const deactivateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await pool.query(
            'UPDATE Usuarios SET ativo = FALSE WHERE id_usuario = $1 RETURNING id_usuario, nome, Email, ativo',
            [id]
        );
        if (user.rows.length === 0) {
            return res.status(404).json({ msg: 'Usuário não encontrado' });
        }
        res.json({ msg: 'Usuário desativado com sucesso', user: user.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deactivateUser,
};