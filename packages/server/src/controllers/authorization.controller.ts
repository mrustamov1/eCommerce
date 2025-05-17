import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { TokenUtils } from "../utils/token.utils.js";
import { AuthSchema } from "../schema/auth.schema.js";
import { SchemaUtils } from "../utils/schema.utile.js";
import { UserEntity } from "../entities/user.entity.js";
import { UserKind, UserType } from "../types/user.type.js";
import { DataSourceUtils } from "../utils/data-source.utile.js";
import { LoginModel, RegisterModel } from "../models/auth.model.js";

export const AuthorizationController = {
  async register(req: Request<unknown, unknown, RegisterModel>, res: Response) {
    try {
      SchemaUtils<RegisterModel>(AuthSchema.register, req.body);

      const hasUser = await DataSourceUtils.findOneBy(UserEntity, {
        email: req.body.email,
      });

      if (hasUser) {
        res.status(409).send({ error: "User already exists" });
        return;
      }

      const hashPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = await DataSourceUtils.insert<UserType>(UserEntity, {
         ...req.body,
        password: hashPassword,
        role: UserKind.user,
      });

      res.status(200).send({
        id: newUser.id,
        role: newUser.role,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
      });
    } catch (error) {
      console.error("Register error:", error);
      res.status(500).send("Internal server error");
      return;
    }
  },

  async login(req: Request<unknown, unknown, LoginModel>, res: Response) {
    try {
      const user = await DataSourceUtils.findOne(UserEntity, {
        where: { email: req.body.email },
      });

      const isValid =
        user && (await bcrypt.compare(req.body.password, user.password));

      if (!isValid) {
        res.status(404).send({ error: "Invalid email or password" });
        return;
      }

      const token = TokenUtils.generate(user.id, user.role);

      await DataSourceUtils.update(UserEntity, {
        id: user.id,
        refreshToken: token.refresh,
      });

      res.status(200).send({
        email: user.email,
        role: user.role,
        token: token,
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Internal server error");
      return;
    }
  },
};
