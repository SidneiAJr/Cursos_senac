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

















