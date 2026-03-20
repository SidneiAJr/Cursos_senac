CREATE DATABASE biblioteca; -- Cria o banco de dados 

USE biblioteca;-- Seleciona o banco de dados biblioteca

CREATE TABLE livros(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(20) NOT NULL,
    nome_autor varchar(20) NOT NULL,
    lancamento varchar(20) NOT NULL,
    genero varchar(20) NOT NULL
);  -- cria a tabela livros

CREATE TABLE locador(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(20) NOT NULL UNIQUE,
    endereco varchar(20) NOT NULL,
    email varchar(20) NOT NULL,
    telefone varchar(25) NOT NULL UNIQUE
); -- cria a tabela locador

CREATE TABLE locacao_livros(
    livro_id INT NOT NULL,  -- Referência à tabela livros
    locador_id INT NOT NULL, -- Referência à tabela locador
    data_locacao DATE NOT NULL,
    FOREIGN KEY (ID) REFERENCES livros(ID),
    FOREIGN KEY (ID) REFERENCES locador(ID),
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
); -- Recebe informação de locador e livros tabela de conexção

-- Insere informações na tabela Livros
INSERT INTO livros(titulo,nome_autor,lancamento,genero) Values
('a','b','2021-01-01','fantasia');

-- Insere Informações na tabela Locador
INSERT INTO locador(nome,endereco,email,telefone)Values
('K','b','c','5'),
('K','R','k','6');

-- Insere Informações na tabela locacao_livros
INSERT INTO locacao_livros(livro_id, locador_id, data_locacao) VALUES
(1, 1, '2023-10-01'),
