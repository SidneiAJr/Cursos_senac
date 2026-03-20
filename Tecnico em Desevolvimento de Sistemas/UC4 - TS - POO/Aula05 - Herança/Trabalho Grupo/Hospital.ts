// Atividade 1 -> Criar um sistema para um cliente leigo sem Jargão tecnico(Sistema Hospital)
// Nome do grupo(Sidtopia)

class Hospital{
    // Informações Paciente:
    private atendimento_registrado:number;
    public nome_paciente:string;
    private cpf_paciente:string;
    public descricao_paciente:string;
    public publicalergia_paciente:string;
    public idade_paciente:number;
    // Informação Medico:
    private nome_medico:string;
    public idade_medico:number;
    public descricao_medico:string;
    public area_medico:string;
    public motivo_visita:string;

    // Construtor para os itens do Hospital
    constructor(nome_paciente:string,cpf_paciente:string,descricao_paciente:string,alergia_paciente:string,idade_paciente:number,nome_medico:string,idade_medico:number,descricao_medico:string,area_medico:string,motivo_visita:string){
    
    // Referencia ao Objeto
    this.atendimento_registrado = 0;
    this.area_medico = area_medico;
    this.cpf_paciente = cpf_paciente;
    this.descricao_paciente = descricao_medico;
    this.idade_medico = idade_medico;
    this.motivo_visita = motivo_visita;
    this.nome_medico = nome_medico;
    this.nome_paciente = nome_paciente;
    this.idade_paciente = idade_paciente;
    this.descricao_paciente = descricao_paciente;
    this.descricao_medico = descricao_medico;
    }

    // Metodo Atendimento
    atendimento(){
        console.log(`Paciente ${this.nome_paciente} foi atendido por ${this.nome_medico}`)
    }

    //Metodo Ficha
    ficha(){
        console.log(`Paciente ${this.nome_paciente} Foi feito a ficha, para ser atendido por ${this.nome_medico}`)
    }
    registrado_atendimento(){
        this.atendimento_registrado =+1;
        console.log(`Total de Atendimento: ${this.atendimento_registrado}`)
    }

     getNomePaciente(): string {
        return this.nome_paciente;
    }

    setNomePaciente(novoNome: string): void {
        this.nome_paciente = novoNome;
    }

    getCpfPaciente(): string {
        return this.cpf_paciente;
    }

    setCpfPaciente(novoCpf: string): void {
        this.cpf_paciente = novoCpf;
    }
}
 class EstoqueHospital{
        public NomeProduto:string;
        private NomeEnfermeiro:string;
        private QuantidadeProduto:number;
        
        constructor(NomeProduto:string,NomeEnfermeiro:string){
            this.NomeProduto = NomeProduto;
            this.NomeEnfermeiro = NomeEnfermeiro;
            this.QuantidadeProduto = 50;
        }
        UsoProduto(){
             if(this.QuantidadeProduto<=50){
             this.QuantidadeProduto -=1;
             console.log(`Produto Retirado por ${this.NomeEnfermeiro},Quantidade de Produto no estoque ${this.QuantidadeProduto}`);
             }else if(this.QuantidadeProduto>=25){
              this.QuantidadeProduto -=1;
            console.log(`Produto Retirado por ${this.NomeEnfermeiro},Quantidade de Produto no estoque ${this.QuantidadeProduto}`);
             console.log(`Estoque Acabando ${this.QuantidadeProduto}`);

             }else{
                console.log(`Quantidade de Produto no estoque ${this.QuantidadeProduto}`);
             }
        }
        
    }
// Contruir Paciente 1
const paciente1 = new Hospital("Jian Machado Silva","1212121212","Homem Adulto","Dipirona",25,"Oswaldo Pereira",39,"Homem Adulto","Clinico Geral","Dor na Coluna");
// Contruir Paciente 2
const paciente2 = new Hospital("Erika Macho Silva Lima","1212121212","Adolecente","Dipirona",25,"Luis Pereira Lima silva",59,"Homem Adulto","Clinico Geral","Dor na Coluna");
const enfermeiro1 = new EstoqueHospital("Vacina","Pedro Silva");
const enfermeiro2 = new EstoqueHospital("Vacina","Pedro Oswaldo");
const enfermeiro3 = new EstoqueHospital("Vacina","Pedro Alvares");
const enfermeiro4 = new EstoqueHospital("Vacina","Luis pedro");
const enfermeiro5 = new EstoqueHospital("Vacina","Silva Lima Pedro");
const enfermeiro6 = new EstoqueHospital("Vacina","Daniel Prime");


paciente1.atendimento();
paciente2.ficha();
paciente1.registrado_atendimento();
paciente2.registrado_atendimento();

enfermeiro1.UsoProduto();
enfermeiro2.UsoProduto();
enfermeiro3.UsoProduto();
enfermeiro4.UsoProduto();
enfermeiro5.UsoProduto();
enfermeiro6.UsoProduto();
