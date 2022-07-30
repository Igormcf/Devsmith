import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UsersService from '../services/users.services';

const secret = 'igormaciel';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

export default class UsersController {
  constructor(private userService = new UsersService()) { }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const { id, username, classe, level } = await this.userService.createUser(user);

    const token = jwt.sign({ id, username, classe, level }, secret, options);

    return res.status(201).json({ token });
  };
}