/*
====================================================
Importando Libs | Node.js
====================================================
Importando Libs:
- npm install express
- npm install mysql2
- npm install cors
- npm install dot
- npm install bodyparse
- npm install bcrypt
====================================================
*/
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dot = require('dotenv')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');

//Iniciando express
const app = express();

app.use(express.json());
app.use(cors());

dot.config();
const { DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
/*
====================================================
Conexção | Banco com .env
====================================================
*/

// Conexção Banco
const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

connection.connect(error => {
    if (error) {
        console.error('Erro ao Conectar!' + error.stack);
        return;
    }
    console.log("Sucesso ao Conectar")
});
/*
====================================================
Consulta Geral | Banco | Rota de Consulta
====================================================
*/
app.get('/users', (req, res) => {
    const consulta = `select * from usuarios`;
    connection.query(consulta, (erro, resultados) => {
        if (erro) {
            return res.status(500).set("Erro ao Selecionar dados");
        }
        return res.status(200).json(resultados);
    });
});
/*
====================================================
Consulta Geral | Banco | Seleciona Usuario por ID
====================================================
*/

app.get('/users/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);
    const consulta_id = 'select * from usuarios where id_usuario = ?'
    connection.query(consulta_id, [id_usuario], (erro, resultado) => {
        if (erro) {
            return res.status(500).set("Erro ao Selecionar dados");
        }
        return res.status(200).json(resultado[0]);
    });
});
/*
====================================================
Consulta Geral | Banco | Conta quantos Registros tem
====================================================
*/

app.get('/Lista', (req, res) => {
    const consulta_lista = `SELECT COUNT(*) AS total FROM usuarios`;
    connection.query(consulta_lista, (erro, resultados) => {
        if (erro) {
            return res.status(500).set("Erro ao listar usuarios");
        }
        return res.status(200).json(resultados);
    });
});

/*
=============================================================
Consulta Geral | Banco | Insere Informação no Banco usuarios
=============================================================
*/

app.post('/Insert', (req, res) => {
    const { nome_usuario, idade_usuario, email_usuario, senha } = req.body;
    const inserir_banco = `insert into usuarios(nome_usuario,idade_usuario,email_usuario,senha)values(?,?,?,?)`;
    connection.query(inserir_banco, [nome_usuario, idade_usuario, email_usuario, senha], (erro) => {
        if (erro) {
            return res.status(500).send("Erro ao Adicionar Usuario!");
        }
        return res.status(201).send("Sucesso ao Adicionar Usuario");
    });
});
/*
====================================================
Consulta Geral | Banco | Deletar por ID
====================================================
*/

app.delete('/deletar/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);
    const deletar = `delete from usuarios where id_usuario =?`
    connection.query(deletar, [id_usuario], (erro) => {
        if (erro) {
            console.error('Erro ao deletar:', erro);  // Log do erro
            return res.status(500).send("Erro ao Apagar Usuario!");
        }
        return res.status(200).send("Sucesso ao Deletar Usuario!");
    });
});
/*
====================================================
Consulta Geral | Banco | Update por ID
====================================================
*/

app.put('/update/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);  // Pegando o ID da URL
    const { nome_usuario, idade_usuario, email_usuario, senha } = req.body;  // Pegando os dados do corpo da requisição

    // Verifique se os dados necessários estão presentes
    if (!nome_usuario || !idade_usuario || !email_usuario || !senha) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    // Preparando os dados para a query
    const dadosParaAtualizar = [nome_usuario, idade_usuario, email_usuario, senha, id_usuario];

    const update_id = `UPDATE usuarios SET nome_usuario = ?, idade_usuario = ?, email_usuario = ?, senha = ? WHERE id_usuario = ?`;

    connection.query(update_id, dadosParaAtualizar, (erro, resultados) => {
        if (erro) {
            console.error('Erro ao atualizar:', erro);  // Logando o erro
            return res.status(500).send("Erro ao Atualizar Usuário!");
        }

        if (resultados.affectedRows === 0) {
            return res.status(404).send("Usuário não encontrado!");  // Caso não tenha sido encontrado nenhum usuário
        }

        return res.status(200).send("Usuário Atualizado com Sucesso!");
    });
});

/*
====================================================
Consulta Geral | Banco | Rota de Registro com HASH
====================================================
*/
app.post('/Registrar', async (req, res) => {
    console.log(req.body); // DEBUG

    const { nome_usuario, idade_usuario, email_usuario, senha } = req.body;

    if (!nome_usuario || !idade_usuario || !email_usuario || !senha) {
        return res.status(400).send("Campos são obrigatórios");
    }

    try {
        const saltRounds = 10;
        const senhahs = await bcrypt.hash(senha, saltRounds);

        connection.query(
            'INSERT INTO usuarios (nome_usuario, idade_usuario, email_usuario, senha) VALUES (?,?,?,?)',
            [nome_usuario, parseInt(idade_usuario), email_usuario, senhahs],
            (error) => {
                if (error) {
                    console.error(error.stack);
                    return res.status(500).send('Erro ao cadastrar usuário');
                }
                res.status(201).send('Usuário cadastrado com sucesso');
            }
        );

    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Erro ao gerar hash da senha');
    }
});

/*
========================================================
Consulta Geral | Banco | Seleciona o Usuario por email
========================================================
*/
app.post('/loginat', (req, res) => {
    const { email_usuario, senha } = req.body;
    connection.query(
        'Select * from usuarios where email_usuario = ?',
        [email_usuario],
        async (error, results) => {
            if (error || results.length === 0) {
                return res.status(401).send('Usuário ou senha inválidos');
            }
            const usuario = results[0];
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).send('Usuário ou senha inválidos');
            }
            res.status(200).send('Login realizado com sucesso');
        }
    )
});

/*
====================================================
Porta do Servidor | Porta : 3000
====================================================
*/

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`)
});






