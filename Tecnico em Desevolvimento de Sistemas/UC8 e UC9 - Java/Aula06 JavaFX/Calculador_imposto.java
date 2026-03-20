private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {                                         
                                               
    // TODO: add your handling code here:
    String Valor_produto = jt_valor_produto.getText();
    String Valor_us = jt_valor_Us.getText();
    String Potencia_motor = jt_motor.getText();
    
    try {
        // Converte os valores para os tipos corretos
        Double Valor_produto_us = Double.parseDouble(Valor_produto);
        Double Valor_dolar = Double.parseDouble(Valor_us);
        int potencia_motor_hp = Integer.parseInt(Potencia_motor);
        
        // Verifica se os valores são válidos
        if (Valor_produto_us <= 0 || Valor_dolar <= 0) {
            jt_saida.setText("Valores inválidos.");
            return;
        }
        
        // Inicializa as variáveis
        double ipi = 0, icms = 0, precototal_us = 0, precototal = 0;

        // Switch para definir as taxas de acordo com a potência do motor
        switch (potencia_motor_hp) {
            case 1000:
                ipi = 0.07;
                icms = 0.12;
                break;
            case 1200:
                ipi = 0.11;
                icms = 0.12;
                break;
            case 1600:
                ipi = 0.11;
                icms = 0.12;
                break;
            case 2000:
                ipi = 0.11;
                icms = 0.12;
                break;
            default:
                jt_saida.setText("Motor Não Encontrado");
                return;
        }
        
        // Cálculo do preço total
        precototal_us = Valor_produto_us * Valor_dolar;
        precototal = precototal_us * (1 + ipi + icms); // Aplica IPI e ICMS ao valor
        double imposto_total = ipi+icms;

        // Exibe o valor total no campo de saída
        jt_saida.setText(String.format("Valor Total %.2f | Imposto IPI %.2f | Imposto ICMS %.2f | Imposto Total %.1f", precototal,ipi,icms,(imposto_total*100)));
    } catch (NumberFormatException e) {
        jt_saida.setText("Erro na entrada dos valores. Verifique os campos.");
    } catch (Exception e) {
        jt_saida.setText("Erro desconhecido.");
    }

        
        
        
    }                                        
