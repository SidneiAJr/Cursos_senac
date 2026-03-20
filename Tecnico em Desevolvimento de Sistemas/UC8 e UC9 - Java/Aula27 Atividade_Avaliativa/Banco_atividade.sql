Create database loja;
use loja ;

create table produto(
id_produto int auto_increment primary key,
NomeProduto varchar(255) not null,
Setor varchar(255) not null,
precoProduto decimal(10,2) not null,
InformacaoProduto varchar(255) not null
);
