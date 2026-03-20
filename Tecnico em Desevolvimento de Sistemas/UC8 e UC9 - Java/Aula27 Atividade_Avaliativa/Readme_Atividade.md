# 🪄 Atividade Avaliativa: Sistema de Produtos

## `Descrição:`

Este projeto consiste em um pequeno sistema Java para cadastro e listagem de produtos em um banco de dados MySQL chamado loja. Ele utiliza DAO (Data Access Object) para separar a lógica de acesso ao banco da lógica da aplicação.

## Estrutura do Projeto:
- ConnectionFactory
- ModelProduct 
- ProductDao

## 🏦 1. Conexão com o Banco

<img width="353" height="211" alt="image" src="https://github.com/user-attachments/assets/4dfd0420-3b57-4dd4-9a62-2a375091a131" />

- Classe responsável por estabelecer a conexão com o banco loja usando JDBC.

- Permite que o DAO execute operações de forma segura.

---

##  ⛄2. ModelProduct

<img width="922" height="922" alt="image" src="https://github.com/user-attachments/assets/01b7f00a-0c8e-418d-aeef-a22f2672036f" />

- Modelo que representa os produtos.

- Contém os atributos do produto:

- id (auto-increment no banco)

- NomeProduto

- Setor

- precoProduto

- InformacaoProduto

- Fornece getters e setters para acessar e modificar os dados.

---

## ☕3. ProductDao

<img width="1013" height="707" alt="image" src="https://github.com/user-attachments/assets/c9593a2c-31c9-4cbe-910a-e924c1dd53e4" />

- Responsável por interagir com o banco de dados.

- Funcionalidades:

- Cadastrar produto: insere um novo produto na tabela produto.

- Listar produtos: retorna todos os produtos cadastrados no banco.

---

## 4. Main

<img width="1723" height="878" alt="image" src="https://github.com/user-attachments/assets/a374203d-a4c0-4c21-a2dd-a88e03533cf4" />

- Classe principal para interação com o usuário via console.

---

### Permite:

- Inserir produtos solicitando nome, setor, preço e informações adicionais.

- Listar todos os produtos cadastrados com ID e nome.

---

## 🖨️Saida 
- Saida Esperada:

<img width="884" height="318" alt="image" src="https://github.com/user-attachments/assets/25a5a0dd-27b3-4cad-b8cf-a25ec0145925" />

