private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String Entrada2 = txt_ent2.getText().trim().replace(",", ".");
        String ComboBox = (String)jC.getSelectedItem();

        if (!Entrada2.isEmpty()) {
            try {
                double Valor2 = Double.parseDouble(Entrada2);
                if (Valor2 > 0) {
                    
                    if(ComboBox.equals("Dolar")){
                        double usd = Valor2 / 5.60;
                        double taxadolar = usd*0.01;
                        double conversao = usd+taxadolar;
                        lb_saida.setText(String.format("USD $ %.2f  ", conversao));
                    }else if(ComboBox.equals("Euro")){
                        double euro = Valor2/6.10;
                        double taxaeuro = euro*0.01;
                        double conversao = euro+taxaeuro;
                        lb_saida.setText(String.format("Euro $ %.2f  ", conversao));
                    }else if(ComboBox.equals("Iene")){
                        double iene = Valor2*0.036;
                        double taxaiene = iene*0.01;
                        double conversao = iene+taxaiene;
                        lb_saida.setText(String.format("Iene $ %.2f  ", conversao));
                    }else if(ComboBox.equals("Libra")){
                        double libra = Valor2 / 7.21;
                        double taxalibra = libra*0.03;
                        double conversao = libra+taxalibra;
                        lb_saida.setText(String.format("Libra $ %.2f  ", conversao));
                    }else if(ComboBox.equals("Rublo")){
                        double rublo = Valor2 * 0.066;
                        double taxalibra = rublo*0.03;
                        double conversao = rublo+taxalibra;
                        lb_saida.setText(String.format("Rublo $ %.2f  ", conversao));
                    }else if(ComboBox.equals("Yuan")){
                        double yuan = Valor2 * 0.76;
                        double taxalibra = yuan*0.03;
                        double conversao = yuan+taxalibra;
                        lb_saida.setText(String.format("Yuan $ %.2f  ", conversao));
                    }else {
                        lb_saida.setText("Moeda Não cadastrada");
                    }
                 
                           
                } else {
                    lb_saida.setText("Favor inserir um valor maior que zero!");
                }
            } catch (NumberFormatException e) {
                lb_saida.setText("Valor inválido! Digite apenas números.");
            }
        } else {
            lb_saida.setText("Campo vazio! Digite um valor.");
        }
        


    }                                        

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
       lb_saida.setText("");
       txt_ent2.setText("");
       lb_saida.requestFocus();
    }                    
