import { Pool } from 'mysql2/promise';
import IOder from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOder[]> {
    const query = `SELECT
    O.id, O.userId, JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.Orders as O 
    INNER JOIN Trybesmith.Products as P
    ON O.id = P.orderId
    GROUP BY O.id
    ORDER BY O.userId`;

    const [rows] = await this.connection.execute(query);

    return rows as IOder[];
  }
}