const Vendedor = require('../models/vendedor');

// Create a new vendor
exports.createVendedor = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoVendedor = new Vendedor({ nome, email, data_cadastro: new Date(), ativo: true });
        await novoVendedor.save();
        res.status(201).json(novoVendedor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar vendedor', error });
    }
};

// Get all vendors
exports.getAllVendedores = async (req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.status(200).json(vendedores);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar vendedores', error });
    }
};

// Get a vendor by ID
exports.getVendedorById = async (req, res) => {
    try {
        const vendedor = await Vendedor.findById(req.params.id);
        if (!vendedor) {
            return res.status(404).json({ message: 'Vendedor não encontrado' });
        }
        res.status(200).json(vendedor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar vendedor', error });
    }
};

// Update a vendor by ID
exports.updateVendedor = async (req, res) => {
    try {
        const { nome, email, ativo } = req.body;
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, { nome, email, ativo }, { new: true });
        if (!vendedor) {
            return res.status(404).json({ message: 'Vendedor não encontrado' });
        }
        res.status(200).json(vendedor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar vendedor', error });
    }
};

// Mark a vendor as inactive
exports.deactivateVendedor = async (req, res) => {
    try {
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, { ativo: false }, { new: true });
        if (!vendedor) {
            return res.status(404).json({ message: 'Vendedor não encontrado' });
        }
        res.status(200).json(vendedor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao desativar vendedor', error });
    }
};