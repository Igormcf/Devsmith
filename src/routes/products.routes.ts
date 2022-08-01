import { Router } from 'express';

import ProductController from '../controllers/products.controller';

import validProduct from '../middlewares/validProduct';

const router = Router();

const productController = new ProductController();

router.post('/products', validProduct, productController.createProduct);

router.get('/products', productController.getAll);

export default router;