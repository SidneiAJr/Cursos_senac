import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource} from './database';
import "reflect-metadata";
import { Livros } from './Livro';

const PORT = 3000;

dotenv.config();
const app: Express = express();

app.use(express.json()); 

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send(`Servidor está funcionando perfeitamente 🚀`)
})

AppDataSource.initialize()
.then(()=>{
    console.log("Banco Conectado com sucesso")
})
.catch((err)=>{
    console.error("Erro Impossivel Conectar no banco",err)
})


app.post('/cadastar', async(req:Request,res:Response)=>{
    try {
     const {nome_livro, quantidade_paginas, edicao_livro, descricao} = req.body;
     if(!nome_livro|| !quantidade_paginas){
        return res.status(400).json({
            erro: "Campos são Obrigatorios"
        });
    }
        const livro = new Livros();
        livro.nome_livro = nome_livro;
        livro.quantidade_paginas = quantidade_paginas;
        livro.edicao_livro = edicao_livro || null;
        livro.descricao = descricao || null;
        const resultado = await  AppDataSource.manager.save(livro);
        res.status(201).json({
            mensagem: 'Livro inserido com sucesso!',
            id: resultado.id_livros,
            livro: resultado
        });
    } 
    catch (error) {
        console.error('Erro ao inserir livro:', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

