import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import routes from './routes/index'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);  // 👈 REGISTRA AS ROTAS

app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' });
});


AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado | Banco Criado");
        app.listen(PORT, () => {
            console.log(`Servidor Rodando http://localhost:${PORT}`);
        });
    })
    .catch(console.error);