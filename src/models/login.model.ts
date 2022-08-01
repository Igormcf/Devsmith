import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUsers from '../interfaces/users.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findUser(payload: ILogin): Promise<IUsers> {
    const { username, password } = payload;

    const result = await this.connection.execute(`SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`, [username, password]);

    const [rows] = result;
    const [user] = rows as IUsers[];
    return user;
  }
}