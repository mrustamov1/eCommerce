import cors from "cors";
import express from "express";
import { Config } from "./config.js";
import { AppDataSource } from "./setup.js";
import { FaqController } from "./controllers/faq.controller.js";
import { UserController } from "./controllers/user.controller.js";
import { ProductsController } from "./controllers/products.controller.js";
import { CategoriesController } from "./controllers/categories.controller.js";
import { AuthorizationController } from "./controllers/authorization.controller.js";
import { ProductDetailsController } from "./controllers/product-details.controller.js";

// setup express server
const server = express();

// ---------------------------------------------------------------------------
// registered express dependencies
// ---------------------------------------------------------------------------

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3010",
    credentials: true,
    allowedHeaders: [
      "token",
      "Origin",
      "Accept",
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "device-remember-token",
      "Access-Control-Allow-Origin",
    ],
  })
);

server.use(
  express.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000,
  })
);

// ---------------------------------------------------------------------------
// express routs
// ---------------------------------------------------------------------------

server.post("/api/auth/login", AuthorizationController.login);
server.post("/api/auth/register", AuthorizationController.register);

//-----------------------User-----------------------
server.get("/api/user/get", UserController.list);
server.post("/api/user/edit", UserController.edit);
server.delete("/api/user/delete", UserController.delete);

//-----------------------Products-----------------------
server.get("/products/get", ProductsController.get);

//-----------------------Product Details-----------------------
server.get("/product/details/get/:id", ProductDetailsController.get);

//-----------------------Categories-----------------------
server.get("/categories/get", CategoriesController.get);

//-----------------------Frequently Ask Question-----------------------
server.get("/faq/get", FaqController.get);

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------
await AppDataSource.initialize();
server.listen({ host: "0.0.0.0", port: Config.port });
console.log(`Server running on localhost://0.0.0.0:${Config.port}}`);
