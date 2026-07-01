// ============================================
// 📦 IMPORTAÇÃO DO EXPRESS
// ============================================

// Express é o framework web que usamos para criar a API.
// Ele gerencia rotas, middlewares, requisições e respostas HTTP.
import express from 'express';

// ============================================
// 📦 IMPORTAÇÃO DO DOTENV
// ============================================

// dotenv carrega variáveis de ambiente do arquivo .env
// Elas ficam disponíveis em process.env
import * as dotenv from 'dotenv';

// ============================================
// 📦 IMPORTAÇÃO DO DATASOURCE
// ============================================

// AppDataSource é a conexão com o banco de dados (TypeORM)
// É necessário inicializar antes de usar qualquer repositório
import { AppDataSource } from './config/database';

// ============================================
// 🔧 CARREGAR VARIÁVEIS DE AMBIENTE
// ============================================

// dotenv.config() lê o arquivo .env e adiciona as variáveis ao process.env
dotenv.config();

// ============================================
// 🚀 CRIAÇÃO DO APP EXPRESS
// ============================================

// app é a instância principal do Express.
// Ela gerencia todas as requisições HTTP.
const app = express();

// ============================================
// 📋 PORTA DO SERVIDOR
// ============================================

// process.env.PORT é a variável de ambiente que define a porta.
// Se não estiver definida, usa 3000 como fallback.
const PORT = process.env.PORT || 3000;

// ============================================
// 🧩 MIDDLEWARES GLOBAIS
// ============================================

// app.use(express.json()) permite que o Express entenda requisições com JSON no body.
// Sem isso, req.body seria undefined.
app.use(express.json());

// ============================================
// 🏠 ROTA DE TESTE
// ============================================

// Rota raiz para verificar se a API está rodando.
// Responde com um JSON simples.
app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' });
});

// ============================================
// 🗄️ INICIALIZAÇÃO DO BANCO DE DADOS
// ============================================

// AppDataSource.initialize() conecta ao banco de dados.
// É uma operação assíncrona, por isso usamos .then() e .catch()
// 
// O que acontece:
// 1. Tenta conectar ao banco usando as credenciais do .env
// 2. Se conectar → executa o .then()
// 3. Se falhar → executa o .catch()
AppDataSource.initialize()
    .then(() => {
        // ============================================
        // ✅ BANCO CONECTADO COM SUCESSO
        // ============================================
        console.log("Banco conectado | Banco Criado");

        // ============================================
        // 🚀 INICIA O SERVIDOR
        // ============================================
        // app.listen() coloca o servidor pra escutar requisições na porta definida.
        // Quando o servidor começa a rodar, a função de callback é executada.
        app.listen(PORT, () => {
            console.log(`Servidor Rodando http://localhost:${PORT}`);
        });
    })
    // ============================================
    // ❌ ERRO AO CONECTAR AO BANCO
    // ============================================
    // Se a conexão falhar, mostra o erro no console.
    // O servidor NÃO sobe se o banco não conectar.
    .catch(console.error);