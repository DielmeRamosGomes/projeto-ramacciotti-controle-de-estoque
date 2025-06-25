const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para cadastrar um usuário
router.post('/usuarios', usuarioController.cadastrarUsuario);

// Rota para fazer login do usuário
router.post('/usuarios/login', usuarioController.loginUsuario);

// Rota para listar todos os usuários
router.get('/usuarios', usuarioController.listarUsuarios);

// Rota para listar um usuário específico pelo id
router.get('/usuarios/:id', usuarioController.listarUsuarioPorId);

// Rota para marcar um usuário como inativo
router.put('/usuarios/:id/inativo', usuarioController.marcarUsuarioInativo);

module.exports = router;