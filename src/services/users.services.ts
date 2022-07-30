import connection from '../models/connection';
import UsersModel from '../models/users.model';
import IUsers from '../interfaces/users.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUser(user: IUsers): Promise<IUsers> {
    return this.model.createProduct(user);
  }
}