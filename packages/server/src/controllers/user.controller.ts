import { UserEntity } from "../entities/user.entity.js";
import { UserKind } from "../types/user.type.js";
import { DataSourceUtils } from "../utils/data-source.utile.js";
import { Request, Response } from "express";

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
  }
};
