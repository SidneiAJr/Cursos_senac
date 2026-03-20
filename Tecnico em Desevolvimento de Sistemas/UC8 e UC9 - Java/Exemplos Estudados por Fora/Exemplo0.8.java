
import java.lang.reflect.Constructor;


class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
    }
}

class aluno{
    String nome_aluno;
    int idade_aluno;
    String cidade_aluno;
}
class turma{
    String nome_turma;
    String descricao_turma;
    String tamanho_turma;
}
class professor{
    String nome_professor;
    String idade_professor;
    String cidade_professor;
}
class curso{
    String nome_curso;
    String info_curso;
    Constructor(String nome_curso,String info_curso){
       this.nome_curso = nome_curso;
       this.info_curso = info_curso;
    }
}
