import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { pool } from './database';
import bcrypt from 'bcrypt';

const PORT = 3000;

dotenv.config();
const app: Express = express();

app.use(express.json()); 

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send(`Servidor está funcionando perfeitamente 🚀`)
})

app.get('/teste', (req: Request, res: Response) => {
    const sql = `SELECT COUNT(*) AS quantidade FROM usuarios`;
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

app.get('/teste/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const sql = `SELECT * FROM usuarios WHERE id = ?`;

    pool.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                erro: "Não foi possível consultar o banco"
            });
        }

        return res.json(results);
    });
});

app.post('/testes', async(req: Request, res: Response) => {
    const { nome,email,senha,data_cadastro } = req.body;
    const senhahash = await bcrypt.hash(senha,15);
    const sql = `INSERT INTO usuarios(nome,email,senha,data_cadastro) VALUES (?, ?,?,?)`;
     pool.query(sql, [nome,email,senhahash,data_cadastro], (err, result) => {
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


app.put('/testes/:id',(req: Request, res: Response) => {
    const { id } = req.params;
   const { nome,email,senha,data_cadastro } = req.body;
    const sql = `UPDATE usuarios SET nome = ?,  email= ?, senha=?, data_cadastro=? WHERE id = ?`;
    pool.query(sql, [nome,email,senha,data_cadastro ,id], (err, result) => {
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


app.delete('/testes/:id',async (req: Request, res: Response) => {
    const { id } = req.params;
    const sql = `DELETE FROM usuarios WHERE id = ?`;
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


