public class Main {
    public static void main(String[] args) {
        ReservaHotel r1 = new ReservaHotel("Gabriela");
        ReservaHotel r2 = new ReservaHotel("Gabriela",10);
        ReservaHotel r3 = new ReservaHotel("Gabriela",10,"Normal",true);
        ReservaHotel r4 = new ReservaHotel("Gabriela",4,"Premium",true);

        r1.teste();
        r2.teste();
        r3.teste();
        r4.teste();

        }
    }

    class ReservaHotel{

    protected String NomeCliente;
    protected int idade;
    protected int quantidadeReservas;
    protected boolean TemReserva;
    protected int Numeronoites;
    protected String TipoQuarto;

        public ReservaHotel(String nomeCliente) {
            NomeCliente = nomeCliente;
        }

        public ReservaHotel(String nomeCliente, int numeronoites) {
            NomeCliente = nomeCliente;
            Numeronoites = numeronoites;
        }

        public ReservaHotel(String nomeCliente, int numeronoites, String tipoQuarto, boolean temReserva) {
            NomeCliente = nomeCliente;
            Numeronoites = numeronoites;
            TipoQuarto = tipoQuarto;
            TemReserva = temReserva;
        }

        public void teste(){
            System.out.printf("------Sistema de Reserva------" + "\n");
            System.out.printf("Nome Cliente: "+ NomeCliente + "\n");
            System.out.printf("Nome Cliente: "+NomeCliente + "Quantidade de Noite: "+ Numeronoites + "\n");
            System.out.printf("Nome Cliente: "+ NomeCliente + "Idade: "+ idade + "Quantidade Noites: " + Numeronoites + "\n");
            System.out.printf("Quantidade de Reservas: "+ quantidadeReservas + "\n");
        }
    }
