private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String entradac = txt_temp.getText().trim().replace(",", ".");

        if (entradac.isEmpty()) {
            double temperatura = Double.parseDouble(entradac);
            double TempC = temperatura;
            double TempF = (temperatura * 9 / 5) + 32;
            double TempK = temperatura + 273.15;
            lb_tempc.setText(String.format("Temperatura Cº | %.2f", TempC));
            lb_tempf.setText(String.format("Temperatura Fº | %.2f", TempF));
            lb_tempk.setText(String.format("Temperatura K° | %.2f", TempK));
            lb_tempc.setForeground(Color.BLACK);
        } else {
            lb_tempc.setText("FAVOR INFORMAR A INFORMAÇÃO CORRETA!!");
            lb_tempc.setForeground(new Color(200, 0, 0)); // vermelho
        }

        
    }    
