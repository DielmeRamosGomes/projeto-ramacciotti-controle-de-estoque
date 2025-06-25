const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedorController');

// Rota para cadastrar um vendedor
router.post('/', vendedorController.cadastrarVendedor);

// Rota para listar todos os vendedores
router.get('/', vendedorController.listarVendedores);

// Rota para listar um vendedor específico pelo id
router.get('/:id', vendedorController.listarVendedorPorId);

// Rota para atualizar um vendedor pelo id
router.put('/:id', vendedorController.atualizarVendedor);

// Rota para marcar um vendedor como inativo
router.delete('/:id', vendedorController.marcarVendedorInativo);

module.exports = router;