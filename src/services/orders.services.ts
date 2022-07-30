import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import IOder from '../interfaces/orders.interface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders(): Promise<IOder[]> {
    const result = await this.model.getAllOrders();

    return result;
  }
}