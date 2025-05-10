import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { AuthSchema } from "../schema/auth.schema.js";
import { UserEntity } from "../entities/user.entity.js";
import { SchemaUtiles } from "../utils/schema.utile.js";
import { UserKind, UserType } from "../types/user.type.js";
import { RegistrationModel } from "../models/auth.model.js";
import { DataSourceUtils } from "../utils/data-source.utile.js";

export const AuthorizationController = {
  async register(
    req: Request<unknown, unknown, RegistrationModel>,
    res: Response
  ) {
    try {
      SchemaUtiles<RegistrationModel>(AuthSchema.register, req.body);

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
        role: UserKind.user,
        surname: req.body.surname,
        email: req.body.email,
        password: hashPassword,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      res.status(200).send({ id: newUser.id });
    } catch (error) {
      res.send("Something went wrong");
    }
  },
};
