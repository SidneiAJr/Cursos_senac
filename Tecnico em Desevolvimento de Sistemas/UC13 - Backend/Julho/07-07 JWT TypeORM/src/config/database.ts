// ============================================
// 📦 IMPORTAÇÃO DO REFLECT-METADATA
// ============================================

// 'reflect-metadata' é uma biblioteca que permite adicionar metadados a classes e propriedades.
// O TypeORM usa isso para saber quais classes são entidades, quais colunas existem, etc.
// É obrigatório importar no início do arquivo para que os decorators (@Entity, @Column, etc.) funcionem.
import "reflect-metadata";

// ============================================
// 📦 IMPORTAÇÃO DO TYPEORM
// ============================================

// DataSource é a classe principal do TypeORM.
// Ela representa a conexão com o banco de dados e gerencia as entidades.
// É através dela que você faz queries, salva, atualiza e deleta registros.
import { DataSource } from "typeorm";

// ============================================
// 📦 IMPORTAÇÃO DAS ENTIDADES
// ============================================

// Entidades são classes que representam tabelas no banco de dados.
// Cada entidade é mapeada para uma tabela e cada propriedade para uma coluna.
// O TypeORM usa essas classes para criar as tabelas e fazer as queries.
import { User } from "../models/Usuario";  // Entidade User → tabela 'Usuario'
import { Post } from "../models/Post";     // Entidade Post → tabela 'posts'

// ============================================
// 📦 IMPORTAÇÃO DO DOTENV
// ============================================

// dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env
// Isso permite que você configure o banco sem hardcodar credenciais no código.
// As variáveis ficam em process.env.
import * as dotenv from 'dotenv'

// ============================================
// 🔧 CARREGAR VARIÁVEIS DE AMBIENTE
// ============================================

// dotenv.config() lê o arquivo .env na raiz do projeto
// e adiciona as variáveis ao objeto process.env
dotenv.config()

// ============================================
// 📋 EXTRAIR VARIÁVEIS DO .ENV
// ============================================

// Desestruturação do objeto process.env
// Pega as variáveis definidas no arquivo .env e guarda em constantes
// Se alguma não estiver definida, ela vai ser undefined
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// ============================================
// 🗄️ CRIAÇÃO DO DATASOURCE (CONEXÃO COM O BANCO)
// ============================================

// AppDataSource é a configuração principal da conexão com o banco.
// Ele é exportado para ser usado em qualquer lugar do projeto.
export const AppDataSource = new DataSource({
    // ============================================
    // 🔌 TIPO DO BANCO
    // ============================================
    // Define qual banco de dados está sendo usado.
    // Pode ser: "mysql", "postgres", "sqlite", "mssql", etc.
    type: "mysql",

    // ============================================
    // 🌐 HOST DO BANCO
    // ============================================
    // Endereço onde o banco está rodando.
    // Se for local: "localhost" ou "127.0.0.1"
    host: DB_HOST,

    // ============================================
    // 🚪 PORTA DO BANCO
    // ============================================
    // Porta padrão do MySQL é 3306.
    // Number() converte a string do .env para número.
    port: Number(DB_PORT),

    // ============================================
    // 👤 USUÁRIO DO BANCO
    // ============================================
    // Nome do usuário que vai acessar o banco.
    // Normalmente "root" em desenvolvimento.
    username: DB_USER,

    // ============================================
    // 🔑 SENHA DO BANCO
    // ============================================
    // Senha do usuário definido acima.
    // Em produção, NUNCA coloque a senha em texto plano no .env? Use secrets!
    password: DB_PASSWORD,

    // ============================================
    // 🗂️ NOME DO BANCO DE DADOS
    // ============================================
    // Nome do banco que será usado.
    // O banco precisa existir antes de rodar a aplicação.
    database: DB_NAME,

    // ============================================
    // ⚠️ SYNCHRONIZE (CUIDADO!)
    // ============================================
    // synchronize: true faz o TypeORM criar/atualizar as tabelas automaticamente
    // com base nas entidades definidas.
    // 
    // ⚠️ ATENÇÃO: Isso é útil em desenvolvimento, mas PERIGOSO em produção!
    // Em produção, use migrations para controlar as alterações no banco.
    // 
    // O que synchronize faz:
    // - Se a tabela não existe → cria
    // - Se falta uma coluna → adiciona
    // - Se uma coluna mudou de tipo → altera
    // - Se uma coluna foi removida → remove (⚠️ PERDE DADOS!)
    synchronize: false,

    // ============================================
    // 📝 LOGGING
    // ============================================
    // logging: true mostra no console todas as queries SQL executadas.
    // Muito útil para debug e entender o que o TypeORM está fazendo.
    // Em produção, é melhor desligar ou usar um logger específico.
    logging: false,

    // ============================================
    // 📦 ENTIDADES
    // ============================================
    // Lista de classes que representam tabelas no banco.
    // O TypeORM precisa saber quais classes são entidades para criar as tabelas
    // e fazer as queries.
    // 
    // Cada entidade deve ter o decorator @Entity() e as colunas com @Column().
    entities: [User, Post],
});