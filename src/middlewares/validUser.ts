import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const userDTO = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userDTO.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);
    
    return error.details[0].message.includes('required') ? res.status(400).json({ message })
      : res.status(422).json({ message });
  }

  return next();
};

export default validUser;