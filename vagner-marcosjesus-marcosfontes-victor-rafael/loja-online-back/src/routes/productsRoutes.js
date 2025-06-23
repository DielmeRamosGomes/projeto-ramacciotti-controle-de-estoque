import express from 'express';
import ProductsController from '../controllers/productsController.js';

const router = express.Router();
const productsController = new ProductsController();

const setProductsRoutes = (app) => {
    router.post('/products', productsController.createProduct);
    router.put('/products/:id', productsController.updateProduct);
    router.get('/products/:id', productsController.getProductById);
    router.get('/products', productsController.getAllProducts);
    router.delete('/products/:id/inactive', productsController.markProductInactive);
    router.get('/vendors/:vendorId/products', productsController.getProductsByVendor);

    app.use('/api', router);
};

export default setProductsRoutes;