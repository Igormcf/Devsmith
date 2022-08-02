import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import IOder from '../interfaces/orders.interface';
import ProductModel from '../models/products.model';

export default class OrdersService {
  public model: OrdersModel;

  public modelProduct: ProductModel;

  constructor() {
    this.model = new OrdersModel(connection);
    this.modelProduct = new ProductModel(connection);
  }

  public async getAllOrders(): Promise<IOder[]> {
    const result = await this.model.getAllOrders();

    return result;
  }

  public async createOrder(idUser: number): Promise<number> {
    const result = await this.model.createOrder(idUser);

    return result;
  }

  public async updateProduct(idOrder: number, productId: number) {
    return this.modelProduct.updateProduct(idOrder, productId);
  }
}