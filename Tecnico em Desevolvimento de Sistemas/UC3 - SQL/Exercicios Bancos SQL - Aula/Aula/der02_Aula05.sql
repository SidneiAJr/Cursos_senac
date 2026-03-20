-- Criar Banco de Dados
CREATE DATABASE filmes; -- Criar Banco filmes

USE filmes; -- Usa o banco de dados filmes

-- Criar Tabela ator
CREATE TABLE ator (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_ator VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL,
    educacao varchar(40) NOT NULL,
    aniversario date NOT NULL,
    genero_ator varchar(6) NOT NULL 
);

-- Criar Tabela estúdio
CREATE TABLE estudio (
    id_estudio INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_estudio VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    campania varchar(40) NOT NULL,
    fundado_em date,
    tipo_empresa varchar(40) NOT NULL
);

create TABLE diretor(
  id_diretor int primary key auto_increment,
  nome varchar(40) not null,
  genero_diretor varchar(40) not null,
  local_nascimento varchar(40) not null,
  pais_origem varchar(40) not null,
  ano_nascimento year not null
);

-- Criar Tabela filme
CREATE TABLE filme (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    titulo_filme VARCHAR(100) NOT NULL,
    ano_lancamento INT NOT NULL,
    duracao INT NOT NULL, -- Duração em minutos
    id_estudio INT NOT NULL, -- Coluna correta para chave estrangeira de estudio
    pais_origin VARCHAR(40) NOT NULL,
    lancamento DATE NOT NULL, -- Tipo de dado corrigido para DATA
    linguagem VARCHAR(40) NOT NULL,
    categoria VARCHAR(40) NOT NULL,
    id_diretor INT NOT NULL,
    FOREIGN KEY (id_estudio) REFERENCES estudio(id_estudio), -- Chave estrangeira para a tabela estúdio
    FOREIGN KEY (id_diretor) REFERENCES diretor(id_diretor) -- Chave estrangeira para a tabela diretor
);

-- Criar Tabela elenco (relacionamento entre atores e filmes)
CREATE TABLE elenco (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_ator INT NOT NULL,
    id_filme INT NOT NULL,
    papel VARCHAR(100), -- Papel que o ator faz no filme
    FOREIGN KEY (id_ator) REFERENCES ator(id), -- Chave estrangeira para a tabela ator
    FOREIGN KEY (id_filme) REFERENCES filme(id) -- Chave estrangeira para a tabela filme
);
