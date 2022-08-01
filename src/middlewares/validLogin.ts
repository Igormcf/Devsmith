import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const loginDTO = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginDTO.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);
    
    return res.status(400).json({ message });
  }

  return next();
};

export default validLogin;