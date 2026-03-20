CREATE DATABASE vendas;

use vendas;

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
 quantidade int not null,
 id_categorias int,
 id_pedidos int
);

INSERT INTO categorias (nome,descricao_categoria)VALUES
("Pneu Aro 20","Pneu Aro 20"),
("Pneu Aro 21","Pneu Aro 20"),
("Pneu Aro 16","Pneu Aro 20"),
("Pneu Aro 18","Pneu Aro 20");

INSERT INTO usuarios (nome,descricao_usuario,informacao_usuario,senha_usuario)VALUES
("pedro1","1","1","1"),
("pedro11","2","2","2"),
("KalleoPedro","2","2","2");

INSERT INTO pedidos (descricao_pedido,status_pedido,id_usuarios)VALUES
("1","1",1),
("1","1",2),
("1","1",3);

INSERT INTO produtos (nome,descricao_produto,preco_produto,quantidade,id_categorias,id_pedidos)VALUES
("Pedro1","Pneu Aro 80", 4999.99,20,2,2);

ALTER TABLE produtos 
MODIFY COLUMN preco_produto DECIMAL(10,2) NOT NULL;


ALTER TABLE produtos DROP FOREIGN KEY fk_produtos_categorias;

ALTER TABLE produtos
ADD constraint fk_produto_pedidos
foreign key(id_pedidos)
REFERENCES pedidos(id_pedidos)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE produtos
ADD constraint fk_produtos_categorias
foreign key(id_categorias)
REFERENCES categorias(id_categorias)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE pedidos
ADD constraint fk_pedidos_usuario
foreign key(id_usuarios)
REFERENCES usuarios(id_usuarios)
ON DELETE CASCADE
ON UPDATE CASCADE;

delete from usuarios where id_usuarios=1;

select * from pedidos;

show create table produtos;

/*
FK para criar e nome da tabela filha para a tabela pai fk_nome da tabela pai para a tabela filha
*/

