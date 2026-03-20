CREATE database pokedex;
use pokedex;

create table pokemons(
id int primary key auto_increment not null,
nome_pokemon varchar(255) not null,
tipo_pokemon varchar(255) not null,
tem_evolucao enum ("sim","não")
);

-- Inserir dados na tabela pokemons
INSERT INTO pokemons (nome_pokemon, tipo_pokemon, tem_evolucao) 
VALUES 
    ('Bulbasaur', 'Grama/Poison', 'sim'),
    ('Charmander', 'Fogo', 'sim'),
    ('Squirtle', 'Água', 'sim'),
    ('Pikachu', 'Elétrico', 'sim'),
    ('Eevee', 'Normal', 'sim'),
    ('Jigglypuff', 'Normal/Fada', 'sim'),
    ('Meowth', 'Normal', 'não'),
    ('Mankey', 'Lutador', 'sim'),
    ('Zubat', 'Venenoso/Voador', 'sim'),
    ('Snorlax', 'Normal', 'não');
