CREATE DATABASE vendas; -- Cria a tabela

use vendas; -- Usa a tabela

-- truncate comando nunca usar

/*
show create table categorias; 
show create table usuarios;  
show create table pedidos;
show create table produtos;
 * Comando para listar as tabelas, e sua contrução.
-- Tente inserir um pedido com id_usuario inexistente. O que acontece? Erro
-- Delete uma categoria que possua produtos e verifique se o campo id_categoria foi setado para NULL, se estiver setado com on cascade update, ele seta em cascada
-- Remova a FK id_produto da tabela pedidos: Comando acima
Comandos para comentario e astesricos e barra ou --
*/

CREATE TABLE categorias(
 id_categorias INT PRIMARY KEY AUTO_INCREMENT,
 nome varchar(50) NOT NULL,
 descricao_categoria varchar(50) NOT NULL
);

CREATE TABLE usuarios(
 id_usuarios INT PRIMARY KEY AUTO_INCREMENT,
 nome varchar(50) NOT NULL,
 descricao_usuario varchar(50) NOT NULL,
 informacao_usuario varchar(50) NOT NULL,
 senha_usuario varchar(50) NOT NULL
);

CREATE TABLE pedidos(
 id_pedidos INT PRIMARY KEY AUTO_INCREMENT,
 descricao_pedido varchar(50) NOT NULL,
 data_pedido datetime default current_timestamp NOT NULL,
 status_pedido ENUM("Em preparo","Preparando","Coletando","Em transito","Entregue") NOT NULL,
 id_usuarios int not null
);

CREATE TABLE produtos(
 id_produto INT PRIMARY KEY AUTO_INCREMENT,
 nome varchar(50) NOT NULL,
 descricao_produto varchar(50) NOT NULL,
 preco_produto float NOT NULL,
 quantidade int , -- Não usar Not null Aqui vai dar erro
 id_categorias int , -- Não usar Not null Aqui vai dar erro
 id_pedidos int  -- Não usar Not null Aqui vai dar erro
);

INSERT INTO categorias (nome, descricao_categoria) VALUES
("Pneu", "Carro de Passeio"),
("Pneu", "Caminhão"),
("Acessório", "Carro de Passeio"),
("Lubrificante", "Motores");

INSERT INTO usuarios (nome, descricao_usuario, informacao_usuario, senha_usuario) VALUES
("Pedro1", "Cliente regular", "CPF 0000001", "senha1"),
("Maria", "Cliente ouro", "CPF 0000002", "senha2"),
("João", "Cliente prata", "CPF 0000003", "senha3");

INSERT INTO pedidos (descricao_pedido, status_pedido, id_usuarios) VALUES
("Pedido de pneus", "Em preparo", 1),
("Pedido de acessórios", "Preparando", 2),
("Pedido de óleo", "Coletando", 3);

INSERT INTO produtos (nome, descricao_produto, preco_produto, quantidade, id_categorias, id_pedidos) VALUES
("Pneu Aro 15", "Pneu para carro passeio", 499.99, 10, 1, 1),
("Acessório Luxo", "Tapete premium", 99.99, 50, 3, 2),
("Óleo Sintético", "Lubrificante motor", 79.90, 30, 4, 3);

ALTER TABLE produtos
ADD constraint fk_produto_pedidos
foreign key(id_pedidos)
REFERENCES pedidos(id_pedidos)
ON DELETE SET NULL
ON UPDATE CASCADE;

ALTER TABLE produtos
ADD constraint fk_produtos_categorias
foreign key(id_categorias)
REFERENCES categorias(id_categorias)
ON DELETE SET NULL
ON UPDATE CASCADE;

ALTER TABLE pedidos
ADD constraint fk_pedidos_usuario
foreign key(id_usuarios)
REFERENCES usuarios(id_usuarios)
ON DELETE SET NULL
ON UPDATE CASCADE;

delete from usuarios where id_usuarios=1; -- Deleta usuarrio com ID 1

select * from pedidos; -- Seleciona todos os pedidos
select * from produtos;

show create table produtos;  -- Mostra a construção da tabela

ALTER TABLE produtos 
MODIFY COLUMN preco_produto DECIMAL(10,2) NOT NULL;

ALTER TABLE produtos DROP FOREIGN KEY fk_produtos_categorias; -- Deleta a chave estrageira

delete from categorias where id_categorias=2;

/*
FK para criar e nome da tabela filha para a tabela pai fk_nome da tabela pai para a tabela filha
*/

