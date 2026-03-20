CREATE DATABASE campeonato; -- Cria o Banco de dados 

use campeonato; -- Seleciona ou usa o banco 
-- Cria a tabela equipe

CREATE TABLE equipe (
    id_equipe INT PRIMARY KEY AUTO_INCREMENT,
    nome_equipe VARCHAR(55) NOT NULL,
    informacao VARCHAR(100) NOT NULL
);

CREATE TABLE jogo (
    id_jogo INT PRIMARY KEY AUTO_INCREMENT,
    nome_jogo VARCHAR(55) NOT NULL,
    tipo_jogo VARCHAR(50),
    data_lancamento DATE
);

CREATE TABLE jogador (
    id_jogador INT PRIMARY KEY AUTO_INCREMENT,
    nome_jogador VARCHAR(55) NOT NULL,
    id_equipe INT NOT NULL,
    FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe)
);

CREATE TABLE classificacao (
    id_classificacao INT PRIMARY KEY AUTO_INCREMENT,
    id_jogo INT NOT NULL,
    id_equipe INT NOT NULL,
    posicao INT NOT NULL, -- 1, 2, 3, ou 4
    FOREIGN KEY (id_jogo) REFERENCES jogo(id_jogo),
    FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe)
);

CREATE TABLE pontuacao_por_posicao (
    posicao INT PRIMARY KEY,
    pontos INT
);

INSERT INTO pontuacao_por_posicao (posicao, pontos) VALUES
(1, 100),
(2, 50),
(3, 30),
(4, 5);

INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES 
(1, 3, 1),  -- Pixelados
(1, 2, 2),  -- Platinados
(1, 4, 4),  -- Labubus
(1, 1, 3);  -- JASK

-- Jogo 2 - Ultimate Mortal Kombat 3
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES 
(2, 2, 3),  -- Platinados 
(2, 4, 2),  -- Labubus 
(2, 3, 1),  -- Pixelados
(2, 1, 4);  -- JASK

-- Jogo 3 - Killer Instinct
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES 
(3, 4, 2),  -- Labubus
(3, 2, 1),  -- Platinados 
(3, 3, 3),  -- Pixelados 
(3, 1, 4);  -- JASK

-- Jogo 4 - Super Mario Kart
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES 
(4, 2, 2),  -- Platinados 
(4, 3, 4),  -- Pixelados 
(4, 4, 1),  -- Labubus 
(4, 1, 3);  -- JASK 

-- Jogo 5 - Bomberman 5
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES 
(5, 3, 2),  -- Pixelados
(5, 4, 3),  -- Labubus 
(5, 2, 4),  -- Platinados 
(5, 1, 1);  -- JASK


INSERT INTO equipe (nome_equipe, informacao) VALUES
("Equipe JASK", "Grupo 1"),
("Os Platinados", "Grupo 2"),
("Os Pixelados", "Grupo 3"),
("Os Labubus", "Grupo 4");

INSERT INTO jogo (nome_jogo, tipo_jogo, data_lancamento) VALUES
("Street Fighter II", "Luta", '1991-02-01'),
("Ultimate Mortal Kombat 3", "Luta", '1995-09-01'),
("Killer Instinct", "Luta", '1994-11-01'),
("Super Mario Kart", "Corrida", '1992-08-27'),
("Bomberman 5", "Tiro", '1997-12-01');

INSERT INTO jogador (nome_jogador, id_equipe) VALUES
("Kalleo", 1),
("Arthur", 1),
("Sidnei", 1),
("Juan", 1),
("Gabriela", 2),
("Luis", 2),
("Jesus", 2),
("Miguel1", 2),
("Miguel2", 2),
("Davi",3),
("Jorge",3),
("Gabriel",3),
("Mariana",3),
("Eduarda",3),
("Timotio",4),
("Henry",4),
("Henrique",4),
("Nicolas",4),
("Wagner",4);

/*
Pontuação de Rank
1º Lugar-> 100
2º Lugar-> 50
3º Lugar-> 30
4º Lugar-> 5

Pontuação Total:
1 - JASK Pontos 145
2 - 30+5+50+50+100 = 235 Platinados
3 - 100 +50+5+100 +30 = 285 Pixelados
4 - 50+30+100+5+50 = 235  Labubus
*/

-- 1 Quais são os jogadores e a qual grupo cada um pertence)
SELECT nome_jogador,
(SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = jogador.id_equipe) AS grupo
FROM 
    jogador;
-- 2 Quais partidas foram jogadas, com jogador, jogo e pontuação)
SELECT 
    classificacao.id_jogo,
    classificacao.id_equipe,
    pontuacao_por_posicao.pontos
FROM 
    classificacao,
    pontuacao_por_posicao
WHERE 
    classificacao.posicao = pontuacao_por_posicao.posicao;

-- 3 Qual é a soma total de pontos de cada grupo
SELECT 
    classificacao.id_equipe,SUM(pontuacao_por_posicao.pontos) AS total_pontos
FROM classificacao,pontuacao_por_posicao
WHERE classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY classificacao.id_equipe;
-- 4 Quem teve a maior pontuação em cada jogo
SELECT 
    classificacao.id_equipe,
    MAX(pontuacao_por_posicao.pontos) AS maior_pontuacao
FROM 
    classificacao,
    pontuacao_por_posicao
WHERE 
    classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    classificacao.id_equipe;
-- 5 Qual é a média de pontuação de cada grupo?
SELECT 
    classificacao.id_equipe,
    AVG(pontuacao_por_posicao.pontos) AS media_pontuacao
FROM 
    classificacao,
    pontuacao_por_posicao
WHERE 
    classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    classificacao.id_equipe;

-- 6 Qual foi a menor e a maior pontuação de cada grupo?
SELECT 
    classificacao.id_equipe,
    MIN(pontuacao_por_posicao.pontos) AS menor,
    MAX(pontuacao_por_posicao.pontos) AS maior
FROM 
    classificacao,
    pontuacao_por_posicao
WHERE 
    classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    classificacao.id_equipe;
    
-- 7 Ranking final dos grupos, ordenado da maior para a menor pontuação total
SELECT 
    classificacao.id_equipe,
    SUM(pontuacao_por_posicao.pontos) AS total_pontos
FROM 
    classificacao,
    pontuacao_por_posicao
WHERE 
    classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    classificacao.id_equipe
ORDER BY 
    total_pontos DESC;


 
    
