String ent1 = entrada1.getText().trim().replace(",", ".");
        String ent2 = entrada2.getText().trim().replace(",", ".");

        // 1️⃣ verifica antes de converter
        if (ent1.isEmpty() || ent2.isEmpty()) {
            Saida1.setText("FAVOR INSERIR INFORMAÇÃO CORRETA!!!");
            Saida1.setForeground(new Color(200, 0, 0));
            return; // sai do método aqui
        }

        // 2️⃣ agora é seguro converter
        double n1 = Double.parseDouble(ent1);
        double n2 = Double.parseDouble(ent2);

        double imc = n1 / (n2 * n2);

        // 3️⃣ classificação IMC
        if (imc < 18.5) {
            Saida1.setText(String.format("Abaixo do peso %.2f", imc));
        } else if (imc < 25) {
            Saida1.setText(String.format("Peso normal %.2f", imc));
        } else if (imc < 30) {
            Saida1.setText(String.format("Sobrepeso %.2f", imc));
        } else if (imc < 35) {
            Saida1.setText(String.format("Obesidade grau I %.2f", imc));
        } else if (imc < 40) {
            Saida1.setText(String.format("Obesidade grau II %.2f", imc));
        } else {
            Saida1.setText(String.format("Obesidade grau III %.2f", imc));
        }

        Saida1.setForeground(Color.BLACK);

  private void btn_limparActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
       entrada1.setText("");
       entrada2.setText("");
       Saida1.setText("");
       Saida1.setForeground(new java.awt.Color(0,0,0));
       Saida1.requestFocus();
    }                           
