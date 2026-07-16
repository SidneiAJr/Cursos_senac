import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';  // ✅ Importando o CORS
import { AppDataSource } from './config/database';
import userRoutes from './routes/user.routes';
import postRouter from './routes/post.routes';
import { errorHandler } from './middlewares/errorHandler';
import authUser from "./routes/auth.routes"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500', // SEM a barra no final e SEM 'http://' duplicado
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use(userRoutes);
app.use(postRouter);
app.use(authUser);

app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' });
});

AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado | Banco Criado");
        app.use(errorHandler);
        app.listen(PORT, () => {
            console.log(`Servidor Rodando http://localhost:${PORT}`);
        });
    })
    .catch(console.error);