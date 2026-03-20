package jogo_click;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;
import javax.swing.Timer;

public class Tela_Jogo extends javax.swing.JFrame {
    
    int pontos = 0;
    int tempo =60;
    Timer timerMovimento;
    Timer timerTempo;
    Random random = new Random();

   
    public Tela_Jogo() {
        initComponents();
        setLocationRelativeTo(null);
        iniciarJogo();
    }
    
    void iniciarJogo(){
        pontos = 0; // Zera a pontuacao
        tempo = 60;
        lb_pontuacao.setText("Pontos 0");
        lb_tempo.setText("Tempo 60 sec");      
        
        timerMovimento = new Timer(2000,e->moverQuadrado());
        
        timerMovimento.start();
        timerTempo = new Timer(1000,new ActionListener(){
            @Override
          public void actionPerformed(ActionEvent e){
              tempo --;
              lb_tempo.setText("Tempo:"+tempo);
              if(tempo<=0){
                  timerMovimento.stop();
                  timerTempo.stop();
                  javax.swing.JOptionPane.showMessageDialog(
                          null,
                          "Tempo Acabou"+pontos,
                          "Fim de Jogo",
                          javax.swing.JOptionPane.INFORMATION_MESSAGE);
              }
          }  
        });
        timerTempo.start();
    } 
void moverQuadrado(){
        int maxX = painel_jogo.getWidth() - btn_play.getWidth();
        int maxY = painel_jogo.getHeight()- btn_play.getHeight();
        
        if(maxX<0||maxY<0)return;
        int x = random.nextInt(Math.max(1,maxX));
        int y = random.nextInt(Math.max(1,maxY));
        
        btn_play.setLocation(x,y);
       
}
    

    private void btn_playActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        pontos++;
        lb_pontuacao.setText("Pontuacao Total:"+pontos);
        moverQuadrado();
        
    }                                        

   
   
