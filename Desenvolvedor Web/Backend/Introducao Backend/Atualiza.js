// Atualiza as informações de usuario:
app.put('/at/:id',(req,res)=>{
    const {id} = req.params
    const {nome,email} = req.body
    const atualizao = "Update usuarios set nome = ?,email = ? where id = ?";
     connection.query(atualizao,[nome,email,id],(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | ao tentar atualizar o usuario")
         }
         res.status(200).send("Usuario Atualizado com sucesso!!!")
    })
})

/*
Json de text:
    {
  "nome":"pao",
  "email":"paodemesa@mail.com"
}
    */
