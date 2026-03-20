package pooComposicao;


public class Carro {
    // Classe Carro representa um carro completo,
    // que é composto por UM motor (reuso via COMPOSIÇÃO).

    final Motor motor;
    // O Carro TEM UM Motor.
    // 'final' garante que, depois de criado no construtor,
    // não trocaremos esse motor por outro (não faz "swap" de motor).
    // Isso reforça a ideia de composição forte.

    Carro() {
        // Construtor do Carro. Chamado quando fazemos new Carro().

        this.motor = new Motor(this);
        // Ao criar o Carro, ele também cria o seu Motor.
        // Passa 'this' (o próprio Carro) para o construtor do Motor,
        // permitindo que o Motor saiba quem é o seu "dono".
        // Isso cria uma relação bidirecional Carro ↔ Motor.
    }

    void acelerar() {
        // Método que simula o ato de acelerar o carro.

        if (motor.fatorInjecao < 2.6) {
            // Verifica se o fator de injeção ainda não chegou ao limite máximo (2.6).

            motor.fatorInjecao += 0.4;
            // Aumenta o fator de injeção em 0.4.
            // Isso fará o motor girar mais quando chamarmos giros().
        }
    }

    void frear() {
        // Método que simula o ato de frear o carro.

        if (motor.fatorInjecao > 0.5) {
            // Garante que o fator de injeção não fique abaixo de um limite mínimo (0.5).

            motor.fatorInjecao -= 0.4;
            // Diminui o fator de injeção em 0.4.
            // Isso reduz a rotação do motor.
        }
    }

    void ligar() {
        // Liga o carro.

        motor.ligado = true;
        // Na prática, ligar o carro significa ligar o motor.
        // Muda o estado do motor para ligado (true).
    }

    void desligar() {
        // Desliga o carro.

        motor.ligado = false;
        // Desligar o carro significa desligar o motor.
        // Muda o estado do motor para desligado (false).
    }

    boolean estaLigado() {
        // Método que informa se o carro está ligado ou não.

        return motor.ligado;
        // O estado "ligado" do carro depende diretamente do estado do motor.
        // Não há um 'ligado' separado no Carro, ele consulta o Motor.
    }
}


/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pooComposicao;

/**
 *
 * @author Dalvana
 */
public class CarroTestee {
 
    // Classe de teste. Contém o método main para executar o programa.

    public static void main(String[] args) {
        // Ponto de entrada da aplicação Java.

        Carro c1 = new Carro();
        // Cria um novo objeto Carro.
        // Dentro do construtor do Carro, também será criado um Motor associado a ele.

        System.out.println(c1.estaLigado());
        // Imprime se o carro está ligado.
        // Como o motor começa desligado, o resultado esperado é: false.

        c1.ligar();
        // Chama o método ligar() do Carro,
        // que internamente configura motor.ligado = true.

        System.out.println(c1.estaLigado());
        // Agora deve imprimir true, pois o motor foi ligado.

        System.out.println(c1.motor.giros());
     

        c1.acelerar();
        c1.acelerar();
        c1.acelerar();
        c1.acelerar();
      

        System.out.println(c1.motor.giros());
   
        c1.frear();
        c1.frear();
        c1.frear();
        c1.frear();
        c1.frear();
        c1.frear();
        c1.frear();
        c1.frear();
       
        System.out.println(c1.motor.giros());
      

    }
}
  /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pooComposicao;

/**
 *
 * @author Dalvana
*/

public class Motor {
    // Classe Motor representa o motor de um carro.
    // Ela não faz sentido sozinha: sempre pertence a um Carro (composição).
    
/////////////////////////DEPOIS DE CARRO /////////////////////////////////////////////////////////////
    final Carro carro;

/////////////////////////DEPOIS DE CARRO /////////////////////////////////////////////////////////////
    boolean ligado = false;
    // Indica se o motor está ligado ou desligado.
    // Começa desligado (false) por padrão.

    double fatorInjecao = 1;

    
    // Representa a quantidade de combustível sendo injetada.
    // Esse valor será usado para calcular os "giros" do motor.
    // Quanto maior o fator, maior a rotação.
/////////////////////////DEPOIS DE CARRO /////////////////////////////////////////////////////////////
    Motor(Carro carro) {
        // Construtor do Motor. Recebe um objeto Carro como parâmetro.

        this.carro = carro;
        // 'this.carro' (atributo da classe) recebe o 'carro' passado no construtor.
        // Com isso, o Motor sabe a qual Carro ele pertence.
    }
/////////////////////////DEPOIS DE CARRO /////////////////////////////////////////////////////////////
    int giros() {
        // Método que calcula e retorna a rotação (RPM) do motor.

        if (!ligado) {
            // Se o motor NÃO estiver ligado...

            return 0;
            // Não há giros. Motor desligado → 0 RPM.
        } else {
            // Se o motor estiver ligado...

            return (int) Math.round(fatorInjecao * 3000);
            // Calcula os giros multiplicando o fator de injeção por 3000.
            // Math.round(...) arredonda o valor para o inteiro mais próximo.
            // O resultado é convertido para int.
        }
    }
}
