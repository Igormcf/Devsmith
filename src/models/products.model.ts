import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return rows as IProduct[];
  }

  public async updateProduct(idOrder: number, productId: number) {
    return this.connection
      .execute('UPDATE Trybesmith.Products SET orderId=? WHERE id=?;', [idOrder, productId]);
  }
}