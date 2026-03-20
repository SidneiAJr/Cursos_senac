import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        nt n1 = new nt(5.5);
        n1.Nota();

        }
}

interface VerificarNota{
    void Nota();
}

class nt implements VerificarNota{
    protected double notas;

    public nt(double notas) {
        this.notas = notas;
    }

    @Override
    public void Nota() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Nota (0 a 10)");
        notas = sc.nextDouble();

        if (notas >= 9.0) {
            System.out.println("Elegante!");
        } else if (notas >= 7.0) {
            System.out.println("Aprovada pela Eden Academy");
        } else if (notas < 7.0) {
            System.out.println("Anya faz cara triste");
        }
    }
}
