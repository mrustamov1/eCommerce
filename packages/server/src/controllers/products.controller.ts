import { products } from "../data.js";
import { ProductModel } from "../models/product.model.js";
import { Request, Response } from "express";

export const ProductsController = {
  async get(req: Request<ProductModel>, res: Response) {
    res.json(products);
  },
};
