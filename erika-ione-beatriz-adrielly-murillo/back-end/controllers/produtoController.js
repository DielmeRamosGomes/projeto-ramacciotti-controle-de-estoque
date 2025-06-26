const { Produto, Vendedor } = require('../models');
module.exports = {
  async listar(req, res) {
    const produtos = await Produto.findAll({ include: Vendedor });
    res.json(produtos);
  },
  async criar(req, res) {
    try {
      const novoProduto = await Produto.create(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar produto', detalhes: error });
    }
  }
};
