import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { AuthSchema } from "../schema/auth.schema.js";
import { SchemaUtils } from "../utils/schema.utile.js";
import { UserEntity } from "../entities/user.entity.js";
import { UserKind, UserType } from "../types/user.type.js";
import { DataSourceUtils } from "../utils/data-source.utile.js";
import { LoginModel, RegistrationModel } from "../models/auth.model.js";

export const AuthorizationController = {
  async register(
    req: Request<unknown, unknown, RegistrationModel>,
    res: Response
  ) {
    try {
      SchemaUtils<RegistrationModel>(AuthSchema.register, req.body);

      const hasUser = await DataSourceUtils.findOneBy(UserEntity, {
        email: req.body.email,
      });

      if (hasUser) {
        res.status(409).send({ error: "User already exist" });
        return;
      }

      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await DataSourceUtils.insert<UserType>(UserEntity, {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        created_at: Date.now(),
        updated_at: Date.now(),
        surname: req.body.surname,
        role: UserKind.user || "user",
      });
      res.status(200).send({ id: newUser.id });
    } catch (error) {
      res.send("Something went wrong");
    }
  },

  async login(req: Request<unknown, unknown, LoginModel>, res: Response) {
    try {
      const user = await DataSourceUtils.findOne(UserEntity, {
        where: { email: req.body.email },
      });

      if (
        !user ||
        !(await bcrypt.compare(req.body.password.trim(), user.password))
      ) {
        res.status(404).send("User not found");
        return;
      } else {
        console.log("Something went wrong");
      }

      res.status(200).send({ id: user.id });
    } catch (error) {
      console.log(error);
    }
  },
};
