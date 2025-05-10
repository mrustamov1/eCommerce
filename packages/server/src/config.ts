import "dotenv/config";

export const Config = {
  port: Number(process.env.PORT) || "9090",
  postgres: {
    port: Number(process.env.POSTGRES_PORT) || 5432,
    host: process.env.POSTGRES_HOST || "127.0.0.1",
    user: process.env.POSTGRES_USER || "eCommerce",
    database: process.env.POSTGRES_DB || "eCommerce",
    password: process.env.POSTGRES_PASSWORD || "eCommerce!",
  },
};
