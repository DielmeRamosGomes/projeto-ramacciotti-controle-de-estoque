const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para cadastrar um produto
router.post('/', produtoController.cadastrarProduto);

// Rota para listar todos os produtos
router.get('/', produtoController.listarProdutos);

// Rota para listar um produto específico pelo id
router.get('/:id', produtoController.listarProdutoPorId);

// Rota para atualizar um produto pelo id
router.put('/:id', produtoController.atualizarProduto);

// Rota para marcar um produto como inativo
router.delete('/:id', produtoController.marcarProdutoInativo);

// Rota para listar produtos por data de cadastro
router.get('/data/:dataCadastro', produtoController.listarProdutosPorData);

// Rota para listar produtos de um vendedor específico
router.get('/vendedor/:idVendedor', produtoController.listarProdutosPorVendedor);

module.exports = router;