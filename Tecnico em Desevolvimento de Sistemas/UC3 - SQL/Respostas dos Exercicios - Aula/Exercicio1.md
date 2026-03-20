🧠 Teóricos

    1)Explique com suas palavras a diferença entre dado e informação.
    
    2)Para que serve um banco de dados?
    
    3)Cite exemplos de onde encontramos bancos de dados no dia a dia.

    
    Resposta1)Dados são Informações que podem ser armazenadas e informação são informações que podem ser guardadas,Quando esses dados são organizados, processados ou analisados, eles se tornam informações
    
    Resposta2)Um banco de dados serve para armazenar e organizar grandes volumes de dados de forma estruturada, permitindo fácil acesso, manipulação e atualização dessas informações. Ele também facilita a segurança e integridade dos dados.
    
    Resposta3)Shope,Netflix e outros
  

🧩 Práticos

  Crie um modelo lógico com as seguintes entidades:
  
  Aluno (id, nome, data_nascimento)
  
  Curso (id, nome, carga_horaria)
  
  Um aluno pode se matricular em vários cursos (relacionamento N:N)
  
  Qual seria a chave primária e chave estrangeira no relacionamento acima? Resposta: chave primaria id aluno e chave primaria id curso mandara como chave estrageira para a tabela matricula

  🎲Banco_Aluno(Id,nome,data_nascimento,cpf,numeromatricula) Chave Primary ID
  
  🎲Banco_Curso(Id,Nome,nomecurso) Chave Primary ID
  
  🎲Banco_Matricula(nomecurso,numeromatricula,cpf,idcurso) Chave Estrageira(nomecurso) e Chave Estrageira(idcurso)
  
