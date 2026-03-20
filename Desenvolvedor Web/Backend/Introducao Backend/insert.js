/*
E o script do nosso servidor
Nele vamos disctutir as rotas e o que cada uma delas faz
nos tambem vamo nos conectar com nosso banco de dados
*/

const express = require('express')

// Importando a biblioteca do mysql2 que tem funções para se conctar a interagir com meu banco dados
const mysql = require('mysql2')

const app = express()

// Nosso servidor vai nos conectar
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost', // Host
    port: 3306, // Porta
    user : 'root', // usuario
    password : 'root', // senha
    database: 'banco_teste' // Nome Banco
})

// Conecta usando as informações que passamos acima
connection.connect()

/*
==================================
============ROTAS=================
// Rotas para criar um usuario
*/

app.post('/usuarios',(req,res)=>{
    const {nome,email}=req.body
    const comandobanco = "INSERT INTO usuarios (nome,email) values(?,?)"
    // FUnção que me permite executar um comando de banco de dados
    connection.query(comandobanco,[nome,email],(erro)=>{
         if(erro){
          return res.status(500).send("Erro ao adicionar usuario!")
         }
         return res.status(201).send("Usuario Adicionado com sucesso!")
    })


    
    

   
})































const port = 3000
app.listen(port,()=>{
    console.log(`Servidor Rodando localhost${port}`)
})


