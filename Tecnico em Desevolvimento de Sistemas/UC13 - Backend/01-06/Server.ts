import express, { Express, Request, Response } from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

const app: Express = express();
const PORT = 3000;
app.use(express.json());     
app.use(express.urlencoded({ extended: true })); 

const connection = mysql.createConnection({ 
    host:  'localhost',
    user:  'root',
    password:  'root',
    database:  'teste'
});

// Rota de teste
app.get('/', (req:Request, res:Response) => {
  res.send('Servidor TypeScript rodando!');
});


app.get('/Lista', (req: Request, res: Response) => {
    const sql = `SELECT * FROM t`;
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(results);
    });
});

app.post('/Cadastro', (req: Request, res: Response) => {
    const { nome } = req.body;
    const sql = `INSERT INTO t (nome) VALUES (?)`;
    connection.query(sql, [nome], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.status(201).json({ mensagem: "Inserido com sucesso!" });
    });
});


app.put('/cadastro/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome} = req.body;
    const sql = `UPDATE t SET nome = ? WHERE id = ?`;
    connection.query(sql, [nome,id], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Registro não encontrado' });
        }
        res.json({ mensagem: "Atualizado com sucesso!" });
    });
});


app.delete('/cadastro/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM t WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'mensagem: "Nenhuma Linha Atualizada"' });
        }
        res.json({ mensagem: "Deletado com sucesso!" });
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
