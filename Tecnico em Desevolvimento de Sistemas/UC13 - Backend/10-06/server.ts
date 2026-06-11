import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { pool } from './database';

const PORT = 3000;

dotenv.config();
const app: Express = express();

app.use(express.json()); 

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send(`Servidor está funcionando perfeitamente 🚀`)
})

app.get('/livros', (req: Request, res: Response) => {
    const sql = `SELECT COUNT(*) AS quantidade FROM livro`;
    pool.query(sql, (err, results) => {
        try {
        const quantidade = results.length; 
        res.json({mensagem: `Quantidade de Registros: ${quantidade}`});
        } catch (error) {
            console.error("Erro Não foi possivel consultar o Banco!")
            return res.status(500).json({ erro: error.message });
        }
    });
});


app.post('/livros', async(req: Request, res: Response) => {
    const {nome_livro,quantidade_paginas,edicao_livro,descricao  } = req.body;
    const sql = `INSERT INTO livro(nome_livro,quantidade_paginas,edicao_livro,descricao) VALUES (?, ?,?,?)`;
     pool.query(sql, [nome_livro,quantidade_paginas,edicao_livro,descricao], (err, result) => {
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


app.put('/livros/:id',(req: Request, res: Response) => {
    const { id } = req.params;
   const { nome_livro,quantidade_paginas,edicao_livro,descricao} = req.body;
    const sql = `UPDATE livro SET nome_livro= ?,  quantidade_paginas= ?,edicao_livro=?, descricao=? WHERE id_livro = ?`;
    pool.query(sql, [nome_livro,quantidade_paginas,edicao_livro,descricao,id], (err, result) => {
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


app.delete('/livros/:id',async (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM livro WHERE id_livro = ?`;
    pool.query(sql, [id], (err, result) => {
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


