private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
                                              
    String entrada = jt_pix.getText();
    String entrada2 = jt_quant_parcela.getText();
    String entrada3 = jt_val_parc.getText();
    String entrada4 = jt_juros.getText();
      
    try {
    double valorPix = Double.parseDouble(entrada);
    double quantidadeParcelas = Double.parseDouble(entrada2);
    double valorParcelado = Double.parseDouble(entrada3);
    double juros = Double.parseDouble(entrada4);

    double jurosMensal = juros / 100;

    double parcelaMensal = valorParcelado * jurosMensal / 
                           (1 - Math.pow(1 + jurosMensal, -quantidadeParcelas));

    double totalPago = parcelaMensal * quantidadeParcelas;
    double valorPresente = parcelaMensal * (1 - Math.pow(1 + jurosMensal, -quantidadeParcelas)) / jurosMensal;
    double desconto = totalPago - valorPresente;

    jt_saida1.setText(
        "Valor Pix: R$ " + String.format("%.2f", valorPix) + "\n" +
        "Parcela Mensal: R$ " + String.format("%.2f", parcelaMensal) + "\n" +
        "Total Pago: R$ " + String.format("%.2f", totalPago) + "\n" +
        "Valor Antecipado: R$ " + String.format("%.2f", valorPresente) + "\n" +
        "Desconto ao Antecipar: R$ " + String.format("%.2f", desconto)
    );

} catch (NumberFormatException e) {
    jt_saida1.setText("Erro: informe apenas números válidos!");
}

    
