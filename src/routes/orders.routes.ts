import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validToken from '../middlewares/validJWT';
import validOrder from '../middlewares/validOrder';

const router = Router();

const ordersController = new OrdersController();

router.get('/orders', ordersController.getAllOrders);

router.post('/orders', validToken, validOrder, ordersController.newOrder);

export default router;