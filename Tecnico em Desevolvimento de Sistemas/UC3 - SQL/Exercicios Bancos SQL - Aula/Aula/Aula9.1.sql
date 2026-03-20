CREATE DATABASE vendas;

use vendas;

-- Criar tabela clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    idade INT NOT NULL CHECK (idade >= 0 AND idade <= 120)
);

-- Criar tabela produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0)
);

-- Inserir dados na tabela clientes
INSERT INTO clientes (id, nome, cidade, idade) VALUES
(1, 'Lucas Fernandes', 'Salvador', 32),
(2, 'Pedro Cavalcanti', 'Canoas', 50),
(3, 'Bruno da Cunha', 'Curitiba', 41),
(4, 'Rafaela da Rocha', 'São Paulo', 36),
(5, 'Júlia Barros', 'Salvador', 52),
(6, 'Marcela Ribeiro', 'Canoas', 47),
(7, 'Renan Costa', 'Porto Alegre', 42),
(8, 'Ricardo Cavalcanti', 'Curitiba', 56),
(9, 'Vanessa das Neves', 'Canoas', 54),
(10, 'Juliana da Cunha', 'Curitiba', 28),
(11, 'Lucas da Rocha', 'São Paulo', 38),
(12, 'Carolina Moreira', 'Porto Alegre', 65),
(13, 'Ana Fernandes', 'São Paulo', 44),
(14, 'Felipe Martins', 'Canoas', 60),
(15, 'Gabriela Pereira', 'Curitiba', 41),
(16, 'André Almeida', 'Salvador', 26),
(17, 'Eduardo Correia', 'Porto Alegre', 18),
(18, 'Larissa Correia', 'Curitiba', 39),
(19, 'Diego Barbosa', 'São Paulo', 58),
(20, 'Camila Rodrigues', 'Canoas', 23);

-- Inserir dados na tabela produtos
INSERT INTO produtos (id, nome, categoria, preco) VALUES
(1, 'Celular 49', 'Informática', 544.88),
(2, 'Camiseta 78', 'Vestuário', 1212.62),
(3, 'Copo 69', 'Informática', 1459.94),
(4, 'Gamepad 11', 'Brinquedos', 446.84),
(5, 'HD 47', 'Brinquedos', 296.51),
(6, 'Camiseta 7', 'Eletrônicos', 990.37),
(7, 'Notebook 89', 'Alimentos', 121.96),
(8, 'Boneco 41', 'Informática', 1283.01),
(9, 'Celular 15', 'Informática', 881.59),
(10, 'Mouse 95', 'Informática', 1251.32),
(11, 'Notebook 64', 'Games', 1226.12),
(12, 'Fone 83', 'Games', 83.34),
(13, 'Fone 37', 'Brinquedos', 428.27),
(14, 'Teclado 77', 'Brinquedos', 1142.89),
(15, 'Mouse 2', 'Vestuário', 90.01),
(16, 'HD 79', 'Brinquedos', 1255.95),
(17, 'Boneco 29', 'Brinquedos', 387.66),
(18, 'Notebook 5', 'Informática', 765.00),
(19, 'Teclado 10', 'Eletrônicos', 781.18),
(20, 'Gamepad 54', 'Games', 274.66);


-- Atualizando categorias de produtos
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
SELECT p.*
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
AND p.id = co.produto_id
AND p.categoria = "Eletrônicos"
AND c.cidade = "Canoas";

-- Exercicio 4 A:
-- Mostre os clientes que compraram "Gamepad 54":
SELECT c.nome as clientes, p.nome as produto
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
and co.produto_id = p.id
AND p.nome = 'Gamepad 54';

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
  AND p.categoria = 'informatica';
  
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
  AND p.nome LIKE 'Camiseta%';
  
-- Exercico 10 A:
-- Mostre todos os clientes e produtos comprados em fevereiro de 2025
SELECT c.nome AS cliente, p.nome AS produtos, co.data_compra
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id
AND p.id = co.produto_id
AND co.data_compra BETWEEN '2025-02-01' AND '2025-02-28';

/*
=================================================================
Fim da Aula08
/*

/*
==================================================================
Aula 09 - Somente Exemplos sem exercicios, somente verificação:
-- Exemplo de soma I
SELECT SUM(preco * quantidade) AS total_vendas
FROM compras co, produtos p
WHERE co.produto_id = p.id;

-- Exemplo de soma II
SELECT SUM(p.preco * co.quantidade) AS venda_setor
FROM compras co, produtos p
WHERE co.produto_id = p.id 
AND p.categoria = 'Informática';

==================================================================

-- Verificar categoria para verificar quantidade de produtos
SELECT categoria, COUNT(*) AS total_produtos
FROM produtos
GROUP BY categoria
HAVING COUNT(*) < 100; 
==================================================================
SELECT round(avg(preco),2) AS preco_medio FROM produtos; -- Casa Decimal (2)
==================================================================
-- Preço médio dos produtos
SELECT AVG(preco) AS preco_medio FROM produtos;
==================================================================
-- Média de idade dos clientes
SELECT AVG(idade) FROM clientes;
==================================================================
-- Produto mais caro
SELECT MAX(preco) FROM produtos;
==================================================================
-- Data da última compra
SELECT MAX(data_compra) FROM compras;
==================================================================
-- Produto mais barato
SELECT MIN(preco) FROM produtos;
==================================================================
-- Menor quantidade comprada
SELECT MIN(quantidade) FROM compras;
==================================================================
SELECT categoria, COUNT(*) AS qtd_produtos
FROM produtos
GROUP BY categoria;
==================================================================
SELECT p.categoria, SUM(p.preco * co.quantidade) AS total_vendido
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.categoria;
==================================================================
SELECT cidade, COUNT(*) AS qtd_clientes
FROM clientes
GROUP BY cidade
HAVING COUNT(*) > 5;  
==================================================================
SELECT p.categoria, 
       AVG(p.preco) AS preco_medio,
       SUM(co.quantidade) AS unidades_vendidas
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.categoria
HAVING AVG(p.preco) > 500 AND SUM(co.quantidade) > 10;
==================================================================

----- Múltiplos níveis de agregação

SELECT 
    c.cidade,
    p.categoria,
    COUNT(*) AS qtd_compras,
    SUM(p.preco * co.quantidade) AS total_vendido
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.cidade, p.categoria;
==================================================================
----- Ordenando resultados agregados

SELECT p.nome, SUM(co.quantidade) AS total_vendido
FROM produtos p, compras co
WHERE p.id = co.produto_id
GROUP BY p.nome
ORDER BY total_vendido DESC
LIMIT 5;  -- Top 5 produtos mais vendidos
==================================================================
-------- Agregação condicional
==================================================================
SELECT 
    c.cidade,
    SUM(CASE WHEN p.categoria = 'Eletrônicos' THEN 1 ELSE 0 END) AS qtd_eletronicos,
    SUM(CASE WHEN p.categoria = 'Informática' THEN 1 ELSE 0 END) AS qtd_informatica
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.cidade;
==================================================================
*/

----- Exercicios da aula 9.1:

-- 1-Conte quantos produtos existem em cada categoria
SELECT categoria, COUNT(*) AS total_produtos
FROM produtos
GROUP BY categoria;

-- 2-Calcule o valor total em estoque (preço × quantidade) por categoria
SELECT p.categoria, SUM(preco * quantidade) AS estoque_valor
FROM compras co, produtos p
WHERE co.produto_id = p.id 
GROUP BY p.categoria;

-- 3-Liste as 5 cidades com mais clientes.
SELECT cidade, COUNT(*) AS clientes_compras_cidades
FROM clientes c, compras co, produtos p
WHERE c.id = co.cliente_id AND p.id = co.produto_id
GROUP BY c.cidade
ORDER BY clientes_compras_cidades DESC
LIMIT 5;

----- 4-Mostre os produtos que nunca foram comprados(*Removido*)
SELECT * from produtos
WHERE id NOT IN(select produto_id from compras);

----- 5-Calcule a média de idade dos clientes por cidade
SELECT cidade,AVG(idade) as idade_media_clientes_cidades
from clientes
GROUP BY cidade
ORDER BY cidade; -- Com casa decimal vai dar 45.50000

SELECT cidade, ROUND(AVG(idade), 1) AS media_idade_clientes 
from clientes
group by cidade
order by cidade; -- com uma casa decimal 42.5 Anos

----- 6-Liste os clientes que gastaram mais de R$ 5000 no total
SELECT c.id, c.nome, SUM(preco*quantidade) AS total_gasto_cliente
FROM clientes c, compras co,produtos p
WHERE c.id = co.cliente_id
AND co.produto_id= p.id
GROUP BY c.id, c.nome
HAVING total_gasto_cliente >5000;

----- 7-Calcule o ticket médio (valor médio) por compra
SELECT avg(preco*quantidade) as ticket_medio
from compras c, produtos p
WHERE c.produto_id = p.id;


----- 8-Liste as categorias com vendas médias superiores a R$ 1000
SELECT p.categoria, ROUND(AVG(p.preco*co.quantidade),1)AS venda_media_acima1000 -- Com somente 1 casa decimal
from produtos p, compras co
WHERE co.produto_id = p.id
GROUP BY p.categoria
HAVING AVG (p.preco*co.quantidade)>1000;

SELECT categoria, AVG (p.preco*co.quantidade) AS venda_media_acima1000 -- Com somente 1 casa decimal
from produtos p, compras co
WHERE co.produto_id = p.id
GROUP BY p.categoria
HAVING AVG (p.preco*co.quantidade)>1000; -- Valor não trato por casa decimal, valor inteiro

----- 9-Mostre a diferença entre o produto mais caro e o mais barato em cada categoria
SELECT categoria, (max(preco) - min(preco)) as diferenca_preco
from produtos
group by categoria
order by categoria asc;

/*
==================================
           Aula 11
==================================
*/




