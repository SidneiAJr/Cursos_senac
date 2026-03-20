   private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String entrada = jt_usuario.getText().trim();
        String senha = new String(jp_senha.getPassword());
        
        if(!entrada.isEmpty()||!senha.isEmpty()){
            switch(entrada){
            case "Dazai":
            if(senha.equals("Dazai")){
                 javax.swing.JOptionPane.showMessageDialog(
         this,
                "Bem vindo ao Sistema Dazai",
                "Aviso!!",
                javax.swing.JOptionPane.WARNING_MESSAGE
        );   
            lb_saida.setText("Bem vindo Dazai"); 
            }  
            Dazai per1 = new  Dazai();
            per1.setVisible(true);
            break;
            case "Shimatsu":
            if(senha.equals("Shimatsu")){
                  javax.swing.JOptionPane.showMessageDialog(
         this,
                "Bem vindo ao Sistema Shimatsu",
                "Aviso!!",
                javax.swing.JOptionPane.WARNING_MESSAGE
        );   
              lb_saida.setText("Bem vindo Shimatsu");  
            }
            Shimatsu per2 = new  Shimatsu();
            per2.setVisible(true);
            break;
            case "Koko":
             if(senha.equals("Koko")){
                   javax.swing.JOptionPane.showMessageDialog(
         this,
                "Bem vindo ao Sistema Koko",
                "Aviso!!",
                javax.swing.JOptionPane.WARNING_MESSAGE
        );   
              lb_saida.setText("Bem vindo Koko");  
            }
            Koko per3 = new  Koko();
            per3.setVisible(true);
            break;
            default:
            javax.swing.JOptionPane.showMessageDialog(
         this,
                "FAVOR INFORMAR A SENHA E O USUARIO!!",
                "Aviso!!",
                javax.swing.JOptionPane.WARNING_MESSAGE
        );   
            break;
        }
        }
                
        
    }                                        

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        jp_senha.setText("");
        jt_usuario.setText("");
    }                                        

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        this.dispose();
        new Login_classe().setVisible(true);
    }                 
