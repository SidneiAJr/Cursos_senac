 private void btn_perguntarActionPerformed(java.awt.event.ActionEvent evt) {                                              
        // TODO add your handling code here:
        String mensagem = Jt_entrada.getText();
        jt_saida_usuario.append("Voce"+mensagem+"\n");
        jt_saida_usuario.setText("");
        String resposta = "";
        
        if(mensagem.toLowerCase().contains("oi")||mensagem.toLowerCase().contains("Olá")){
            resposta = "PapoFuturo: Coe Man, Beleza? O que vai ser Hoje chefe?";
        }else if(mensagem.toLowerCase().contains("Ola Tudo bem")){
            resposta = "PapoFuturo: Estou Otimo! Pensando em?";
        }else if(mensagem.toLowerCase().contains("Opa eae")){
            resposta = "PapoFuturo:Fala dai que to ouvindo";
        }else if(mensagem.toLowerCase().contains("nome")){
            resposta = "PapoFuturo:Opa, Tudo certo que tu manda";
        }else if(mensagem.toLowerCase().contains("os guri")){
            resposta = "PapoFuturo: Bah coe";
        }else{
             resposta = "PapoFuturo: Não Tem Respostas ainda!";
        }
        jt_saida_usuario.append(resposta+"\n\n");
        
        
    }                                             

    private void Jt_entradaActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
        btn_perguntar.doClick();
    }                
