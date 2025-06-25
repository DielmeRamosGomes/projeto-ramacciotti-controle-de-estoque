const Produto = require('../models/produto');

// Cria um novo produto
exports.createProduto = async (req, res) => {
    try {
        const { nome, descricao, id_vendedor, preco_unitario } = req.body;
        const novoProduto = await Produto.create({ nome, descricao, id_vendedor, preco_unitario, ativo: true });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error });
    }
};

// Atualiza um produto existente
exports.updateProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, id_vendedor, preco_unitario } = req.body;
        const produtoAtualizado = await Produto.update({ nome, descricao, id_vendedor, preco_unitario }, { where: { id_produto: id } });
        if (produtoAtualizado[0] === 0) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
};

// Lista todos os produtos
exports.getAllProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos', error });
    }
};

// Lista um produto específico pelo id
exports.getProdutoById = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto', error });
    }
};

// Marca um produto como inativo
exports.deactivateProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        produto.ativo = false;
        await produto.save();
        res.status(200).json({ message: 'Produto marcado como inativo' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao desativar produto', error });
    }
};

// Lista produtos por data de cadastro
exports.getProdutosByDataCadastro = async (req, res) => {
    try {
        const { data } = req.query;
        const produtos = await Produto.findAll({ where: { data_cadastro: data } });
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos por data de cadastro', error });
    }
};

// Lista produtos de um vendedor específico
exports.getProdutosByVendedor = async (req, res) => {
    try {
        const { id_vendedor } = req.params;
        const produtos = await Produto.findAll({ where: { id_vendedor } });
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos do vendedor', error });
    }
};