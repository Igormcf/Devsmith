import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;
}