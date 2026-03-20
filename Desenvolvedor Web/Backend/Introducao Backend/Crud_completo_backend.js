/*
===========================================
SCRIPT DO SERVIDOR (BACK-END)
===========================================

Aqui a gente:
- Cria um servidor com Express
- Conecta no banco MySQL
- Define as rotas (CRUD)
- Permite o front conversar com o back
*/

// Importa o Express (framework pra criar servidor)
const express = require('express')

// Importa o mysql2 (pra conectar e conversar com o banco)
const mysql = require('mysql2')

// Importa o CORS (pra não dar aquele erro chato de navegador)
const cors = require('cors')

// Cria a aplicação Express
const app = express()

/*
Middleware:
- express.json() -> permite receber JSON no body das requisições
- cors() -> libera acesso de outros endereços (front-end)
*/
app.use(express.json())
app.use(cors())

/*
Configuração da conexão com o banco de dados
Aqui você passa:
- onde está o banco
- usuário
- senha
- nome do banco
*/
const connection = mysql.createConnection({
    host: 'localhost',   // Onde está o banco (máquina local)
    port: 3306,          // Porta padrão do MySQL
    user: 'root',        // Usuário do banco
    password: 'root',    // Senha do banco
    database: 'banco_teste' // Nome do banco
})

// Abre a conexão com o banco
connection.connect()

/*
===========================================
ROTAS
Aqui começa o CRUD:
C = Create (Criar)
R = Read (Ler)
U = Update (Atualizar)
D = Delete (Deletar)
===========================================
*/

/*
-------------------------------------------
CRIAR USUÁRIO (CREATE)
-------------------------------------------
Rota POST porque estamos ENVIANDO dados
*/
app.post('/criar', (req, res) => {

    // Pegando os dados que vieram do front-end
    const { nome, email, senha } = req.body

    // Comando SQL para inserir dados no banco
    const comandoBanco = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?)
    `

    // Executa o comando no banco
    connection.query(comandoBanco, [nome, email, senha], (erro) => {

        // Se deu erro, responde com erro 500
        if (erro) {
            return res.status(500).send("Erro ao adicionar usuário!")
        }

        // Se deu tudo certo
        return res.status(201).send("Usuário adicionado com sucesso!")
    })
})

/*
-------------------------------------------
LER TODOS OS USUÁRIOS (READ)
-------------------------------------------
Rota GET porque estamos só buscando dados
*/
app.get('/ler', (req, res) => {

    // SQL que busca todos os usuários
    const leitura = "SELECT * FROM usuarios"

    connection.query(leitura, (erro, resultado) => {

        if (erro) {
            return res.status(500).send("Erro | Leitura não realizada")
        }

        // Retorna os dados em formato JSON
        res.status(200).json(resultado)
    })
})

/*
-------------------------------------------
LER USUÁRIO PELO ID (READ)
-------------------------------------------
*/
app.get('/ler/:id', (req, res) => {

    // Pega o ID que veio na URL
    const { id } = req.params

    const leitura = "SELECT * FROM usuarios WHERE id = ?"

    connection.query(leitura, [id], (erro, resultado) => {

        if (erro) {
            return res.status(500).send("Erro | Leitura não realizada")
        }

        res.status(200).json(resultado)
    })
})

/*
-------------------------------------------
ATUALIZAR USUÁRIO (UPDATE)
-------------------------------------------
*/
app.put('/atualizar/:id', (req, res) => {

    // ID vem da URL
    const { id } = req.params

    // Nome e email vêm do body
    const { nome, email } = req.body

    const atualizacao = `
        UPDATE usuarios
        SET nome = ?, email = ?
        WHERE id = ?
    `

    connection.query(atualizacao, [nome, email, id], (erro) => {

        if (erro) {
            return res.status(500).send("Erro ao tentar atualizar o usuário")
        }

        res.status(200).send("Usuário atualizado com sucesso!")
    })
})

/*
-------------------------------------------
DELETAR USUÁRIO (DELETE)
-------------------------------------------
*/
app.delete('/deletar/:id', (req, res) => {

    // ID vem da URL
    const { id } = req.params

    const deletar = "DELETE FROM usuarios WHERE id = ?"

    connection.query(deletar, [id], (erro) => {

        if (erro) {
            return res.status(500).send("Erro ao tentar deletar o usuário")
        }

        res.status(200).send("Usuário deletado com sucesso!")
    })
})

/*
===========================================
SUBINDO O SERVIDOR
===========================================
*/

// Porta onde o servidor vai rodar
const port = 3000

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
