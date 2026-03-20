create database lojinha_games;
use lojinha_games;

create table jogo(
id int auto_increment primary key,
titulo varchar(120) not null,
plataforma varchar(50) not null,
preco decimal(10,2) not null,
imagem_path varchar(255)
);
