import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/usuarios', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: '🚀 Servidor Online !' });
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});