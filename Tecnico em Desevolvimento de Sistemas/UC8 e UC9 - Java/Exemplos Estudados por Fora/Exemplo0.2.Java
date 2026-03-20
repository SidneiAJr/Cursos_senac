class Main {
    public static void main(String[] args) {
        int n1 = 5;
        float n2 = 5.5f;
        double  n3 = 5.55;
        String n4 = "A";
        boolean n6 = true;
        double n5 = 5.5;
        
        double soma = n1 +n3; // Soma com Numero Inteiro + Quebrado
        String soma2 = n4 + n5; // Soma de Uma String + Numero [Erro]
        double soma3 = n3 + n2; 
        
        System.out.printf("Soma1 %.2f%n",soma);
        System.out.printf("Soma2 %s%n",soma2);
        System.out.printf("Soma3 %.2f%n",soma3);
       
    }
}
