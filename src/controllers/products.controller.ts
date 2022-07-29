import { Request, Response } from 'express';
import ProductService from '../services/products.services';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const result = await this.productService.createProduct(product);

    return res.status(201).json(result);
  };

  public getAll = async (req: Request, res: Response) => {
    const result = await this.productService.getAll();

    return res.status(200).json(result);
  };
}