//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.printf("Alo?");
        msg m = new msg("Hello","teste");
        m.Teste();
        m.Teste4();
        m.Teste3();
        }
    }

   interface Verificar{
     void Teste();
      void Teste2();
   }

   interface Verificar2{
     void Teste3();
    void Teste4();
   }

   abstract class ver implements Verificar, Verificar2{
       public String teste;
       public String teste2;

       ver(String teste,String teste2){
           this.teste = teste;
           this.teste2 = teste2;
       }
   }

   class msg extends  ver{
        msg(String teste,String teste2){
            super(teste,teste2);
        }
       public void Teste3(){
           if(teste.equals("Hello Word")){
               System.out.printf("Hello and welcome!");
           }else{
               System.out.printf("Your is Communist?");
           }
       }
       public void Teste4(){
           if(teste.equals("E tetra")){
               System.out.printf("Hello and welcome!");
           }else{
               System.out.printf("Your is Communist?");
           }
       }

       @Override
       public void Teste() {
           System.out.printf("Hello and welcome!");
       }

       @Override
       public void Teste2() {
           System.out.printf("Hello and welcome!");
       }
   }
