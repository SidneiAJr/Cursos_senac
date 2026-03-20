package Saudacao;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Aula02 {
    private JTextField txt_altura;
    private JTextField txt_peso;
    private JButton calculadoraButton;
    private JLabel saida1;


    public Aula02() {
        calculadoraButton.addActionListener(new ActionListener() {
            @Override // try : tente rodar isso
            public void actionPerformed(ActionEvent e) {
                String end1 = txt_altura.getText();
                String end2 = txt_peso.getText();
                Color cor;

                double entrada1 = Double.parseDouble(end1);
                double entrada2 = Double.parseDouble(end2);

                double imc = entrada2/(entrada1*entrada1);

                if (imc < 18.5) {
                    cor = Color.BLUE;
                    saida1.setText(String.format("Abaixo do peso 🥳 %.2f", imc));
                } else if (imc < 25) {
                    cor = Color.red;
                    saida1.setText(String.format("Peso normal 👍🏻 %.2f", imc));
                } else if (imc < 30) {
                    cor = Color.red;
                    saida1.setText(String.format("Sobrepeso 🐍 %.2f", imc));
                } else if (imc < 35) {
                    cor = Color.red;
                    saida1.setText(String.format("Obesidade grau I🐍🐍 %.2f", imc));
                } else if (imc < 40) {
                    cor = Color.red;
                    saida1.setText(String.format("Obesidade grau II🐍🐍🐍 %.2f", imc));
                } else {
                    cor = Color.red;
                    saida1.setText(String.format("Obesidade grau III🐍🐍🐍🐍 %.2f", imc));
                }

            }
        });
    }
    public static void main(String[] args) {



    }
}
