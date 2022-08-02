import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const orderDTO = Joi.object({
  productsIds: Joi.array().required(),
});

const validOrder = (req: Request, res: Response, next: NextFunction) => {
  const { error } = orderDTO.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);
    
    return error.details[0].message.includes('required') ? res.status(400).json({ message })
      : res.status(422).json({ message });
  }
  console.log('estou sainda da validação');
  next();
};

export default validOrder;