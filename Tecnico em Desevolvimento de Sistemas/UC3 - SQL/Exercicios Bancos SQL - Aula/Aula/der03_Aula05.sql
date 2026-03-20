CREATE DATABASE Restaurante; -- Criar Banco Restaurante

use Restaurante; -- Usa a tabela de escola

-- Criar Tabela estudante
CREATE TABLE usuario(
 id_usuario int auto_increment primary key NOT NULL,
 nome_usuario varchar(40)NOT NULL,
 cpf_usuario varchar(40)NOT NULL,
 data_nascimento varchar(40)NOT NULL,
 email_usuario varchar(40) UNIQUE,
 papel ENUM ("Chefe","Consumidor") NOT NULL,
 senha varchar(255) NOT NULL
);

-- Criar Tabela Instrututor
CREATE TABLE ordem(
 id_ordem int auto_increment primary key,
 criado_quando datetime NOT NULL default current_timestamp,
 id_usuario int not null,
 status_pedido ENUM("Em preparo","A caminho","Recebido","Aguardando","Pendente"),
 FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario) -- Chave estrageira do Estudante
);

-- Criar Tabela curso
CREATE TABLE prato(
 id_prato int auto_increment primary key NOT NULL,
 nome_prato varchar(40) NOT NULL,
 descricao_prato TEXT NOT NULL,
 preco decimal(10,2) NOT NULL,
 disponivel boolean NOT NULL
);

-- Criar Tabela departamento
CREATE TABLE ordem_lista(
 id int auto_increment primary key NOT NULL,
 id_ordem int not null,
 id_prato int not null,
 quantidade int not null,
 FOREIGN KEY(id_ordem) REFERENCES ordem(id_ordem), -- Chave estrageira do Estuda
 FOREIGN KEY(id_prato) REFERENCES prato(id_prato) -- Chave estrageira do Estuda
);


