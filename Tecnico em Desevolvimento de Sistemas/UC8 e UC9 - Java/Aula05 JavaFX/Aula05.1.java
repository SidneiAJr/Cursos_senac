 private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        double total = 0;
        if (ck_1.isSelected()) {
            total += 30;
        }
        if (ck_2.isSelected()) {
            total += 15;
        }
        if (ck_3.isSelected()) {
            total += 15;
        }
        if (ck_4.isSelected()) {
            total += 50;
        }
        if (ck_5.isSelected()) {
            total += 50;
        }
        if (ck_6.isSelected()) {
            total += 25;
        }
        if (ck_7.isSelected()) {
            total += 21;
        }
        if (ck_8.isSelected()) {
            total += 18;
        }
        if (ck_9.isSelected()) {
            total += 25;
        }

        jT_saida.setText(String.format("Total R$ %.2f", total));

        if (total == 0) {
            jT_saida.setForeground(new java.awt.Color(200, 0, 0));
            jT_saida.setText("Nenhum Item Selecionado!");
        } else if (total < 10) {
            jT_saida.setForeground(new java.awt.Color(0, 100, 0));
        } else if (total <= 25) {
            jT_saida.setForeground(new java.awt.Color(0, 128, 255));
        } else{
           jT_saida.setForeground(new java.awt.Color(255,128,9));
           jT_saida.setText(String.format("Pedido Completo! Total R$ %.2f",total));
}
            

    
        
    }                                        

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        ck_1.setSelected(false);
        ck_2.setSelected(false);
        ck_3.setSelected(false);
        ck_4.setSelected(false);
        ck_5.setSelected(false);
        ck_6.setSelected(false);
        ck_7.setSelected(false);
        ck_8.setSelected(false);
        ck_9.setSelected(false);
        jT_saida.setText("");
        
        
        
    }                                        
