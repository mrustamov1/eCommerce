import { Request, Response } from "express";
import { productsData } from "../data/product.data.js";
import { ProductModel } from "../models/product.model.js";

export const ProductsController = {
  async get(req: Request<ProductModel>, res: Response) {
    res.json(productsData);
  },
};
