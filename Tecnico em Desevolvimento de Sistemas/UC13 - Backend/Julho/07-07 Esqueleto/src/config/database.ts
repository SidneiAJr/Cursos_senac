import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "../models/Usuario";
import * as dotenv from 'dotenv'
dotenv.config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Usuario],
});