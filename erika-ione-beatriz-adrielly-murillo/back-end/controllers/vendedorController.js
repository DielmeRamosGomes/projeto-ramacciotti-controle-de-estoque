const { Vendedor } = require('../models');
module.exports = {
  async listar(req, res) {
    const vendedores = await Vendedor.findAll();
    res.json(vendedores);
  },
  async criar(req, res) {
    try {
      const novoVendedor = await Vendedor.create(req.body);
      res.status(201).json(novoVendedor);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar vendedor', detalhes: error });
    }
  }
};
