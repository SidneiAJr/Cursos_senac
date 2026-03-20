 private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String Valor_solicitado = jt_valor.getText();
        String parcelas = jt_parcelas.getText();
        String Tipo_emprestimo = (String)jc_tipo.getSelectedItem();
        
        double valorSolicitado = Double.parseDouble(Valor_solicitado);
        double ParcelasTotais = Double.parseDouble(parcelas);
        double juros = 10;
        double juros_mensal = juros/100;
       
        if(!Valor_solicitado.isEmpty()||!parcelas.isEmpty()){
            //valor do combobox = Emprestimo consignado,Financiamento Imobiliario, Emprestimo Salario, Emprestimo Servidor
              double valorTotal = 0;
            switch(Tipo_emprestimo){
                case "Emprestimo consignado":
                  valorTotal = valorSolicitado * (1 + juros_mensal * ParcelasTotais);
                  jt_saida.setText(String.format("Valor Total R$%.2f \n Juros %.2f%% ",valorTotal,juros));
                break;
                case "Financiamento Imobiliario":
                valorTotal = valorSolicitado * (1 + juros_mensal * ParcelasTotais);
                 jt_saida.setText(String.format("Valor Total R$%.2f \n Juros %.2f%% ",valorTotal,juros));
                break;
                case "Emprestimo Salario":
                 valorTotal = valorSolicitado * (1 + juros_mensal * ParcelasTotais);
                  jt_saida.setText(String.format("Valor Total R$%.2f \n Juros %.2f%% ",valorTotal,juros));
                break;
                case "Emprestimo Servidor":
                 valorTotal = valorSolicitado * (1 + juros_mensal * ParcelasTotais);
                  jt_saida.setText(String.format("Valor Total R$%.2f \n Juros %.2f%% ",valorTotal,juros));
                break;
                default:
                break;
            }
        }
