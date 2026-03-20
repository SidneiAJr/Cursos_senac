CREATE DATABASE campeonato; -- Cria o Banco de dados 

use campeonato; -- Seleciona ou usa o banco 
-- Cria a tabela equipe
CREATE TABLE equipe(
 id_equipe int primary key auto_increment,
 nome_equipe varchar(55) not null,
 participantes varchar(55) not null,
 informacao varchar(55) not null,
 pontuacao_geral int not null
);

/* Verificar se e necessario essa tabela */
-- Verificar a tabela se e necessario somente para nossa equipe
CREATE TABLE jogador_equipe(
id_Jogador int primary key auto_increment,
nome_jogador varchar(55) not null,
jogo_jogado varchar(55) not null,
pontuacao_jogador int not null,
status_partida ENUM("Vitoria","Derrota","Empate") not null
);

-- Cria a tabela jogo
CREATE TABLE jogo(
 id_jogo int primary key auto_increment,
 nome_jogo varchar(55) not null,
 tipo_jogo varchar(55) not null,
 data_jogado DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Cria a tabela pontuacao
CREATE TABLE pontuacao(
 id_pontuacao int primary key auto_increment,
 pontuacao_equipe int,
 id_equipe int not null,
 id_jogo int not null,
 FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe),
 FOREIGN KEY (id_jogo) REFERENCES jogo(id_jogo)
);

-- Inserindo informações na tabelas
INSERT INTO equipe(nome_equipe,participantes,informacao,pontuacao_geral)VALUES  -- INSERINDO INFORMAÇÕES NA TABELA EQUIPE(4 grupos de 5 pessoas)
("Equipe JASK","Kalleo,Arthur,Jian,sidnei,Juan","Grupo1","145"),
("Os Platinados","Gabriela,Luis,Jesus,Miguel1,Miguel2","Grupo2","235"),
("Os Pixelados","Davi,Jorge,Gabriel,Mariana,Eduarda","Grupo3","285"),
("Os Labubus","Timotio,Henry,Henrique,Nicolas,Wagner","Grupo4","235");

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

-- Inserindo informação na tabela jogo
INSERT INTO jogo(nome_jogo,tipo_jogo)VALUES  -- INSERINDO INFORMAÇÕES NA TABELA JOGOS
("Street Fighter II","Luta"), -- ID 1
("Ultimate Mortal Kombat 3","Luta"),  -- ID 2
("Killer Instinct","Luta"), -- ID 3
("Super Mario Kart","Corrida"), -- ID 4
("Bomberman 5","Tiro"); -- ID 5

-- Inserindo informacao na tabela pontuacao
INSERT INTO pontuacao(pontuacao_equipe,id_equipe,id_jogo)VALUES  -- INSERINDO INFORMAÇÕES NA TABELA pontuacao
("0","4","3"),
("1","3","3"),
("1","2","3"),
("0","1","3"),
("0","1","3"),
("1","4","3"),
("1","2","3"),
("0","4","3"),
("1","3","1"),
("0","2","1"),
("0","1","1"),
("1","2","1"),
("1","3","1"),
("0","4","1"),
("0","1","1"),
("1","4","1"),
("1","1","5"),
("0","2","5"),
("1","1","5"),
("0","3","5"),
("1","2","5"),
("0","4","5"),
("0","1","2"), 
("1","2","2"),
("0","3","2"),
("1","4","2"),
("0","2","2"),
("1","4","2"),
("0","1","4"),
("1","2","4"),
("1","3","4"),
("0","4","4"),
("1","2","4"),
("0","1","4");

INSERT INTO jogador_equipe(nome_jogador,jogo_jogado,pontuacao_jogador,status_partida)VALUES
("Arthur","Mortal Kombat","0","Derrota"), -- colocar pontuação aqui depois de jogador, Usar Informações do Enum(escrever "Vitoria","Derrota","Empate", tem que digitar no insert)
("Arthur","Mortal Kombat","0","Derrota"),
("Arthur","Street Fighter II","0","Derrota"), -- colocar pontuação aqui depois de jogador
("Arthur","Street Fighter II","0","Vitoria"),
("Sidnei","Killer Instinct","0","Derrota"),
("Sidnei","Killer Instinct","0","Derrota"),
("Juan","Super Mario Kart","0","Derrota"),
("Juan","Super Mario Kart","0","Derrota"),-- colocar pontuação aqui depois de jogador
("Kalleo"," Bomberman 5","1","Vitoria"),
("Kalleo"," Bomberman 5","1","Vitoria");-- colocar pontuação aqui depois de jogador

-- Consulta 1 - Pontuação Total das partidas
SELECT SUM(pontuacao_geral) AS Pontos_Totais
FROM equipe;

-- Conulta 2 - Pontuação geal das equipes por ID
SELECT MAX(pontuacao_geral) AS Maior_pontuacao
FROM equipe
GROUP BY id_equipe;

-- Consulta 3)
SELECT id_equipe,(SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = pontuacao.id_equipe) AS nome_equipe,
AVG(pontuacao_equipe) AS media_pontos
FROM 
    pontuacao
GROUP BY 
    id_equipe;
    
-- Consulta 4)
SELECT 
    id_equipe,
    (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = pontuacao.id_equipe) AS nome_equipe,
    AVG(pontuacao_equipe) AS media_pontos
FROM 
    pontuacao
GROUP BY 
    id_equipe;
-- Consulta 5)
SELECT 
    id_equipe,
    (SELECT nome_equipe FROM equipe WHERE equipe.id_equipe = pontuacao.id_equipe) AS nome_equipe,
    MIN(pontuacao_equipe) AS menor_pontuacao,
    MAX(pontuacao_equipe) AS maior_pontuacao
FROM 
    pontuacao
GROUP BY 
    id_equipe;
