 public Mercado_vapo() {
        initComponents();
        spnQuantidade.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
        spnQuantidade1.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
        spnQuantidad3.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
        spnQuantidad4.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
        spnQuantidad5.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
        spnQuantidad6.setModel(new javax.swing.SpinnerNumberModel(1, 1, 100, 1));
    }
                     

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String informacao = (String)jt_info1.getSelectedItem();
        String informacao2 = (String)jt_info2.getSelectedItem();
        String informacao3 = (String)jt_info3.getSelectedItem();
        String informacao4 = (String)jt_info4.getSelectedItem();
        String informacao5 = (String)jt_info5.getSelectedItem();
        String informacao6 = (String)jt_info6.getSelectedItem();
        
        int quant = (int)spnQuantidade.getValue();
        int quant2 = (int)spnQuantidade1.getValue();
        int quant3 = (int)spnQuantidad3.getValue();
        int quant4 = (int)spnQuantidad4.getValue();
        int quant5 = (int)spnQuantidad5.getValue();
        int quant6 = (int)spnQuantidad6.getValue();
        
        
        if(!informacao.isEmpty()||!informacao2.isEmpty()||!informacao3.isEmpty()||!informacao4.isEmpty()||!informacao5.isEmpty()||!informacao6.isEmpty()){
            // Valores do cbbox1 = Batata, Arroz, Cafe
            // Valores do cbbox2 = Cafe_Dani, Coca_leo_special, ChocoLucas, Baladal
            // Valores do cbbox3 = Escova, Pasta de 
            // Valores do cbbox4 = Suco de Uva, Suco Laranja
            // Valores do cbbox5 = Ferro, Estanho, Zinco
            // Valores do cbbox6 = VW_fuca, VW_gol
            double preco_prod = 0;
            double preco_prod2 = 0;
            double preco_prod3 = 0;
            double preco_prod4 = 0;
            double preco_prod5 = 0;
            double preco_prod6 = 0;
            double preco_prod7 = 0;
            double preco_prod8 = 0;
            double preco_prod9 = 0;
            double preco_prod10 = 0;
            double preco_prod11 = 0;
            double preco_prod12 = 0;
            double preco_prod13 = 0;
            double preco_prod14 = 0;
            double preco_prod15 = 0;
            double preco_prod16 = 0;

         switch(informacao){
             case "Batata":
             preco_prod = 2.50;
             break;
             case "Arroz":
             preco_prod2 = 15.50;
             break;
             case "Cafe":
             preco_prod3 = 55.99;
             break;
            
         }
         switch(informacao2){
             case "Cafe_Dani":
             preco_prod4 = 75;
             break;
             case "Coca_leo_special":
             preco_prod5 = 7.50;
             break;
             case "ChocoLucas":
             preco_prod6 = 6.75;
             break;
             case "Baladal":
             preco_prod7 = 4.50;
             break;
         }
         switch(informacao3){
             case "Escova":
             preco_prod8 = 19.50;
             break;
             case "Pasta de":
             preco_prod9 = 1.50;
             break;
         }
         switch(informacao4){
             case "Suco de Uva":
             preco_prod10 = 7.50;
             break;
             case "Suco Laranja":
             preco_prod11 = 11.99;
             break;
         }
         switch(informacao5){
             case "Ferro":
             preco_prod12 = 2.99;
             break;
             case "Estanho":
             preco_prod13 = 2.99;
             break;
             case "Zinco":
             preco_prod14 = 2.99;
             break;
         }
         switch(informacao6){
             case "VW_fuca":
             preco_prod15 = 2999;
             break;
             case "VW_gol":
             preco_prod16 = 7999;
             break;
         }
         
        double desconto = 0;
        double valor = (preco_prod+preco_prod2+preco_prod3+preco_prod4+preco_prod5+preco_prod6+preco_prod7+preco_prod8+preco_prod9+preco_prod10+preco_prod11+preco_prod12+preco_prod13+preco_prod14+preco_prod15+preco_prod16);        
        double quantidade = (valor*quant*quant2*quant3*quant3*quant4*quant5*quant6);
        double valorTotalCompra = quantidade;
        if(valorTotalCompra>=100){
            desconto = 0.05;
            double valor_desconto = valorTotalCompra*desconto;
            jt_saida.setText(String.format("Total da Compra R$: %.2f\n Desconto Aplicado R$: %.2f \n",valorTotalCompra,valor_desconto));
        }else{
            jt_saida.setText(String.format("Total da Compra %.2f ",valorTotalCompra));
        } 
        }
        
        
    }                                        

  
