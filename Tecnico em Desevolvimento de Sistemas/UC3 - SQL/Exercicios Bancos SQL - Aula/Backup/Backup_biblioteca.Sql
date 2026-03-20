CREATE DATABASE biblioteca;
use biblioteca;

CREATE TABLE livros(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(100) NOT NULL,
    nome_autor varchar(100) NOT NULL,
    lancamento varchar(100) NOT NULL,
    genero varchar(100) NOT NULL
);  -- cria a tabela livros

CREATE TABLE locador(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100) NOT NULL UNIQUE,
    endereco varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    telefone varchar(100) NOT NULL 
); -- cria a tabela locador

CREATE TABLE locacao_livros(
    livro_id INT NOT NULL,  -- Referência à tabela livros
    locador_id INT NOT NULL, -- Referência à tabela locador
    data_locacao DATE NOT NULL,
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (livro_id) REFERENCES livros(ID),   -- Chave estrangeira para livros(ID)
    FOREIGN KEY (locador_id) REFERENCES locador(ID) -- Chave estrangeira para locador(ID)
); -- Recebe informação de locador e livros tabela de conexção

CREATE TABLE estoque_produtos(
   id int not null auto_increment primary key,
   nome_produto varchar(50) not null,
   quantidade_produtos int not null,
   preco_produto int not null,
   clientes_id INT, -- Adicionando a coluna para chave estrangeira
   FOREIGN KEY (clientes_id) REFERENCES clientes(ID) -- CHAVE estrageira para o clientes pois a locador foi trocada para clientes
);

-- Zerar banco "NUNCA USAR ESSA  PORQUE PODE DAR DEMISSÃO JUSTA CAUSA NUNCA USAR" --
DELETE FROM livros;
DELETE FROM locador;
DELETE FROM locacao_livros;

-- Insere informações na tabela Livros
INSERT INTO livros(titulo,nome_autor,lancamento,genero) Values
('Introdução a Expres I','Daniel o supremo','2023-10-01','Computação'),
('Introdução a Expres II','Daniel o supremo','2023-10-01','Computação'),
('Introdução a Expres III','Daniel o supremo','2023-10-01','Computação'),
('Introdução a Expres IV','Daniel o supremo','2023-10-01','Computação'),
('Introdução a Expres V','Daniel o supremo','2023-10-01','Computação'),
('Introdução a Expres VI','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL I','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL II','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL III','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL IV','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL V','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL VI','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL VII','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL VIII','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL IX','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL X','Daniel o supremo','2023-10-01','Computação'),
('Introdução a SQL XI','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior I','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior II','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior III','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior IV','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior V','Daniel o supremo','2023-10-01','Computação'),
('As Aventuras de um Senior VI','Daniel o supremo','2023-10-01','Computação');

-- Insere Informações na tabela Locador
INSERT INTO locador(nome,endereco,email,telefone)Values
('Dalvano Machado','Rua das pitangas 114','dalvanomachado@gmail.com','519999999'),
('Kalleo Silva','Rua das pitangas 114','dalvanomachado3@gmail.com','519999987'),
('Daniel Silveira Pedro','Rua das pitangas 114','dalvanomachado4@gmail.com','519999989'),
('Joao da Silva','Rua das pitangas 114','dalvanomachado5@gmail.com','519999900'),
('Joao Silva Junior','Rua das pitangas 114','dalvanomachado6@gmail.com','519999912'),
('Olaf Kleins','Rua das pitangas 114','dalvanomachado7@gmail.com','519999913');

-- Insere Informações na tabela locacao_livros
INSERT INTO locacao_livros(livro_id, locador_id, data_locacao) VALUES
(1, 1, '2023-10-02'),
(2, 2, '2023-10-03'),
(3, 3, '2023-10-03');

SELECT * from livros;
SELECT * from locacao_livros;
SELECT * from locador;

-- Zera o Indice da tabela para o contador, rodar
ALTER TABLE livros AUTO_INCREMENT = 1;
ALTER TABLE locador AUTO_INCREMENT = 1;
ALTER TABLE locacao_livros AUTO_INCREMENT = 1;


-- UPDATE NA TABELA DE LIVROS TIRANDO O ID 1 E COLOCADO NO ID 1 NO NOVO LIVRO
UPDATE livros
SET titulo = 'Introdução a POO(Programação Orientada a Objetos)'
WHERE ID = 1;

-- UPDATE NA TABELA DE LIVROS TIRANDO O ID 1 E COLOCADO NO ID 1 NO NOVO LIVRO
UPDATE livros
SET titulo = 'Introdução a POO(Programação Orientada a Objetos)II'
WHERE ID = 2;

-- UPDATE NA TABELA DE LIVROS TIRANDO O ID 1 E COLOCADO NO ID 1 NO NOVO LIVRO
UPDATE livros
SET titulo = 'Introdução a POO(Programação Orientada a Objetos)III'
WHERE ID = 3;


-- DELETANDO LIVRO DA TABELA COM ID 3
DELETE FROM livros
WHERE ID = 3;

DELETE FROM locador
WHERE ID = 3;

-- Remove campo da tabela locador cpf
ALTER TABLE locador
DROP COLUMN cpf;

-- SELECIONANDO LIVRO DA TABELA LIVROS COM ID 4
SELECT * FROM livros WHERE ID = 4;

-- Alterar Escrutura da tabela e acrescentar informação:
ALTER TABLE livros
ADD COLUMN informacao VARCHAR(20) NOT NULL;

ALTER TABLE locador
ADD COLUMN cpf VARCHAR(45) NOT NULL;

RENAME TABLE locador TO clientes;

ALTER TABLE estoque_produtos
MODIFY COLUMN preco_produto decimal NOT NULL;


INSERT INTO estoque_produtos(nome_produto,quantidade_produtos,preco_produto)VALUES
('Motor AP','20','5.99'),
('Motor CHT 1.6','5','2599.90');


