// Importando Biblioteca eu uso express.motodo()
const express = require('express')

// Criar uma instancia do express
// Sempre que eu quiser precisar acessar um metodo
const app = express()

//expres.sjon()tambem e um metodo da biblioteca dos express que indica que nosso codigo vai ler arquivos formato json
app.use(express.json())

//Define a porta do servidor
const PORT = 3000

// Aqui vamo definir rotas
app.get('/pegar',(req,res)=>{
    res.send('Ola Mundo');
})

app.get('/a',(req,res)=>{
    res.send('Coe');
})

// Rota para Adicionar uma Informação
app.post('/usuarios',(req,res)=>{
   const novoUsuario = req.body;
   console.log("Novo Usuario Cadastrado",novoUsuario)
   res.status(201).json({
    mensagem: "Usuario cadastrado com sucesso",
    usuario: novoUsuario
   })
})


//Iniciar servidor
app.listen(PORT,()=>{
    console.log(`Servidor Rodando em LocalHost:${PORT}`)
})




