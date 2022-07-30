import { Request, Response } from 'express';
import OrdersService from '../services/orders.services';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const result = await this.ordersService.getAllOrders();

    return res.status(200).json(result);
  };
}