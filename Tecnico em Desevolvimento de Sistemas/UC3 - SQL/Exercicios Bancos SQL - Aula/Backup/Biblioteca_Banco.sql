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

-- Insere informações na tabela Livros
INSERT INTO livros(titulo,nome_autor,lancamento,genero) Values
('Sr dos Baloso Volume I','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume II','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume III','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume IV','Kalleo de Kripto','2023-10-01','aventura');

-- Insere Informações na tabela Locador
INSERT INTO locador(nome,endereco,email,telefone)Values
('Joao das naves','Rua das pitangas 107','joaopedromassa2@gmail.com','519999999'),
('Joao das naves Junior','Rua das pitangas 107','joaopedromassa@gmail.com','519999988');

-- Insere Informações na tabela locacao_livros
INSERT INTO locacao_livros(livro_id, locador_id, data_locacao) VALUES
(1, 1, '2023-10-02'),
(1, 2, '2023-10-03');

