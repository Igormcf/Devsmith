import connection from '../models/connection';
import LoginModel from '../models/login.model';
import ILogin from '../interfaces/login.interface';
import IUsers from '../interfaces/users.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async findUserLogin(payload: ILogin): Promise<IUsers> {
    const user = await this.model.findUser(payload);
  
    return user;
  }
}