import { DataSource } from "typeorm";
import { Config } from "./config.js";
import { UserEntity } from "./entities/user.entity.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: Config.postgres.port,
  host: Config.postgres.host,
  username: Config.postgres.user,
  database: Config.postgres.database,
  password: Config.postgres.password,
  synchronize: true,
  entities: [UserEntity],
});
