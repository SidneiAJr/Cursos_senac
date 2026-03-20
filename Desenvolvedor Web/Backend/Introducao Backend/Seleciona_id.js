// Selecionando Pelo ID & Retorna de um usuario especifico
app.get('/ler/:id',(req,res)=>{
    // Pegue atravez do parametro da requesição
    const {id}= req.params
    const leitura = "SELECT * from usuarios where id = ?";
     connection.query(leitura,[id],(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | Leitura nâo Realizada")
         }
         res.status(200).json(resultado)
    })
})
