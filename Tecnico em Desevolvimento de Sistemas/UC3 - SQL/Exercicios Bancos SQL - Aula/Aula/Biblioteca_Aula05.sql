CREATE DATABASE  IF NOT EXISTS `biblioteca`;
USE `biblioteca`;

CREATE TABLE `clientes` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `livros_id` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `nome` (`nome`),
  UNIQUE KEY `email` (`email`)
);

INSERT INTO `clientes` VALUES 
(1,'Dalvano Machado','Rua das pitangas 114','dalvanomachado@gmail.com','519999999','',NULL),
(2,'Kalleo Silva','Rua das pitangas 114','dalvanomachado3@gmail.com','519999987','',NULL),
(3,'Daniel Silveira Pedro','Rua das pitangas 114','dalvanomachado4@gmail.com','519999989','',NULL),
(4,'Joao da Silva','Rua das pitangas 114','dalvanomachado5@gmail.com','519999900','',NULL),
(5,'Joao Silva Junior','Rua das pitangas 114','dalvanomachado6@gmail.com','519999912','',NULL),
(6,'Olaf Kleins','Rua das pitangas 114','dalvanomachado7@gmail.com','519999913','',NULL),
(7,'','','','','',NULL);


CREATE TABLE `estoque_produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(50) NOT NULL,
  `quantidade_produtos` int NOT NULL,
  `preco_produto` decimal(10,2) NOT NULL,
  `clientes_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientes_id` (`clientes_id`),
  CONSTRAINT `estoque_produtos_ibfk_1` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`ID`)
) ;


INSERT INTO `estoque_produtos` VALUES (1,'Caderno Universitário 100 folhas',50,10.90,NULL),(2,'Caneta Esferográfica Azul',200,1.50,NULL),(3,'Caneta Esferográfica Preta',200,1.50,NULL),(4,'Caneta Esferográfica Vermelha',200,1.50,NULL),(5,'Lápis de Cor - Caixa com 12 cores',100,10.00,NULL),(6,'Lápis Preto nº 2',150,1.20,NULL),(7,'Borracha Branca',100,0.80,NULL),(8,'Apontador Simples',75,2.50,NULL),(9,'Mochila Escolar',30,45.00,NULL),(10,'Estojo Escolar',50,15.00,NULL),(11,'Tesoura Escolar',40,7.00,NULL),(12,'Régua Plástica 30 cm',100,3.50,NULL),(13,'Caderno de Desenho 96 folhas',50,12.90,NULL),(14,'Pasta de Arquivo A4',60,5.00,NULL),(15,'Marcador de Texto Amarelo',80,3.00,NULL),(16,'Marcador de Texto Verde',80,3.00,NULL),(17,'Caneta Marca Texto Pink',70,3.00,NULL),(18,'Caneta Gel - Caixa com 5 unidades',50,7.90,NULL),(19,'Papel A4 - Pacote com 500 folhas',40,15.00,NULL),(20,'Post-it - Bloco de 100 folhas',100,4.50,NULL),(21,'Caderno de Anotações 200 folhas',60,18.00,NULL),(22,'Mochila Infantil',40,35.00,NULL),(23,'Clips para Papel - Caixa com 100 unidades',100,2.00,NULL),(24,'Fichário A4 com 2 argolas',25,18.90,NULL),(25,'Pasta Suspensa A4',50,6.90,NULL),(26,'Caneta Hidrográfica - Kit com 6 cores',50,9.90,NULL),(27,'Papel Ofício - Pacote com 500 folhas',35,10.50,NULL),(28,'Luva de Desenho Artístico',20,15.00,NULL),(29,'Fita Adesiva Transparente',50,2.50,NULL),(30,'Fita Crepe',30,3.50,NULL),(31,'Cola Branca Escolar',70,4.00,NULL),(32,'Cola Bastão',60,3.50,NULL),(33,'Marcador de Página - Pacote com 5 unidades',100,2.50,NULL),(34,'Estilete Escolar',25,6.50,NULL),(35,'Calculadora Científica',20,45.00,NULL),(36,'Calculadora Simples',50,12.00,NULL),(37,'Apontador com Coletor',40,3.00,NULL),(38,'Caderno de Matemática 100 folhas',50,11.00,NULL),(39,'Livro de Gramática para Ensino Médio',15,29.90,NULL),(40,'Papel Vegetal A4 - Pacote com 50 folhas',25,20.00,NULL),(41,'Pasta Lateral A4',60,5.00,NULL),(42,'Caderno de Caligrafia',25,8.00,NULL),(43,'Caderno de Exercícios',30,7.00,NULL),(44,'Caderno de Matemática 200 folhas',20,14.90,NULL),(45,'Fichário com 3 argolas',15,25.00,NULL),(46,'Borracha de Apagar Tipo Lápis',50,2.00,NULL),(47,'Caneta Rollerball',30,6.00,NULL),(48,'Caderno de Receitas para Estudantes',40,13.00,NULL),(49,'Lousa Magnética para Quadro',20,28.00,NULL),(50,'Globo Terrestre Infantil',10,35.00,NULL),(51,'Cartaz A3 para Pintura',50,9.90,NULL),(52,'Canetas Coloridas - Caixa com 12 unidades',50,6.50,NULL);


CREATE TABLE `livros` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `nome_autor` varchar(100) NOT NULL,
  `lancamento` varchar(100) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `informacao` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO `livros` VALUES (1,'Introdução a POO(Programação Orientada a Objetos)','Daniel o supremo','2023-10-01','Computação',''),(2,'Introdução a POO(Programação Orientada a Objetos)II','Daniel o supremo','2023-10-01','Computação',''),(3,'Introdução a Expres III','Daniel o supremo','2023-10-01','Computação',''),(4,'Introdução a Expres IV','Daniel o supremo','2023-10-01','Computação',''),(5,'Introdução a Expres V','Daniel o supremo','2023-10-01','Computação',''),(6,'Introdução a Expres VI','Daniel o supremo','2023-10-01','Computação',''),(7,'Introdução a SQL I','Daniel o supremo','2023-10-01','Computação',''),(8,'Introdução a SQL II','Daniel o supremo','2023-10-01','Computação',''),(9,'Introdução a SQL III','Daniel o supremo','2023-10-01','Computação',''),(10,'Introdução a SQL IV','Daniel o supremo','2023-10-01','Computação',''),(11,'Introdução a SQL V','Daniel o supremo','2023-10-01','Computação',''),(12,'Introdução a SQL VI','Daniel o supremo','2023-10-01','Computação',''),(13,'Introdução a SQL VII','Daniel o supremo','2023-10-01','Computação',''),(14,'Introdução a SQL VIII','Daniel o supremo','2023-10-01','Computação',''),(15,'Introdução a SQL IX','Daniel o supremo','2023-10-01','Computação',''),(16,'Introdução a SQL X','Daniel o supremo','2023-10-01','Computação',''),(17,'Introdução a SQL XI','Daniel o supremo','2023-10-01','Computação',''),(18,'As Aventuras de um Senior I','Daniel o supremo','2023-10-01','Computação',''),(19,'As Aventuras de um Senior II','Daniel o supremo','2023-10-01','Computação',''),(20,'As Aventuras de um Senior III','Daniel o supremo','2023-10-01','Computação',''),(21,'As Aventuras de um Senior IV','Daniel o supremo','2023-10-01','Computação',''),(22,'As Aventuras de um Senior V','Daniel o supremo','2023-10-01','Computação',''),(23,'As Aventuras de um Senior VI','Daniel o supremo','2023-10-01','Computação','');

CREATE TABLE `locacao_livros` (
  `livro_id` int NOT NULL,
  `locador_id` int NOT NULL,
  `data_locacao` date NOT NULL,
  `ID` int NOT NULL AUTO_INCREMENT,
  `clientes` int DEFAULT NULL,
  `livros_id` int DEFAULT NULL,
  `clientes_id` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `locador_id` (`locador_id`),
  KEY `livros_id` (`livro_id`),
  KEY `clientes_id` (`clientes_id`),
  CONSTRAINT `clientes_id` FOREIGN KEY (`clientes_id`) REFERENCES `clientes` (`ID`),
  CONSTRAINT `livros_id` FOREIGN KEY (`livro_id`) REFERENCES `livros` (`ID`),
  CONSTRAINT `locacao_livros_ibfk_1` FOREIGN KEY (`livro_id`) REFERENCES `livros` (`ID`),
  CONSTRAINT `locacao_livros_ibfk_2` FOREIGN KEY (`locador_id`) REFERENCES `clientes` (`ID`)
);


INSERT INTO `locacao_livros` VALUES 
(1,1,'2023-10-02',1,NULL,NULL,NULL),
(2,2,'2023-10-03',2,NULL,NULL,NULL),
(3,3,'2023-10-03',3,NULL,NULL,NULL),
(1,1,'2023-10-01',4,NULL,NULL,NULL),
(2,2,'2023-10-02',5,NULL,NULL,NULL);

