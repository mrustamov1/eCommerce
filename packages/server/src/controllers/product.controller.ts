import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Request, Response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productFilePath = path.join(__dirname, "../../product.json");
export const ProductController = {
  async getProduct(req: Request, res: Response) {
    try {
      const data = fs.readFileSync(productFilePath, "utf-8");
      const products = JSON.parse(data);
      res.json(products);
    } catch (err) {
      console.error("Failed to load products:", err);
      res.status(500).json({ error: "Failed to load products" });
    }
  },
};
