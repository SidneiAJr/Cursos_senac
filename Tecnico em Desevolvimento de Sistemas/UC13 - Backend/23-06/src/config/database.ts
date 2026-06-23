import "reflect-metadata";
import { Usuario } from "../models/Usuario";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "lib",
    synchronize: false, 
    logging: true,
    entities: [Usuario],
});