// ============================================
// 📦 IMPORTAÇÃO DO EXPRESS
// ============================================

// Express é o framework web usado para criar a API REST
// Ele gerencia as requisições HTTP, rotas, middlewares, etc.
import express from 'express';

// ============================================
// 📦 IMPORTAÇÃO DO DOTENV
// ============================================

// dotenv carrega variáveis de ambiente do arquivo .env
// Elas ficam disponíveis em process.env (ex: process.env.PORT)
import * as dotenv from 'dotenv';

// ============================================
// 📦 IMPORTAÇÃO DO DATASOURCE
// ============================================

// AppDataSource é a conexão com o banco de dados via TypeORM
// Ela contém as configurações de conexão e as entidades
import { AppDataSource } from './config/database';

// ============================================
// 🔧 CARREGAR VARIÁVEIS DE AMBIENTE
// ============================================

// dotenv.config() lê o arquivo .env na raiz do projeto
// e adiciona as variáveis ao objeto process.env
dotenv.config();

// ============================================
// 🚀 CRIAÇÃO DO APP EXPRESS
// ============================================

// app é a instância principal do Express
// Todas as rotas e middlewares são registrados nela
const app = express();

// ============================================
// 📋 PORTA DO SERVIDOR
// ============================================

// process.env.PORT é a porta definida no .env
// Se não estiver definida, usa 3000 como fallback
// 
// Exemplo no .env: PORT=3000
const PORT = process.env.PORT || 3000;

// ============================================
// 🧩 MIDDLEWARE GLOBAL: JSON
// ============================================

// app.use(express.json()) permite que o Express entenda requisições com JSON no body
// Sem isso, req.body seria undefined
// 
// Exemplo:
// POST /users com body { "nome": "João" }
// Sem esse middleware, req.body = undefined
// Com esse middleware, req.body = { "nome": "João" }
app.use(express.json());

// ============================================
// 🏠 ROTA DE TESTE
// ============================================

// Rota raiz para verificar se a API está rodando
// Responde com um JSON simples
// 
// Exemplo: GET http://localhost:3000/
// Resposta: { "message": "API rodando!" }
app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' });
});

// ============================================
// 🗄️ INICIALIZAÇÃO DO BANCO DE DADOS
// ============================================

// AppDataSource.initialize() conecta ao banco de dados usando as configurações
// do arquivo database.ts (host, porta, usuário, senha, banco)
// 
// É uma operação assíncrona, por isso usamos .then() e .catch()
AppDataSource.initialize()
    // ============================================
    // ✅ BANCO CONECTADO COM SUCESSO
    // ============================================
    .then(() => {
        // Mensagem no console indicando que o banco está pronto
        console.log("Banco conectado | Banco Criado");

        // ============================================
        // 🚀 INICIA O SERVIDOR
        // ============================================
        // app.listen() coloca o servidor pra escutar requisições na porta definida
        // A função de callback é executada quando o servidor começa a rodar
        // 
        // O servidor SÓ SOBE se o banco conectar primeiro!
        // Isso evita que a aplicação rode sem banco de dados
        app.listen(PORT, () => {
            console.log(`Servidor Rodando http://localhost:${PORT}`);
        });
    })
    // ============================================
    // ❌ ERRO AO CONECTAR AO BANCO
    // ============================================
    // Se a conexão falhar, mostra o erro no console
    // O servidor NÃO SOBE se o banco não conectar
    // 
    // Erros comuns:
    // - Banco não está rodando
    // - Credenciais erradas no .env
    // - Banco de dados não existe
    .catch(console.error);
