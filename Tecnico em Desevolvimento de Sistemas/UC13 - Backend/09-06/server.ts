import express, { Express, Request, Response } from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

const PORT = 3000;

dotenv.config();
const app: Express = express();
const connection = mysql.createConnection({ 
    host:  'localhost',
    user:  'root',
    password:  'root',
    database:  'teste'
});


app.get('/testes', (req: Request, res: Response) => {
    const sql = `SELECT * FROM [sua tabela aqui]`;
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        const quantidade = results.length; 
        res.json({mensagem: `Quantidade de Registros: ${quantidade}`});
    });
});

app.post('/testes', (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const sql = `INSERT INTO [sua tabela aqui] (nome, email) VALUES (?, ?)`;
    connection.query(sql, [nome, email], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        const linhasAfetadas = result.affectedRows;  // Quantas linhas foram inseridas
        const novoId = result.insertId;  
        res.status(201).json({ mensagem: `Quantidade de Linhas Afetadas: ${linhasAfetadas} | Quantidade de Registros: ${novoId}` });
    });
});


app.put('/testes/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const sql = `UPDATE [sua tabela aqui] SET nome = ?, email = ? WHERE id = ?`;
    connection.query(sql, [nome, email, id], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Registro não encontrado' });
        }
         res.json({ mensagem: "Atualizado com sucesso!" });
    });
});


app.delete('/testes/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM [sua tabela aqui] WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Registro não encontrado' });
        }
         res.json({ mensagem: `Deletado com sucesso | Linhas Afetadas: ${linhasAfetadas} | Linhas Encotradas ${linhasEncontradas}` });
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
