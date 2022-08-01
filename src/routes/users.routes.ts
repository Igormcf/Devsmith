import { Router } from 'express';

import UsersController from '../controllers/users.controller';

import validUser from '../middlewares/validUser';

const router = Router();

const userController = new UsersController();

router.post('/users', validUser, userController.createUser);

export default router;