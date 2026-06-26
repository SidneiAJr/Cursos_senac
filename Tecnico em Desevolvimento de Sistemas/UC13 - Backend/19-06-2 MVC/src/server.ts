import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/usuarios", userRoutes);

const iniciarServidor = async () => {
    try {
        await AppDataSource.initialize();
        console.log("✅ Conectado ao banco!");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Erro:", error);
    }
};

iniciarServidor();