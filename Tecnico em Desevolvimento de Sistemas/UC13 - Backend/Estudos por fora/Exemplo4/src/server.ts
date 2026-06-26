import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/database";
import router from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Conectado ao banco!");
        app.use("/user", router);
        app.listen(port, () => console.log(`🚀 Servidor rodando: http://localhost:${port}`));
    })
    .catch((error) => console.error("❌ Erro:", error));