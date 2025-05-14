import { Request, Response } from "express";
import { categoriesData } from "../data/categories.data.js";

export const CategoriesController = {
  async get(req: Request, res: Response) {
    res.send(categoriesData);
  },
};
