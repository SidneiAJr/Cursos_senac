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
    id_jogador INT NOT NULL,
    posicao INT NOT NULL CHECK (posicao BETWEEN 1 AND 4),
    FOREIGN KEY (id_jogo) REFERENCES jogo(id_jogo),
    FOREIGN KEY (id_jogador) REFERENCES jogador(id_jogador)
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
INSERT INTO classificacao (id_jogo, id_jogador, posicao) VALUES
(1, 12, 1),  -- Pixelados
(1, 7, 2),  -- Platinados
(1, 20, 4),  -- Labubus
(1, 3, 3);  -- JASK

-- Jogo 2 - Ultimate Mortal Kombat 3
INSERT INTO classificacao (id_jogo, id_jogador, posicao) VALUES
(2, 13, 1),  -- Pixelados
(2, 19, 2),  -- Labubus
(2, 8, 3),  -- Platinados
(2, 3, 4);  -- JASK

-- Jogo 3 - Killer Instinct
INSERT INTO classificacao (id_jogo, id_jogador, posicao) VALUES
(3, 10, 1),  -- Platinados
(3, 16, 2),  -- Labubus
(3, 13, 3),  -- Pixelados
(3, 4, 4);  -- JASK

-- Jogo 4 - Super Mario Kart
INSERT INTO classificacao (id_jogo, id_jogador, posicao) VALUES
(4, 17, 1),  -- Labubus
(4, 6, 2),  -- Platinados
(4, 5, 3),  -- JASK
(4, 14, 4), -- Pixelados
(4,19,4);  

-- Jogo 5 - Bomberman 5
INSERT INTO classificacao (id_jogo, id_jogador, posicao) VALUES
(5, 2, 1),  -- JASK
(5, 11, 2),  -- Pixelados
(5, 18, 3),  -- Labubus
(5, 9, 4);  -- Platinados

-- =========================================
-- CONSULTAS
-- =========================================
SELECT id_jogador, COUNT(*) AS jogos_disputados
FROM classificacao
GROUP BY id_jogador
ORDER BY jogos_disputados DESC;



-- 1. Jogadores e suas equipes
SELECT nome_jogador,
       (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = jogador.id_equipe) AS grupo
FROM jogador;

-- 2. Partidas com equipe, jogo e pontuação
SELECT 
    jogador.nome_jogador,
    jogo.nome_jogo,
    pontuacao_por_posicao.pontos
FROM 
    classificacao,
    jogador,
    jogo,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogador = jogador.id_jogador
    AND classificacao.id_jogo = jogo.id_jogo
    AND classificacao.posicao = pontuacao_por_posicao.posicao;


-- 3. Soma total de pontos de cada equipe
SELECT 
    equipe.nome_equipe,
    jogador.nome_jogador,
    SUM(pontuacao_por_posicao.pontos) AS total_pontos
FROM 
    classificacao,
    jogador,
    equipe,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogador = jogador.id_jogador
    AND jogador.id_equipe = equipe.id_equipe
    AND classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    equipe.id_equipe, jogador.id_jogador
ORDER BY 
    total_pontos DESC;


-- 4. Maior pontuação em cada jogo
SELECT 
    jogo.nome_jogo,
    jogador.nome_jogador,
    equipe.nome_equipe,
    pontuacao_por_posicao.pontos AS pontuacao
FROM 
    classificacao,
    jogo,
    jogador,
    equipe,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogo = jogo.id_jogo
    AND classificacao.id_jogador = jogador.id_jogador
    AND jogador.id_equipe = equipe.id_equipe
    AND classificacao.posicao = pontuacao_por_posicao.posicao
    AND (classificacao.id_jogo, pontuacao_por_posicao.pontos) IN (
        SELECT 
            c2.id_jogo,
            MAX(pp2.pontos)
        FROM 
            classificacao c2,
            pontuacao_por_posicao pp2
        WHERE 
            c2.posicao = pp2.posicao
        GROUP BY 
            c2.id_jogo
    );
    
-- 5. Média de pontuação de cada equipe
SELECT 
    equipe.nome_equipe,
    AVG(pontuacao_por_posicao.pontos) AS media_pontos
FROM 
    classificacao,
    jogador,
    equipe,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogador = jogador.id_jogador
    AND jogador.id_equipe = equipe.id_equipe
    AND classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    equipe.id_equipe
ORDER BY 
    media_pontos DESC;

-- 6. Menor e maior pontuação de cada equipe
SELECT 
    equipe.nome_equipe,
    MIN(pontuacao_por_posicao.pontos) AS menor_pontuacao,
    MAX(pontuacao_por_posicao.pontos) AS maior_pontuacao
FROM 
    classificacao,
    jogador,
    equipe,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogador = jogador.id_jogador
    AND jogador.id_equipe = equipe.id_equipe
    AND classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    equipe.id_equipe,
    equipe.nome_equipe
ORDER BY 
    equipe.nome_equipe;

-- 7. Ranking final
SELECT 
    equipe.nome_equipe,
    SUM(pontuacao_por_posicao.pontos) AS total_pontos
FROM 
    classificacao,
    jogador,
    equipe,
    pontuacao_por_posicao
WHERE 
    classificacao.id_jogador = jogador.id_jogador
    AND jogador.id_equipe = equipe.id_equipe
    AND classificacao.posicao = pontuacao_por_posicao.posicao
GROUP BY 
    equipe.id_equipe,
    equipe.nome_equipe
ORDER BY 
    total_pontos DESC;




