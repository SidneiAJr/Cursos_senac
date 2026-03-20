/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package trabalho_java;



/**
 *
 * @author Aluno
 */
public class calculadora extends javax.swing.JFrame {
    double num1, num2,resultado;
    String operador;
    
     
     
    public calculadora() {
        initComponents();
    }
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        btn_soma = new javax.swing.JButton();
        btn_dividir = new javax.swing.JButton();
        btn_sub = new javax.swing.JButton();
        btn_mult = new javax.swing.JButton();
        jScrollPane4 = new javax.swing.JScrollPane();
        jt_entrada2 = new javax.swing.JTextPane();
        btn_limpa = new javax.swing.JButton();
        btn_5 = new javax.swing.JButton();
        btn_1 = new javax.swing.JButton();
        btn_2 = new javax.swing.JButton();
        btn_3 = new javax.swing.JButton();
        btn_7 = new javax.swing.JButton();
        btn_4 = new javax.swing.JButton();
        btn_6 = new javax.swing.JButton();
        btn_0 = new javax.swing.JButton();
        btn_8 = new javax.swing.JButton();
        btn_9 = new javax.swing.JButton();
        btn_igual = new javax.swing.JButton();
        btn_expond = new javax.swing.JButton();
        btn_perc = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setFont(new java.awt.Font("Segoe UI", 1, 24)); // NOI18N
        jLabel1.setText("Calculadora");

        btn_soma.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_soma.setText("+");
        btn_soma.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_somaActionPerformed(evt);
            }
        });

        btn_dividir.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_dividir.setText("/");
        btn_dividir.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_dividirActionPerformed(evt);
            }
        });

        btn_sub.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_sub.setText("-");
        btn_sub.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_subActionPerformed(evt);
            }
        });

        btn_mult.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_mult.setText("*");
        btn_mult.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_multActionPerformed(evt);
            }
        });

        jScrollPane4.setViewportView(jt_entrada2);

        btn_limpa.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_limpa.setText("C");
        btn_limpa.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_limpaActionPerformed(evt);
            }
        });

        btn_5.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_5.setText("5");
        btn_5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_5ActionPerformed(evt);
            }
        });

        btn_1.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_1.setText("1");
        btn_1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_1ActionPerformed(evt);
            }
        });

        btn_2.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_2.setText("2");
        btn_2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_2ActionPerformed(evt);
            }
        });

        btn_3.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_3.setText("3");
        btn_3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_3ActionPerformed(evt);
            }
        });

        btn_7.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_7.setText("7");
        btn_7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_7ActionPerformed(evt);
            }
        });

        btn_4.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_4.setText("4");
        btn_4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_4ActionPerformed(evt);
            }
        });

        btn_6.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_6.setText("6");
        btn_6.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_6ActionPerformed(evt);
            }
        });

        btn_0.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_0.setText("0");
        btn_0.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_0ActionPerformed(evt);
            }
        });

        btn_8.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_8.setText("8");
        btn_8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_8ActionPerformed(evt);
            }
        });

        btn_9.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_9.setText("9");
        btn_9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_9ActionPerformed(evt);
            }
        });

        btn_igual.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_igual.setText("=");
        btn_igual.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_igualActionPerformed(evt);
            }
        });

        btn_expond.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_expond.setText("()");
        btn_expond.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_expondActionPerformed(evt);
            }
        });

        btn_perc.setFont(new java.awt.Font("Segoe UI", 0, 36)); // NOI18N
        btn_perc.setText("%");
        btn_perc.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btn_percActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(236, 236, 236)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane4, javax.swing.GroupLayout.PREFERRED_SIZE, 323, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btn_soma, javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(btn_dividir, javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(btn_perc, javax.swing.GroupLayout.Alignment.TRAILING))
                        .addGap(18, 18, 18)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(btn_mult)
                                .addGap(18, 18, 18)
                                .addComponent(btn_8)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(btn_1))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(btn_sub)
                                .addGap(18, 18, 18)
                                .addComponent(btn_9)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(btn_2))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(btn_igual)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(btn_6))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(btn_expond, javax.swing.GroupLayout.PREFERRED_SIZE, 55, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(btn_0)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(btn_4)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btn_limpa)
                            .addComponent(btn_3)
                            .addComponent(btn_5)
                            .addComponent(btn_7))))
                .addContainerGap(127, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabel1)
                .addGap(235, 235, 235))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(21, 21, 21)
                .addComponent(jLabel1)
                .addGap(18, 18, 18)
                .addComponent(jScrollPane4, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btn_soma)
                    .addComponent(btn_mult)
                    .addComponent(btn_limpa)
                    .addComponent(btn_1)
                    .addComponent(btn_8))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btn_dividir)
                    .addComponent(btn_sub)
                    .addComponent(btn_2)
                    .addComponent(btn_3)
                    .addComponent(btn_9))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btn_5)
                    .addComponent(btn_4)
                    .addComponent(btn_0)
                    .addComponent(btn_expond)
                    .addComponent(btn_perc))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btn_7)
                    .addComponent(btn_6)
                    .addComponent(btn_igual))
                .addGap(121, 121, 121))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );

        pack();
    }// </editor-fold>                        

    private void btn_somaActionPerformed(java.awt.event.ActionEvent evt) {                                         
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "+";
     jt_entrada2.setText("");
     
     
   
    }                                        

    private void btn_subActionPerformed(java.awt.event.ActionEvent evt) {                                        
        // TODO add your handling code here:
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "-";
     jt_entrada2.setText(""); 
       
    }                                       

    private void btn_dividirActionPerformed(java.awt.event.ActionEvent evt) {                                            
        // TODO add your handling code here:
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "/";
     jt_entrada2.setText(""); 
       
    }                                           

    private void btn_multActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "*";
     jt_entrada2.setText(""); 
        
    }                                        

    private void btn_limpaActionPerformed(java.awt.event.ActionEvent evt) {                                          
        // TODO add your handling code here:
        jt_entrada2.setText("");
    }                                         

    private void btn_5ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
        jt_entrada2.setText(jt_entrada2.getText()+"5");
       
    }                                     

    private void btn_1ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
          jt_entrada2.setText(jt_entrada2.getText()+"1");

    }                                     

    private void btn_2ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
          jt_entrada2.setText(jt_entrada2.getText()+"2");
    }                                     

    private void btn_3ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
          jt_entrada2.setText(jt_entrada2.getText()+"3");
    }                                     

    private void btn_7ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
         jt_entrada2.setText(jt_entrada2.getText()+"7");
    }                                     

    private void btn_4ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
         jt_entrada2.setText(jt_entrada2.getText()+"4");
    }                                     

    private void btn_6ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
          jt_entrada2.setText(jt_entrada2.getText()+"6");
    }                                     

    private void btn_0ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
        jt_entrada2.setText(jt_entrada2.getText()+"0");
        
    }                                     

    private void btn_8ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
        jt_entrada2.setText(jt_entrada2.getText()+"8");
        
    }                                     

    private void btn_9ActionPerformed(java.awt.event.ActionEvent evt) {                                      
        // TODO add your handling code here:
        jt_entrada2.setText(jt_entrada2.getText()+"9");
       
    }                                     

    private void btn_igualActionPerformed(java.awt.event.ActionEvent evt) {                                          
        // TODO add your handling code here:
        num2 = Double.parseDouble(jt_entrada2.getText());
        switch (operador) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "/":
                resultado = num1 / num2;
                if (num2 == 0) {
                    jt_entrada2.setText("Erro");
                    return;
                } else {
                    resultado = num1 / num2;
                }
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "%":
                resultado =(num1 * num2) / 100;
                break;
            case "**": // Exponenciação (potência)
                resultado = Math.pow(num1, num2); // num1 ^ num2
                break;
        }
        jt_entrada2.setText(String.valueOf(resultado));
       
       
    }                                         

    private void btn_expondActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "**";
     jt_entrada2.setText("");
    }                                          

    private void btn_percActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
     num1 = Double.parseDouble(jt_entrada2.getText());
     operador = "%";
     jt_entrada2.setText("");
    }                                        

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(calculadora.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(calculadora.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(calculadora.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(calculadora.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new calculadora().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton btn_0;
    private javax.swing.JButton btn_1;
    private javax.swing.JButton btn_2;
    private javax.swing.JButton btn_3;
    private javax.swing.JButton btn_4;
    private javax.swing.JButton btn_5;
    private javax.swing.JButton btn_6;
    private javax.swing.JButton btn_7;
    private javax.swing.JButton btn_8;
    private javax.swing.JButton btn_9;
    private javax.swing.JButton btn_dividir;
    private javax.swing.JButton btn_expond;
    private javax.swing.JButton btn_igual;
    private javax.swing.JButton btn_limpa;
    private javax.swing.JButton btn_mult;
    private javax.swing.JButton btn_perc;
    private javax.swing.JButton btn_soma;
    private javax.swing.JButton btn_sub;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane4;
    private javax.swing.JTextPane jt_entrada2;
    // End of variables declaration                   
}
