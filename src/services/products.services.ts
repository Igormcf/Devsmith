import connection from '../models/connection';
import ProductModel from '../models/products.model';
import IProduct from '../interfaces/products.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    return this.model.createProduct(product);
  }
}