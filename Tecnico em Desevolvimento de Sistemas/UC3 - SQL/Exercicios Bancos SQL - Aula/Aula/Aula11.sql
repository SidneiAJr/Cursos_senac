CREATE DATABASE loja2; -- Cria o Banco Loja

USE loja2; -- Seleciona Tabela para usar

-- Cria a tabela clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL
);

-- Cria a tabela Pedidos
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY auto_increment,
    id_cliente INT,
    produto VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Cria a tabela fornecedores
CREATE TABLE fornecedores (
    id_fornecedor INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL
);

-- Cria a tabela estoque
CREATE TABLE estoque (
    id_produto INT PRIMARY KEY auto_increment,
    id_fornecedor INT,
    produto VARCHAR(50),
    quantidade INT NOT NULL,
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedores(id_fornecedor)
);

 -- Insert Na tabela clientes
INSERT INTO clientes (nome) VALUES
('Ana'),
('Bruno'),
('Carlos');

-- Insert Na tabela pedidos
INSERT INTO pedidos (id_pedido, id_cliente, produto) VALUES
(101, 1, 'Livro'),
(102, 2, 'Caneta'),
(103, 2, 'Caderno');

-- Insert Na tabela de fornecedores
INSERT INTO fornecedores (id_fornecedor, nome) VALUES
-- (3,'Fornecedor C');
-- (1, 'Fornecedor A'),
-- (2, 'Fornecedor B');

-- Insert na tabela estoque
INSERT INTO estoque (id_produto, id_fornecedor, produto, quantidade) VALUES
(201, 1, 'Livro', 50),
(202, 1, 'Caneta', 100),
(203, 2, 'Caderno', 30);

-- 1) INNER JOIN ->Exibir os nomes dos clientes e os produtos que eles pediram
SELECT clientes.nome, pedidos.produto
FROM pedidos
INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente
ORDER BY clientes.nome;

-- 2) LEFT JOIN -> Exibir todos os clientes e os produtos que eles pediram, incluindo os clientes que não fizeram pedidos.
SELECT clientes.nome, pedidos.produto
FROM clientes
LEFT JOIN pedidos ON pedidos.id_cliente = clientes.id_cliente
ORDER BY clientes.nome;

-- 3) RIGHT JOIN ->  Exibir todos os produtos do estoque e os fornecedores correspondentes.
SELECT fornecedores.nome, estoque.produto
FROM fornecedores
RIGHT JOIN estoque ON fornecedores.id_fornecedor = estoque.id_fornecedor
ORDER BY fornecedores.nome;

-- 4) JOIN Múltiplo -> Exibir o nome dos clientes, o produto que eles pediram, o fornecedor desse produto e a quantidade disponível no estoque.
SELECT clientes.nome AS clientes, pedidos.produto AS produto, fornecedores.nome AS  fornecedor, estoque.quantidade
FROM pedidos
JOIN clientes on pedidos.id_cliente = clientes.id_cliente
JOIN estoque ON pedidos.produto = estoque.produto
JOIN fornecedores ON estoque.id_fornecedor = fornecedores.id_fornecedor
order by clientes.nome;

-- 5) LEFT JOIN com Condição -> Exibir todos os produtos do estoque, mesmo aqueles que não têm pedidos correspondentes, e a quantidade disponível.
SELECT estoque.produto as produto_estoque, pedidos.id_pedido as pedido_id, estoque.quantidade
FROM estoque
LEFT JOIN pedidos ON pedidos.produto = estoque.produto
ORDER BY estoque.produto;

-- 6) RIGHT JOIN com Condição ->Exibir todos os fornecedores e os produtos que eles fornecem, incluindo fornecedores que não têm produtos no estoque.
SELECT fornecedores.nome AS fornecedor, estoque.produto AS produto
FROM estoque
RIGHT JOIN fornecedores ON estoque.id_fornecedor = fornecedores.id_fornecedor
ORDER BY fornecedores.id_fornecedor;





