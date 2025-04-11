import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Category, Product],
});
