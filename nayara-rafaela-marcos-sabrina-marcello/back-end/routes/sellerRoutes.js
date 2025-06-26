const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, sellerController.createSeller);
router.get('/', verifyToken, sellerController.getAllSellers);
router.get('/:id', verifyToken, sellerController.getSellerById);
router.put('/:id', verifyToken, sellerController.updateSeller);
router.put('/deactivate/:id', verifyToken, sellerController.deactivateSeller);

module.exports = router;