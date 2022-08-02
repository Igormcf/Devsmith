import { Request, Response } from 'express';
import OrdersService from '../services/orders.services';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAllOrders();

    return res.status(200).json(result);
  };

  public newOrder = async (req: Request, res: Response) => {
    const idUser = req.user;
    console.log(req.user, 'req user!!!');
    const { productsIds } = req.body;

    if (productsIds.length === 0) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    
    const newOrderId = await this.ordersService.createOrder(+idUser);

    await Promise.all(productsIds
      .map((item: number) => this.ordersService.updateProduct(newOrderId, item)));
    
    return res.status(201).json({ userId: idUser, productsIds });
  };
}