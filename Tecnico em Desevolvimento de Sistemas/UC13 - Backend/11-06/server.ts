import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './database';
import { Livro } from './Livros';

dotenv.config();
const app: Express = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado | Banco Criado");

    app.listen(3000, () => {
      console.log(`Servidor Rodando http://localhost:3000`);
    });
  })
.catch(console.error);

app.get("/livros", async (req, res) => {
  const repository = AppDataSource.getRepository(Livro);
  const livros = await repository.find();
  res.json(livros);
});

app.post("/livros", async (req, res) => {
  const repository = AppDataSource.getRepository(Livro);
  const livro = repository.create({
    nome: req.body.nome,
    email: req.body.email,
  });
  await repository.save(livro);
  res.status(201).json(livro);
});
