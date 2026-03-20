const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',   // Onde está o banco (máquina local)
    port: 3306,          // Porta padrão do MySQL
    user: 'root',        // Usuário do banco
    password: 'root',    // Senha do banco
    database: 'pokedex'  // Nome do banco
});

connection.connect();

app.post('/Inserir', (req, res) => {
    const { nome_pokemon, tipo_pokemon, tem_evolucao } = req.body;
    const comandoBanco = `INSERT INTO pokemons(nome_pokemon, tipo_pokemon, tem_evolucao) VALUES(?, ?, ?)`;
    connection.query(comandoBanco, [nome_pokemon, tipo_pokemon, tem_evolucao], (erro) => {
        if (erro) {
            return res.status(500).send("Erro ao Adicionar Pokemon ao Banco!");
        }
        return res.status(201).send("Sucesso ao Adicionar Pokemon ao Banco!");
    });
});

app.delete('/deletar/:id', (req, res) => {  // Corrigido para aceitar o id via parâmetro
    const { id } = req.params;
    const comandoBanco = `DELETE FROM pokemons WHERE id = ?`;  // Corrigido a query
    connection.query(comandoBanco, [id], (erro) => {
        if (erro) {
            return res.status(500).send("Erro ao Deletar Pokemon do Banco!");
        }
        return res.status(200).send("Sucesso ao Deletar Pokemon do Banco!");
    });
});

app.get('/Listar', (req, res) => {
    const comandoBanco = `SELECT * FROM pokemons`;  // Verifique se você está consultando a tabela correta
    connection.query(comandoBanco, (erro, resultados) => {
        if (erro) {
            return res.status(500).send("Erro ao Listar!");
        }
        return res.status(200).json(resultados);  // Envia os dados como JSON
    });
});

app.get('/Listar/:id', (req, res) => {
    const { id } = req.params; 
    const comandoBanco = `SELECT * FROM pokemons Where id=?`;  // Verifique se você está consultando a tabela correta
    connection.query(comandoBanco,[id], (erro, resultados) => {
        if (erro) {
            return res.status(500).send("Erro ao Listar!");
        }
        return res.status(200).json(resultados);  // Envia os dados como JSON
    });
});

app.put('/atualizar/:id', (req, res) => {

    // ID vem da URL
    const { id } = req.params

    // Nome e email vêm do body
    const { nome_pokemon,tipo_pokemon, tem_evolucao} = req.body

    const atualizacao = `
        UPDATE pokemons
        SET nome_pokemon = ?, tipo_pokemon = ?,tem_evolucao=?
        WHERE id = ?
    `

    connection.query(atualizacao, [nome_pokemon,tipo_pokemon,tem_evolucao , id], (erro) => {

        if (erro) {
            return res.status(500).send("Erro ao tentar atualizar o usuário")
        }

        res.status(200).send("Usuário atualizado com sucesso!")
    })
})


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
});
