import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import IToken from '../interfaces/token.interface';

const secret = 'igormaciel';

const validToken = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decodeToken = jwt.verify(token, secret);
    console.log(decodeToken, 'token verify!!!!');
    req.user = (decodeToken as IToken).id;
    console.log(req.user, 'req user validação');
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validToken;