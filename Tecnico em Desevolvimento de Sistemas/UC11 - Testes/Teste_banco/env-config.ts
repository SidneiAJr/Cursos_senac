import dotenv from "dotenv";

dotenv.config();

export const {DB_HOST, DB_PORT, DB_USER, DB_Password, DB_DATABASE,JWT_Secret}= process.env;


