public class Main {
    public static void main(String[] args) {
    Maga m1 = new Maga();
    m1.setMana(50000);
    System.out.println("Magia: " + m1.getMana());


    }
}

class Maga{
    private int mana;

    public int getMana() {
        return mana;
    }

    public void setMana(int mana) {
       this.mana = mana;
        }

        public void verificarmana(){
            if(mana<0 || mana>10000){
                System.out.println("Maga Muito Forte");
            }else{
                System.out.println("Maga Muito fraco");
        }
    }
}






