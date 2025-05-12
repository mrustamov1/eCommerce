import { Request, Response } from "express";
import { data } from "../data/product-details.data.js";
import { ProductDeatilsModel } from "../models/product-datails.model.js";

export const ProductDetailsController = {
  async get(req: Request<{ id: string }, ProductDeatilsModel>, res: Response) {
    const { id } = req.params;

    const product = data.find((item) => String(item.id) === id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.send(product);
  },
};
