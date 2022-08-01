import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productDTO = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productDTO.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);
    console.log(error.details[0].message, 'error Joi Product');
    return error.details[0].message.includes('required') ? res.status(400).json({ message })
      : res.status(422).json({ message });
  }

  return next();
};

export default validProduct;