 private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:

        String ent1 = entrada1.getText();
        String ent2 = entrada2.getText();

        double n1 = Double.parseDouble(ent1);
        double n2 = Double.parseDouble(ent2);
        

        double imc = n1/(n2*n2);

        if (imc < 18.5) {
                    Saida1.setText(String.format("Abaixo do peso 🥳 %.2f", imc));
                } else if (imc < 25) {
                    Saida1.setText(String.format("Peso normal 👍🏻 %.2f", imc));
                } else if (imc < 30) {
                    Saida1.setText(String.format("Sobrepeso 🐍 %.2f", imc));
                } else if (imc < 35) {
                    Saida1.setText(String.format("Obesidade grau I🐍🐍 %.2f", imc));
                } else if (imc < 40) {
                    Saida1.setText(String.format("Obesidade grau II🐍🐍🐍 %.2f", imc));
                } else {
                    Saida1.setText(String.format("Obesidade grau III🐍🐍🐍🐍 %.2f", imc));
                }
        // monta a mensagem completa

        // coloca a mensagem no JLabel

    }              
