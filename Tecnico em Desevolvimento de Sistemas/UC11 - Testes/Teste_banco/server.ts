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
