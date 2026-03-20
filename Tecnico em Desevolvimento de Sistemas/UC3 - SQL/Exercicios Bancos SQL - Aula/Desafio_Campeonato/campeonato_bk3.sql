-- =========================================
-- CRIAÇÃO DO BANCO
-- =========================================
DROP DATABASE IF EXISTS campeonato;
CREATE DATABASE campeonato;
USE campeonato;

-- =========================================
-- TABELAS
-- =========================================

-- Equipes
CREATE TABLE equipe (
    id_equipe INT PRIMARY KEY AUTO_INCREMENT,
    nome_equipe VARCHAR(55) NOT NULL,
    informacao VARCHAR(100) NOT NULL
);

-- Jogos
CREATE TABLE jogo (
    id_jogo INT PRIMARY KEY AUTO_INCREMENT,
    nome_jogo VARCHAR(55) NOT NULL,
    tipo_jogo VARCHAR(50),
    data_lancamento DATE
);

-- Jogadores (cada um pertence a uma equipe)
CREATE TABLE jogador (
    id_jogador INT PRIMARY KEY AUTO_INCREMENT,
    nome_jogador VARCHAR(55) NOT NULL,
    id_equipe INT NOT NULL,
    FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe)
);

-- Classificação (posição de cada equipe em cada jogo)
CREATE TABLE classificacao (
    id_classificacao INT PRIMARY KEY AUTO_INCREMENT,
    id_jogo INT NOT NULL,
    id_equipe INT NOT NULL,
    posicao INT NOT NULL CHECK (posicao BETWEEN 1 AND 4),
    FOREIGN KEY (id_jogo) REFERENCES jogo(id_jogo),
    FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe)
);

-- Pontuação por posição
CREATE TABLE pontuacao_por_posicao (
    posicao INT PRIMARY KEY,
    pontos INT NOT NULL
);

-- =========================================
-- DADOS INICIAIS
-- =========================================

-- Tabela de pontuação fixa
INSERT INTO pontuacao_por_posicao (posicao, pontos) VALUES
(1, 100),
(2, 50),
(3, 30),
(4, 5);

-- Equipes
INSERT INTO equipe (nome_equipe, informacao) VALUES
("Equipe JASK", "Grupo 1"),
("Os Platinados", "Grupo 2"),
("Os Pixelados", "Grupo 3"),
("Os Labubus", "Grupo 4");

-- Jogos
INSERT INTO jogo (nome_jogo, tipo_jogo, data_lancamento) VALUES
("Street Fighter II", "Luta", '1991-02-01'),
("Ultimate Mortal Kombat 3", "Luta", '1995-09-01'),
("Killer Instinct", "Luta", '1994-11-01'),
("Super Mario Kart", "Corrida", '1992-08-27'),
("Bomberman 5", "Tiro", '1997-12-01');

-- Jogadores
INSERT INTO jogador (nome_jogador, id_equipe) VALUES
("Jian",1),
("Kalleo", 1),
("Arthur", 1),
("Sidnei", 1),
("Juan", 1),
("Gabriela", 2),
("Luis", 2),
("Jesus", 2),
("Miguel1", 2),
("Miguel2", 2),
("Davi", 3),
("Jorge", 3),
("Gabriel", 3),
("Mariana", 3),
("Eduarda", 3),
("Timotio", 4),
("Henry", 4),
("Henrique", 4),
("Nicolas", 4),
("Wagner", 4);

-- Classificação dos jogos
-- Jogo 1 - Street Fighter II
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES
(1, 3, 1),  -- Pixelados
(1, 2, 2),  -- Platinados
(1, 4, 4),  -- Labubus
(1, 1, 3);  -- JASK

-- Jogo 2 - Ultimate Mortal Kombat 3
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES
(2, 3, 1),  -- Pixelados
(2, 4, 2),  -- Labubus
(2, 2, 3),  -- Platinados
(2, 1, 4);  -- JASK

-- Jogo 3 - Killer Instinct
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES
(3, 2, 1),  -- Platinados
(3, 4, 2),  -- Labubus
(3, 3, 3),  -- Pixelados
(3, 1, 4);  -- JASK

-- Jogo 4 - Super Mario Kart
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES
(4, 4, 1),  -- Labubus
(4, 2, 2),  -- Platinados
(4, 1, 3),  -- JASK
(4, 3, 4);  -- Pixelados

-- Jogo 5 - Bomberman 5
INSERT INTO classificacao (id_jogo, id_equipe, posicao) VALUES
(5, 1, 1),  -- JASK
(5, 3, 2),  -- Pixelados
(5, 4, 3),  -- Labubus
(5, 2, 4);  -- Platinados

-- =========================================
-- CONSULTAS
-- =========================================

-- 1. Jogadores e suas equipes
SELECT nome_jogador,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = jogador.id_equipe) AS grupo
FROM jogador;

-- 2. Partidas com equipe, jogo e pontuação
SELECT (SELECT nome_jogo FROM jogo WHERE jogo.id_jogo = classificacao.id_jogo) AS nome_jogo,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = classificacao.id_equipe) AS nome_equipe,
       (SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao) AS pontos
FROM classificacao;

-- 3. Soma total de pontos de cada equipe
SELECT classificacao.id_equipe,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = classificacao.id_equipe) AS nome_equipe,
       SUM((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS total_pontos
FROM classificacao
GROUP BY classificacao.id_equipe
ORDER BY total_pontos DESC;

-- 4. Maior pontuação em cada jogo
SELECT classificacao.id_jogo,
       (SELECT nome_jogo FROM jogo WHERE jogo.id_jogo = classificacao.id_jogo) AS nome_jogo,
       MAX((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS maior_pontuacao
FROM classificacao
GROUP BY classificacao.id_jogo;

-- 5. Média de pontuação de cada equipe
SELECT classificacao.id_equipe,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = classificacao.id_equipe) AS nome_equipe,
       AVG((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS media_pontos
FROM classificacao
GROUP BY classificacao.id_equipe;

-- 6. Menor e maior pontuação de cada equipe
SELECT classificacao.id_equipe,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = classificacao.id_equipe) AS nome_equipe,
       MIN((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS menor,
       MAX((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS maior
FROM classificacao
GROUP BY classificacao.id_equipe;

-- 7. Ranking final
SELECT classificacao.id_equipe,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = classificacao.id_equipe) AS nome_equipe,
       SUM((SELECT pontos FROM pontuacao_por_posicao WHERE pontuacao_por_posicao.posicao = classificacao.posicao)) AS total_pontos
FROM classificacao
GROUP BY classificacao.id_equipe
ORDER BY total_pontos DESC;
