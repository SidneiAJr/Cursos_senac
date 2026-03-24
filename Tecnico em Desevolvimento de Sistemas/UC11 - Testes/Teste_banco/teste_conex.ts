import mysql from "mysql2/promise";

import { DB_DATABASE } from "./env-config.js";
import { DB_PORT } from "./env-config.js";
import { DB_HOST } from "./env-config.js";
import { DB_USER } from "./env-config.js";
import { DB_Password } from "./env-config.js";

export const conn = mysql.createPool({
   host:DB_HOST,
   port: parseInt(DB_PORT|| '3306'),
   user: DB_USER,
   password: DB_Password,
   database:DB_DATABASE,
   waitForConnections:true,
   connectionLimit: 10
})

import dotenv from "dotenv";

dotenv.config();

export const {DB_HOST, DB_PORT, DB_USER, DB_Password, DB_DATABASE,JWT_Secret}= process.env;


import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;  // PORT em maiúsculo (padrão)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.post("/cadastro",(req:Request,res:Response)=>{
    res.send("Roda de cadastrado")
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando: http://localhost:${port}`);
});
















