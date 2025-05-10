import express from "express";
import { Config } from "./config.js";
import cors from "cors";
import path from "path";
import { AppDataSource } from "./setup.js";
import { fileURLToPath } from "url";
import { AuthorizationController } from "./controllers/authorization.controller.js";
import { ProductController } from "./controllers/product.controller.js";

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3010",
    credentials: true,
  })
);
server.use(
  express.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000,
  })
);
server.use("/images", express.static(path.join(__dirname, "assets/images")));

server.post("/api/auth/register", AuthorizationController.register);
server.get("/products/get", ProductController.getProduct);

await AppDataSource.initialize();

server.listen({ host: "0.0.0.0", port: Config.port });
console.log(`Server running on localhost://0.0.0.0:${Config.port}}`);
