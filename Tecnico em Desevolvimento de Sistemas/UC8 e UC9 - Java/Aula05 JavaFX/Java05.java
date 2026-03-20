private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        String cb1 = (String)cb_box1.getSelectedItem();
        String cb2 = (String)cb_box2.getSelectedItem();
        String cb3 = (String)cb_box3.getSelectedItem();
        
       
        
        int quant = (int)spnQuantidade.getValue();
        int quant2 = (int)spnQuantidade1.getValue();
        int quant3 = (int)spnQuantidad3.getValue();
        
        if(!cb1.isEmpty()||!cb2.isEmpty()||!cb3.isEmpty()){
        
           double preco,preco2,preco3,preco4,preco5,preco6,preco7,preco8;
           
           preco = 0;
           preco2 = 0;
           preco3 = 0;
           preco4 = 0;
           preco5 = 0;
           preco6 = 0;
           preco7 = 0;
           preco8 = 0;
                   
            switch(cb1) {
                case "XTudo":
                    preco = 50;
                    break;
                case "Xbacon":
                    preco2 = 45;
                    break;
                case "XSupremo":
                    preco3 = 95;
                    break;
                default:
                    jt_saida.setText("Por favor Selecione uma Opção");
                    break;
            }
            switch(cb2){
                case "Batata Frita":
                     preco4 = 25;
                    break;
                case "Batata Assada":
                     preco5 = 35;
                    break;
                  default:
                    jt_saida.setText("Por favor Selecione uma Opção");
                    break; 
            }
            switch(cb3){
                case "CocaCola":
                     preco6 = 5;
                    break;
                case "Fanta":
                     preco7 = 15;
                    break;
                case "SucoUva":
                     preco8 = 15;
                    break;
                  default:
                    jt_saida.setText("Por favor Selecione uma Opção");
                    break; 
            }
           
            double desconto = 0;
            if(quant>=3&&quant2>=3&&quant3>=3){
               double precoTotal = (preco * quant) + (preco2 * quant) + (preco3 * quant)
                      + (preco4 * quant2) + (preco5 * quant2)
                      + (preco6 * quant3) + (preco7 * quant3) + (preco8 * quant3);
                  desconto = precoTotal*0.20;
                  double precoT = precoTotal-desconto;
                 jt_saida.setText(String.format("Preço Total R$ %.2f \n Desconto R$ %.2f\n Preço com Desconto R$ %.2f  ",precoTotal,desconto,precoT));
            }else if(quant>=2||quant2>=2||quant3>=2){
                 double precoTotal = (preco * quant) + (preco2 * quant) + (preco3 * quant)
                      + (preco4 * quant2) + (preco5 * quant2)
                      + (preco6 * quant3) + (preco7 * quant3) + (preco8 * quant3);
                  desconto = precoTotal*0.10;
                  double precoT = precoTotal-desconto;
                 jt_saida.setText(String.format("Preço Total R$ %.2f \n Desconto R$ %.2f\n Preço com Desconto R$ %.2f",precoTotal,desconto,precoT));
            }else{
                double precoTotal = preco+preco2+preco3+preco4+preco5+preco6+preco7+preco8;
                 jt_saida.setText(String.format("Preço Total %.2f \n Desconto R$ %.2f",precoTotal));
            }
            
            
                   
            
            
           
            
        
         
        }
        
        
        
        
    }                                        
