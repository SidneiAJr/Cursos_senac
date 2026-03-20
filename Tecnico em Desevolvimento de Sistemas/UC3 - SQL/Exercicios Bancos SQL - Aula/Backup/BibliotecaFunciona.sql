CREATE TABLE livros(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(20) NOT NULL,
    nome_autor varchar(20) NOT NULL,
    lancamento varchar(20) NOT NULL,
    genero varchar(20) NOT NULL
);  -- cria a tabela livros

CREATE TABLE locador(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(20) NOT NULL UNIQUE,
    endereco varchar(20) NOT NULL,
    email varchar(20) NOT NULL,
    telefone varchar(25) NOT NULL 
); -- cria a tabela locador

CREATE TABLE locacao_livros(
    livro_id INT NOT NULL,  -- Referência à tabela livros
    locador_id INT NOT NULL, -- Referência à tabela locador
    data_locacao DATE NOT NULL,
    FOREIGN KEY (ID) REFERENCES livros(ID),
    FOREIGN KEY (ID) REFERENCES locador(ID),
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
); -- Recebe informação de locador e livros tabela de conexção

-- Insere informações na tabela Livros
INSERT INTO livros(titulo,nome_autor,lancamento,genero) Values
('Sr dos Baloso Volume I','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume II','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume III','Kalleo de Kripto','2023-10-01','aventura'),
('Sr dos Baloso Volume IV','Kalleo de Kripto','2023-10-01','aventura');

-- Insere Informações na tabela Locador
INSERT INTO locador(nome,endereco,email,telefone)Values
('Dalvano Machado Silveira','Rua das pitangas 114','dalvanomachado@gmail.com','519999999'),
('Kalleo dalvano pedro junior','Rua das pitangas 114','dalvanomachado2@gmail.com','519999988');

-- Insere Informações na tabela locacao_livros
INSERT INTO locacao_livros(livro_id, locador_id, data_locacao) VALUES
(1, 1, '2023-10-02'),
(2, 2, '2023-10-03');
