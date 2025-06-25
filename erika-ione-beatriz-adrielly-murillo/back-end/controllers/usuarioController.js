const { Usuario } = require('../models');
module.exports = {
  async listar(req, res) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  },
  async criar(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: error });
    }
  }
};
