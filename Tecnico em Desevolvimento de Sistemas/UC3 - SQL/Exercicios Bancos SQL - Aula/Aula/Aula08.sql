-- Atualizando categorias de produtos
Use aula07;
UPDATE produtos SET categoria = 'Utensílios' WHERE id = 3;
UPDATE produtos SET categoria = 'Eletrônicos' WHERE id IN (4, 12, 13, 20);
UPDATE produtos SET categoria = 'Informática' WHERE id IN (5, 7, 8, 10, 11, 14, 15, 16, 18, 19);
UPDATE produtos SET categoria = 'Vestuário' WHERE id IN (6);
UPDATE produtos SET categoria = 'Brinquedos' WHERE id IN (8);


-- Criando a tabela compras (M:N clientes - produtos)

CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    produto_id INT NOT NULL,
    data_compra DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    quantidade INT NOT NULL CHECK (quantidade > 0),

    CONSTRAINT fk_compras_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    CONSTRAINT fk_compras_produto FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserindo dados em compras

INSERT INTO compras (cliente_id, produto_id, data_compra, quantidade) 
VALUES
(1, 4, '2025-01-12', 1),
(1, 6, '2025-02-03', 2),
(1, 18, '2025-03-07', 1),
(2, 10, '2025-01-25', 1),
(2, 14, '2025-02-10', 1),
(3, 12, '2025-03-01', 3),
(3, 1, '2025-02-18', 1),
(3, 9, '2025-02-23', 2),
(3, 8, '2025-03-02', 1),
(4, 19, '2025-03-02', 1),
(5, 2, '2025-02-20', 4),
(5, 20, '2025-01-15', 1),
(6, 8, '2025-03-05', 2),
(6, 17, '2025-02-09', 1),
(6, 11, '2025-03-11', 1),
(7, 15, '2025-02-27', 5),
(8, 5, '2025-03-01', 1),
(8, 7, '2025-01-18', 2),
(8, 13, '2025-02-14', 1),
(9, 16, '2025-03-06', 1),
(9, 9, '2025-02-25', 2),
(10, 3, '2025-03-10', 6),
(11, 12, '2025-01-21', 2),
(11, 6, '2025-03-08', 1),
(12, 18, '2025-02-15', 1),
(12, 1, '2025-02-28', 2),
(12, 5, '2025-03-09', 3),
(13, 14, '2025-03-12', 1),
(14, 10, '2025-01-30', 4),
(14, 7, '2025-02-19', 2),
(15, 17, '2025-03-04', 1),
(15, 4, '2025-01-29', 3),
(15, 20, '2025-02-05', 1),
(15, 19, '2025-02-22', 2),
(16, 8, '2025-02-07', 1),
(16, 11, '2025-03-06', 1),
(17, 9, '2025-01-27', 2),
(18, 2, '2025-02-16', 1),
(18, 15, '2025-03-03', 4),
(19, 6, '2025-01-20', 2),
(19, 12, '2025-02-12', 1),
(19, 1, '2025-03-01', 1),
(20, 4, '2025-02-08', 1);

-- Consulta com where e dois and
SELECT c.nome as cliente, p.nome AS produto, p.preco as Valor
FROM clientes c,compras co, produtos p
WHERE c.id = co.cliente_id
AND c.id = co.produto_id
AND p.preco > 1000;

-- Consulta geral com where
SELECT c.* FROM clientes c, compras co
WHERE c.id != co.cliente_id;

-- Consulta de Aula
SELECT nome FROM clientes
where id NOT IN
(SELECT cliente_id FROM compras);

SELECT DISTINCT produto_id from compras;

SELECT p.* from produtos p, compras co
where p.id != co.produto_id;

SELECT p.* FROM produtos p
WHERE p.id NOT IN (SELECT distinct produto_id FROM compras);

SELECT c.nome, co.id, co.data_compra
FROM clientes c, compras co
WHERE c.id = co.cliente_id;

SELECT c.nome, p.nome, co.quantidade
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id;
  
SELECT c.nome, p.nome, p.preco
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
ORDER BY c.nome ASC, p.preco DESC;  
  
  
-- Exercicio 1 A:  
SELECT  c.nome as clientes , p.nome as produtos
FROM clientes c, compras cp, produtos p
WHERE c.id = cp.cliente_id
AND cp.produto_id = p.id;

-- Exercicio 2 A:
-- Mostre os clientes que compraram mais de 1 unidade de qualquer produto.
SELECT c.nome, co.id, p.nome AS produtos, co.quantidade
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
AND co.produto_id = p.id
AND co.quantidade > 1;

-- Exercicio 3 A:
-- Liste os produtos da categoria "Eletrônicos" comprados por clientes de Canoas.
SELECT c.nome AS cliente, p.nome AS produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND c.cidade = 'Canoas'
  AND p.categoria LIKE '%Eletronicos%';

-- Exercicio 4 A:
-- Mostre os clientes que compraram "Gamepad 54":
SELECT c.nome as clientes, p.nome as produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
and co.produto_id = p.id
AND p.nome LIKE '%Gamepad 54%';

-- Exercicio 5 A:
-- Liste todos os clientes que já compraram "Notebook"
SELECT c.nome AS cliente, p.nome AS produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.nome LIKE '%Notebook%';

-- Exercicio 6 A:
-- Mostre os nomes dos clientes e os preços dos produtos comprados acima de R$ 1500.
SELECT c.nome AS cliente, p.nome AS produto, p.preco
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.preco > 1500;

-- Exercicio 7 A:
-- Liste clientes de Salvador que compraram produtos da categoria "Informática"
SELECT c.nome AS cliente, p.nome AS produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND c.cidade = 'Salvador'
  AND p.categoria LIKE '%informatica%';
  
-- Exercicio 8 A:
-- Mostre todos os produtos que o cliente "Ana Fernandes" já comprou.
SELECT p.nome AS produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND c.nome = 'Ana Fernandes';
  
-- Exercicio 9 A:
-- Liste todos os clientes que compraram produtos cujo nome começa com "Camiseta"
SELECT c.nome AS cliente, p.nome AS produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND p.nome LIKE '%Camiseta%';
  
-- Exercico 10 A:
-- Mostre todos os clientes e produtos comprados em fevereiro de 2025
SELECT c.nome AS cliente, p.nome AS produtos, co.data_compra
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
  AND p.id = co.produto_id
  AND co.data_compra BETWEEN '2025-02-01' AND '2025-02-28';






