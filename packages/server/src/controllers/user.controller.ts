import { UserEntity } from "../entities/user.entity.js";
import { UserKind, UserType } from "../types/user.type.js";
import { DataSourceUtils } from "../utils/data-source.utile.js";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const UserController = {
  async list(req: Request, res: Response) {
    try {
      const users = await DataSourceUtils.find(UserEntity, {
        where: { role: UserKind.user },
      });

      const safeUsers = users.map(({ password, ...rest }) => rest);
      res.status(200).send(safeUsers);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.body; // assuming id comes from the request body
    try {
      await DataSourceUtils.delete(UserEntity, id);
      res.status(200).send({ success: `User with id ${id} deleted` });
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send({ error: "Failed to delete user" });
    }
  },

  async edit(req: Request, res: Response) {
    const { id, name, surname, email } = req.body;
    try {
      const oldUser = await DataSourceUtils.findOneByOrFail(UserEntity, { id });

      oldUser.name = name;
      oldUser.surname = surname;
      oldUser.email = email;

      const updateUser = await DataSourceUtils.update<UserType>(UserEntity, oldUser);
      console.log("User successfully updated!");
      res.status(200).send({
        id: updateUser.id,
        name: updateUser.name,
        surname: updateUser.surname,
        email: updateUser.email,
        role: updateUser.role,
      });
    } catch (error) {
      const errorMsg = `Error editing user with id ${id}`;
      res.status(500).send({ error: errorMsg });
    }
  },
};
