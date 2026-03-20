 private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        
    String ent1 = entrada1.getText();
    String ent2 = entrada2.getText();
    String ent3 = entrada3.getText();
    
    if(!ent1.isEmpty()||!ent2.isEmpty()||!ent3.isEmpty()){
        double s1 = Double.parseDouble(ent1);
        double s2 = Double.parseDouble(ent2);
        double s3 = Double.parseDouble(ent3);
        double soma = s1 +s2+s3;
        Saida1.setText(String.format("Soma %.2f",soma));
    }else{
        Saida1.setText("Erro| Insira a Informação Correta");
    }
   
    }             
