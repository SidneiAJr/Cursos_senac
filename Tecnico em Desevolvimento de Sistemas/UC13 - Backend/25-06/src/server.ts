import express from 'express';
import router from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/usuarios', router);

app.get('/', (req, res) => {
    res.json({ message: '🚀 Servidor RUNNNNN!' });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});