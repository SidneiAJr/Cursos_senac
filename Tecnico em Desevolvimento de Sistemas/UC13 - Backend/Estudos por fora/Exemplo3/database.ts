// database.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Livro } from "./Livros";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "lib",
  synchronize: true,
  entities: [Livro],
});
