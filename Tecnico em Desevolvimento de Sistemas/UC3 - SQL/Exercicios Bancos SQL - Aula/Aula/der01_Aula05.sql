-- Criar Banco de Dados
CREATE DATABASE escola; -- Criar Banco escola
USE escola; -- Usa o banco de dados escola

-- Criar Tabela estudante
CREATE TABLE estudante(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_aluno VARCHAR(40) NOT NULL,
    cpf_aluno VARCHAR(40) NOT NULL,
    data_nascimento DATE NOT NULL -- Corrigido para DATE
);

-- Criar Tabela instrutor
CREATE TABLE instrutor(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_instrutor VARCHAR(40) NOT NULL,
    cpf_instrutor VARCHAR(40) NOT NULL,
    data_nascimento DATE NOT NULL -- Corrigido para DATE
);

-- Criar Tabela departamento
CREATE TABLE departamento(
    id_departamento VARCHAR(40) PRIMARY KEY NOT NULL,
    nome_departamento VARCHAR(40) NOT NULL,
    descricao_departamento VARCHAR(40) NOT NULL
);

-- Criar Tabela curso
CREATE TABLE curso(
    id VARCHAR(40) PRIMARY KEY NOT NULL,
    codigo_curso VARCHAR(40) NOT NULL,
    descricao_curso VARCHAR(40) NOT NULL,
    id_departamento VARCHAR(40) NOT NULL, -- Corrigido para VARCHAR(40) para corresponder à chave primária de departamento
    id_instrutor INT NOT NULL,
    id_estudante INT NOT NULL,
    FOREIGN KEY (id_instrutor) REFERENCES instrutor(id), -- Chave estrangeira para a tabela instrutor
    FOREIGN KEY (id_departamento) REFERENCES departamento(id_departamento), -- Chave estrangeira para a tabela departamento
    FOREIGN KEY (id_estudante) REFERENCES estudante(id) -- Chave estrangeira para a tabela estudante
);
