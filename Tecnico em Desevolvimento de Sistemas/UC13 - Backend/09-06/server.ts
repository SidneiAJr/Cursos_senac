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
    database:  'd'
});

app.use(express.json()); 

app.get('/teste', (req: Request, res: Response) => {
    const sql = `SELECT * FROM teste`;
    connection.query(sql, (err, results) => {
        try {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        const quantidade = results.length; 
        res.json({mensagem: `Quantidade de Registros: ${quantidade}`});
        } catch (error) {
            console.error("Erro Não foi possivel consultar o Banco!")
        }
    });
});

app.post('/testes', (req: Request, res: Response) => {
    const { nome, idade,cidade } = req.body;
    const sql = `INSERT INTO teste (nome, idade,cidade) VALUES (?, ?,?)`;
    connection.query(sql, [nome,idade,cidade], (err, result) => {
        try {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        const linhasAfetadas = result.affectedRows;  // Quantas linhas foram inseridas
        const novoId = result.insertId;  
        res.status(201).json({ mensagem: `Quantidade de Linhas Afetadas: ${linhasAfetadas} | Quantidade de Registros: ${novoId}` });
        } catch (error) {
            console.error("Erro Não foi possivel consultar o Banco!")
        }
    });
});


app.put('/testes/:id', (req: Request, res: Response) => {
    const { id } = req.params;
   const { nome, idade,cidade } = req.body;
    const sql = `UPDATE teste SET nome = ?, idade = ?, cidade=? WHERE id = ?`;
    connection.query(sql, [nome,idade,cidade ,id], (err, result) => {
        try {
        if (err) {
        return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Registro não encontrado' });
        }
         res.json({ mensagem: "Atualizado com sucesso!" }); 
        } catch (error) {
              console.error("Erro Não foi possivel consultar o Banco!")
        }
       
    });
});


app.delete('/testes/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM teste WHERE id = ?`;
    connection.query(sql, [id], (err, result) => {
        try {
        const linhasAfetadas = result.affectedRows;     
        const linhasEncontradas = result.changedRows; 
            if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Registro não encontrado' });
        }
         res.json({ mensagem: `Deletado com sucesso | Linhas Afetadas: ${linhasAfetadas} | Linhas Encotradas ${linhasEncontradas}` });
        } catch (error) {
             console.error("Erro Não foi possivel consultar o Banco!")
        }
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

