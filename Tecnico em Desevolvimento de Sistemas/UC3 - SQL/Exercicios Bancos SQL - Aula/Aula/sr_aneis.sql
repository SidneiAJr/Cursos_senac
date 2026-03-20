CREATE DATABASE sraneis;

use sraneis;

CREATE TABLE especie(
id_especie int primary key auto_increment,
nome_especie varchar(100) not null
);

CREATE TABLE personagem(
id_personagem int primary key not null auto_increment,
nome_personagem varchar(100) not null,
idade int not null
);

CREATE TABLE armas(
id_arma int primary key not null auto_increment,
nome_arma varchar(55) not null
);

CREATE TABLE local_mapa (
    id_local INT PRIMARY KEY NOT NULL auto_increment,
    nome_local VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE habilidade (
    id_habilidade INT PRIMARY KEY NOT NULL auto_increment,
    nome_habilidade VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE caracteristica_personagem(
id_informacao int primary key not null auto_increment,
id_especie int not null,
id_personagem int not null,
id_habilidade int not null,
id_arma int not null,
FOREIGN KEY(id_especie) REFERENCES especie(id_especie),
FOREIGN KEY(id_personagem) REFERENCES personagem(id_personagem),
FOREIGN KEY(id_habilidade) REFERENCES habilidade(id_habilidade),
FOREIGN KEY(id_arma) REFERENCES armas(id_arma)
);

INSERT INTO personagem (nome_personagem, idade)
VALUES
  ("Saron", 2000),
  ("Elyndra", 134),
  ("Thorek Martelo-de-Ferro", 245),
  ("Nyssa Sombravento", 87),
  ("Kael'thas", 302),
  ("Mira Valeluz", 29),
  ("Drakar, o Flamejante", 520),
  ("Lira Nocturne", 105),
  ("Vornak, o Cruel", 399),
  ("Aeris Luminar", 56);

INSERT INTO armas (nome_arma)
VALUES
  ("Lâmina do Crepúsculo"),
  ("Espada da Luz Eterna"),
  ("Machado de Sangue"),
  ("Arco dos Ventos Silenciosos"),
  ("Cajado do Ancião"),
  ("Lança Sombria"),
  ("Adaga de Víbora"),
  ("Martelo de Tempestade"),
  ("Foice da Meia-Noite"),
  ("Espada de Fogo Vivo"),
  ("O Anel - Meu precioso");
  
   
INSERT INTO habilidade (nome_habilidade, descricao)
VALUES
  ("Bola de Fogo", "Lança uma bola flamejante que explode ao atingir o alvo."),
  ("Cura Rápida", "Regenera rapidamente a saúde do personagem."),
  ("Golpe Sombrio", "Um ataque furtivo com dano adicional."),
  ("Escudo Arcano", "Cria uma barreira mágica que absorve dano."),
  ("Fúria Berserker", "Aumenta temporariamente o ataque, mas reduz a defesa."),
  ("Teletransporte", "Move o personagem instantaneamente para outro local."),
  ("Flecha Congelante", "Ataca com uma flecha de gelo que pode paralisar o inimigo."),
  ("Chamado da Tempestade", "Invoca relâmpagos que atingem múltiplos inimigos."),
  ("Camuflagem", "Torna o personagem invisível por um curto período."),
  ("Toque da Morte", "Habilidade rara que pode derrotar inimigos instantaneamente.");
  
  
INSERT INTO especie (id_especie, nome_especie)
VALUES
  ( "Elfo"),
  ( "Anão"),
  ( "Humano"),
  ( "Hobbit"),
  ( "Mago (Istari)"),
  ( "Orc"),
  ( "Uruk-hai"),
  ( "Ent"),
  ( "Troll"),
  ( "Dragão"),
  ( "Nazgûl"),
  ( "Maia"),
  ( "Valar");


INSERT INTO caracteristica_personagem(id_especie,id_personagem,id_habilidade,id_arma)
values
(1,1,1,1);
