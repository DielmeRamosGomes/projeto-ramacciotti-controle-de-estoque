const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, productController.createProduct);
router.get('/', verifyToken, productController.getAllProducts);
router.get('/:id', verifyToken, productController.getProductById);
router.put('/:id', verifyToken, productController.updateProduct);
router.put('/deactivate/:id', verifyToken, productController.deactivateProduct);
router.get('/by-date/:date', verifyToken, productController.getProductsByDate);
router.get('/by-seller/:sellerId', verifyToken, productController.getProductsBySeller);


module.exports = router;