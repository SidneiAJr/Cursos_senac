 private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        
    String ent1 = entrada1.getText();
    String ent2 = entrada2.getText();
    String ent3 = entrada3.getText();
    
    int n1 = Integer.parseInt(ent1);
    int n2 = Integer.parseInt(ent2);
    int n3 = Integer.parseInt(ent3);
    
    
    int somaTotal = n1+n2+n3;
    
    if(somaTotal>=7){
        Saida1.setText("Aprovado!");
    }else if(somaTotal>=5){
        Saida1.setText("Em Recuperação");
    }else{
        Saida1.setText("Reprovado");
    }
    
    switch (somaTotal) {
    case 10:
    case 9:
    case 8:
    case 7:
        Saida2.setText("Você foi Aprovado");
        break;
    case 6:
    case 5:
        Saida2.setText("Em Recuperação");
        break;
    default:
        Saida2.setText("Você foi Reprovado");
        break;
}
