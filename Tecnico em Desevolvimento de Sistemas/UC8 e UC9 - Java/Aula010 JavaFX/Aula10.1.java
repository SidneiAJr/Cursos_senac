private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
       String prov = jt_provento.getText();
       String quant_cotas = jt_cotas.getText();
       String salario_minimo = jt_salario.getText();
       String preco_cota = jt_preco_cota.getText();
       
       if(!prov.isEmpty()||!quant_cotas.isEmpty()||!salario_minimo.isEmpty()){
           double provento = Double.parseDouble(prov);
           double quantidade_cotas1 = Double.parseDouble(quant_cotas);
           double Salario_minimo = Double.parseDouble(salario_minimo);
           double preco_cotas2 = Double.parseDouble(preco_cota);
           
           double quantidade_Cotas_Salario = Salario_minimo/provento;
           double quantidade_cotas = quantidade_cotas1+quantidade_Cotas_Salario ;
           double precototal = preco_cotas2*quantidade_Cotas_Salario;
           
           double Provento_cotas = quantidade_cotas*provento;
           
           jt_saida.setText(String.format("Quantidade de Cotas Ncessarias %.2f\nProvento Total R$ %.2f\nCusto R$ %.2f",quantidade_Cotas_Salario,Provento_cotas,precototal));
          
       }else{
           jt_saida.setText("Informe o Valor");
       }

       
    }          
