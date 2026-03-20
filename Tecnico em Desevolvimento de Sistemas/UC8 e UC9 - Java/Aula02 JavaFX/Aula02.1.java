package Saudacao;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Aula02 {
    private JTextField txt_altura;
    private JTextField txt_peso;
    private JButton calculadoraButton;
    private JLabel saida1;


    public Aula02() {
        calculadoraButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String end1 = txt_altura.getText();
                String end2 = txt_peso.getText();

                double entrada1 = Double.parseDouble(end1);
                double entrada2 = Double.parseDouble(end2);


                double imc = entrada2/(entrada1*entrada1);

                if (imc < 18.5) {
                    saida1.setText(String.format("Abaixo do peso 🥳 %.2f", imc));
                } else if (imc < 25) {
                    saida1.setText(String.format("Peso normal 👍🏻 %.2f", imc));
                } else if (imc < 30) {
                    saida1.setText(String.format("Sobrepeso 🐍 %.2f", imc));
                } else if (imc < 35) {
                    saida1.setText(String.format("Obesidade grau I🐍🐍 %.2f", imc));
                } else if (imc < 40) {
                    saida1.setText(String.format("Obesidade grau II🐍🐍🐍 %.2f", imc));
                } else {
                    saida1.setText(String.format("Obesidade grau III🐍🐍🐍🐍 %.2f", imc));
                }

            }
        });
    }
    public static void main(String[] args) {
        Aula02 aula = new Aula02();

        // Painel para colocar todos os componentes
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        panel.add(new JLabel("Altura (m):"));
        panel.add(aula.txt_altura);
        panel.add(new JLabel("Peso (kg):"));
        panel.add(aula.txt_peso);
        panel.add(aula.calculadoraButton);
        panel.add(aula.saida1);

        // Criando o frame principal
        JFrame frame = new JFrame("Calculadora de IMC");
        frame.setContentPane(panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack(); // Ajusta tamanho automático
        frame.setLocationRelativeTo(null); // Centraliza
        frame.setVisible(true);


    }
}



