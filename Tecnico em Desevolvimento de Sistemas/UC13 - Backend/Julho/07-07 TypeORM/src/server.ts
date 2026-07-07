import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import { errorHandler } from './middlewares/errorHandler';
import UserRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(UserRoutes);  


app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' });
});

AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado | Banco Criado");
        app.use(errorHandler)
        app.listen(PORT, () => {
            console.log(`Servidor Rodando http://localhost:${PORT}`);
        });
    })
    .catch(console.error);