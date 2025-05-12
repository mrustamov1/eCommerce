import express from "express";
import { Config } from "./config.js";
import cors from "cors";
import { AppDataSource } from "./setup.js";
import { AuthorizationController } from "./controllers/authorization.controller.js";
import { UserController } from "./controllers/user.controller.js";

const server = express();

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

server.post("/api/auth/login", AuthorizationController.login);
server.post("/api/auth/register", AuthorizationController.register);

server.get("/api/user/get", UserController.list);
server.post("/api/user/edit", UserController.edit);
server.delete("/api/user/delete", UserController.delete);

await AppDataSource.initialize();

server.listen({ host: "0.0.0.0", port: Config.port });
console.log(`Server running on localhost://0.0.0.0:${Config.port}}`);
