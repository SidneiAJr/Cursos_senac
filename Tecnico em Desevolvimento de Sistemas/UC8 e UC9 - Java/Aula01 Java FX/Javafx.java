package Saudacao;
import javax.swing.JOptionPane;


public class Swing {
     public static  void main (String[] args){
         String Nome = JOptionPane.showInputDialog("Qual é seu Nome do Aluno? ");
         String Turma = JOptionPane.showInputDialog("Turma: ");
         String idade = JOptionPane.showInputDialog("Idade: ");
         int id = Integer.parseInt(idade);
         JOptionPane.showMessageDialog(
           null,
           " Ola " + Nome+ " Turma "+ Turma + " Idade " + id ,
                 "Boas vindas ",
                 JOptionPane.INFORMATION_MESSAGE
         );

     }
}
