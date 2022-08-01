import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import LoginService from '../services/login.services';

const secret = 'igormaciel';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public loginUser = async (req: Request, res: Response) => {
    const payload = req.body;

    const user = await this.loginService.findUserLogin(payload);
    
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const { id, username } = user;

    const token = jwt.sign({ id, username }, secret, options);

    return res.status(200).json({ token });
  };
}