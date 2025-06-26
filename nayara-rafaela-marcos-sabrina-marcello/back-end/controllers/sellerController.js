const pool = require('../db');
const { hashPassword } = require('../utils/passwordUtils'); // Reutilizando para exemplo, mas para Vendedor, talvez não precise de senha se for apenas cadastro.

// Cadastrar Vendedor
const createSeller = async (req, res) => {
    const { nome, Email } = req.body;
    try {
        let seller = await pool.query('SELECT * FROM Vendedor WHERE Email = $1', [Email]);
        if (seller.rows.length > 0) {
            return res.status(400).json({ msg: 'Vendedor já existe com este e-mail' });
        }
        seller = await pool.query(
            'INSERT INTO Vendedor (nome, Email) VALUES ($1, $2) RETURNING id_vendedor, nome, Email, data_cadastro, ativo',
            [nome, Email]
        );
        res.status(201).json({ msg: 'Vendedor cadastrado com sucesso', seller: seller.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Listar todos os vendedores
const getAllSellers = async (req, res) => {
    try {
        const sellers = await pool.query('SELECT id_vendedor, nome, Email, data_cadastro, ativo FROM Vendedor ORDER BY data_cadastro DESC');
        res.json(sellers.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Listar um vendedor específico pelo ID
const getSellerById = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await pool.query('SELECT id_vendedor, nome, Email, data_cadastro, ativo FROM Vendedor WHERE id_vendedor = $1', [id]);
        if (seller.rows.length === 0) {
            return res.status(404).json({ msg: 'Vendedor não encontrado' });
        }
        res.json(seller.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Atualizar um vendedor
const updateSeller = async (req, res) => {
    const { id } = req.params;
    const { nome, Email } = req.body;
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

        if (updateFields.length === 0) {
            return res.status(400).json({ msg: 'Nenhum campo para atualizar fornecido' });
        }

        const query = `UPDATE Vendedor SET ${updateFields.join(', ')} WHERE id_vendedor = $1 RETURNING *`;
        const updatedSeller = await pool.query(query, queryParams);

        if (updatedSeller.rows.length === 0) {
            return res.status(404).json({ msg: 'Vendedor não encontrado' });
        }
        res.json({ msg: 'Vendedor atualizado com sucesso', seller: updatedSeller.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

// Marcar um vendedor como inativo
const deactivateSeller = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await pool.query(
            'UPDATE Vendedor SET ativo = FALSE WHERE id_vendedor = $1 RETURNING id_vendedor, nome, Email, ativo',
            [id]
        );
        if (seller.rows.length === 0) {
            return res.status(404).json({ msg: 'Vendedor não encontrado' });
        }
        res.json({ msg: 'Vendedor desativado com sucesso', seller: seller.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

module.exports = {
    createSeller,
    getAllSellers,
    getSellerById,
    updateSeller,
    deactivateSeller,
};