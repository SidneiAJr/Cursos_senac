# 📋 Plano de Testes - Sistema de Gestão de Eventos 

---

##  RF01 — CADASTRO DE USUÁRIO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT001 | RF01 | Cadastrar usuário com dados válidos | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: João Silva<br>Email: joao@email.com<br>Senha: Teste@123<br>Nasc: 01/01/1990 | Usuário cadastrado com sucesso<br>Mensagem de confirmação | Positivo |
| CT002 | RF01 | Cadastrar com email já existente | Email joao@email.com já cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Maria Souza<br>Email: joao@email.com<br>Senha: Teste@123<br>Nasc: 02/02/1995 | Mensagem: "Email já utilizado"<br>Cadastro não realizado | Negativo |
| CT003 | RF01 | Cadastrar com nome vazio | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Deixar nome em branco<br>3. Preencher demais campos<br>4. Clicar em "Cadastrar" | Nome: (vazio)<br>Email: maria@email.com<br>Senha: Teste@123<br>Nasc: 02/02/1995 | Mensagem: "Nome é obrigatório" | Negativo |
| CT004 | RF01 | Cadastrar com email inválido | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Pedro Santos<br>Email: "pedro@.com"<br>Senha: Teste@123<br>Nasc: 03/03/1992 | Mensagem: "Email inválido" | Negativo |
| CT005 | RF01 | Cadastrar com senha fraca (sem maiúscula) | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Ana Costa<br>Email: ana@email.com<br>Senha: "teste@123"<br>Nasc: 04/04/1993 | Mensagem: "Senha deve conter pelo menos 1 letra maiúscula" | Negativo |
| CT006 | RF01 | Cadastrar com senha curta (<8 caracteres) | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Carlos Lima<br>Email: carlos@email.com<br>Senha: "Teste1"<br>Nasc: 05/05/1994 | Mensagem: "Senha deve ter no mínimo 8 caracteres" | Negativo |
| CT007 | RF01 | Cadastrar com data de nascimento futura | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Preencher campos<br>3. Clicar em "Cadastrar" | Nome: Fernanda Reis<br>Email: fernanda@email.com<br>Senha: Teste@123<br>Nasc: 01/01/2030 | Mensagem: "Data de nascimento inválida" | Negativo |
| CT008 | RF01 | Cadastrar com todos os campos vazios | Usuário não cadastrado | 1. Acessar tela de cadastro<br>2. Clicar em "Cadastrar" sem preencher nada | Todos os campos vazios | Mensagens de erro para cada campo obrigatório | Negativo |

---

##  RF02 — LOGIN DE USUÁRIO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT009 | RF02 | Login com credenciais válidas | Usuário joao@email.com cadastrado | 1. Acessar tela de login<br>2. Preencher email e senha<br>3. Clicar em "Entrar" | Email: joao@email.com<br>Senha: Teste@123 | Login realizado com sucesso<br>Redirecionar para dashboard | Positivo |
| CT010 | RF02 | Login com senha incorreta | Usuário cadastrado | 1. Acessar tela de login<br>2. Preencher email e senha errada<br>3. Clicar em "Entrar" | Email: joao@email.com<br>Senha: SenhaErrada@123 | Mensagem: "Credenciais inválidas" | Negativo |
| CT011 | RF02 | Login com email não cadastrado | Email não existe no sistema | 1. Acessar tela de login<br>2. Preencher email não cadastrado<br>3. Clicar em "Entrar" | Email: naoexiste@email.com<br>Senha: Teste@123 | Mensagem: "Usuário não encontrado" | Negativo |
| CT012 | RF02 | Login com campos vazios | - | 1. Acessar tela de login<br>2. Clicar em "Entrar" sem preencher | Email: (vazio)<br>Senha: (vazio) | Mensagens de erro para campos obrigatórios | Negativo |

---

##  RF03 — CADASTRO DE EVENTO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT013 | RF03 | Cadastrar evento com dados válidos | Usuário admin logado | 1. Acessar tela de cadastro de evento<br>2. Preencher campos<br>3. Clicar em "Salvar" | Nome: "Palestra Dev"<br>Descrição: "Sobre QA"<br>Data: 01/05/2025<br>Máx: 50 | Evento cadastrado com sucesso | Positivo |
| CT014 | RF03 | Cadastrar evento sem nome | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Deixar nome vazio<br>3. Preencher demais campos | Nome: (vazio)<br>Descrição: "Sobre QA"<br>Data: 01/05/2025<br>Máx: 50 | Mensagem: "Nome do evento obrigatório" | Negativo |
| CT015 | RF03 | Cadastrar evento com data passada | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Preencher com data anterior | Nome: "Evento Passado"<br>Data: 01/01/2020<br>Máx: 50 | Mensagem: "Data deve ser futura" | Negativo |
| CT016 | RF03 | Cadastrar evento com máximo negativo | Usuário admin logado | 1. Acessar tela de cadastro<br>2. Inserir valor negativo | Nome: "Evento Teste"<br>Data: 01/06/2025<br>Máx: -10 | Mensagem: "Número máximo inválido" | Negativo |

---

##  RF04 — LISTAGEM DE EVENTOS

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT017 | RF04 | Listar eventos cadastrados | Eventos existentes no sistema | 1. Acessar página de eventos | - | Lista com todos os eventos cadastrados | Positivo |
| CT018 | RF04 | Listar eventos sem cadastros | Nenhum evento no sistema | 1. Acessar página de eventos | - | Mensagem: "Nenhum evento encontrado" | Positivo |

---

##  RF05 — INSCRIÇÃO EM EVENTO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT019 | RF05 | Inscrever usuário em evento com vagas | Usuário logado, evento futuro com vagas | 1. Acessar evento<br>2. Clicar em "Inscrever-se" | - | Inscrição confirmada, vaga reduzida | Positivo |
| CT020 | RF05 | Inscrever mesmo usuário duas vezes | Usuário já inscrito no evento | 1. Acessar evento<br>2. Clicar novamente em "Inscrever-se" | - | Mensagem: "Você já está inscrito neste evento" | Negativo |
| CT021 | RF05 | Inscrever em evento lotado | Evento com 0 vagas | 1. Acessar evento lotado<br>2. Clicar em "Inscrever-se" | - | Mensagem: "Evento lotado" | Negativo |
| CT022 | RF05 | Inscrever em evento passado | Evento com data anterior | 1. Acessar evento passado<br>2. Clicar em "Inscrever-se" | - | Mensagem: "Não é possível se inscrever em eventos passados" | Negativo |
| CT023 | RF05 | Inscrever sem estar logado | Usuário não autenticado | 1. Acessar evento<br>2. Clicar em "Inscrever-se" | - | Redirecionar para tela de login | Negativo |

---

##  RF06 — CANCELAMENTO DE INSCRIÇÃO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT024 | RF06 | Cancelar inscrição válida | Usuário inscrito em evento futuro | 1. Acessar minhas inscrições<br>2. Clicar em "Cancelar" | - | Inscrição cancelada, vaga liberada (+1) | Positivo |
| CT025 | RF06 | Cancelar inscrição inexistente | Usuário não inscrito | 1. Acessar evento<br>2. Tentar cancelar inscrição | - | Mensagem: "Inscrição não encontrada" | Negativo |
| CT026 | RF06 | Cancelar sem estar logado | Usuário não autenticado | 1. Acessar evento<br>2. Tentar cancelar | - | Redirecionar para login | Negativo |

---

##  RNF01 — VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS

| ID | Requisito | Descrição | Tela | Passos | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----:|:------:|:-------------------:|:----:|
| CT027 | RNF01 | Validar data de nascimento obrigatória | Cadastro | 1. Preencher todos os campos menos data<br>2. Clicar em "Cadastrar" | Mensagem: "Data de nascimento obrigatória" | Negativo |
| CT028 | RNF01 | Validar descrição obrigatória no evento | Cadastro Evento | 1. Preencher todos os campos menos descrição<br>2. Clicar em "Salvar" | Mensagem: "Descrição obrigatória" | Negativo |
| CT029 | RNF01 | Validar nome do evento obrigatório | Cadastro Evento | 1. Preencher todos os campos menos nome<br>2. Clicar em "Salvar" | Mensagem: "Nome do evento obrigatório" | Negativo |
| CT030 | RNF01 | Validar data do evento obrigatória | Cadastro Evento | 1. Preencher todos os campos menos data<br>2. Clicar em "Salvar" | Mensagem: "Data do evento obrigatória" | Negativo |
| CT031 | RNF01 | Validar número máximo obrigatório | Cadastro Evento | 1. Preencher todos os campos menos máximo<br>2. Clicar em "Salvar" | Mensagem: "Número máximo de participantes obrigatório" | Negativo |

---

##  RNF02 — SEGURANÇA DE SENHA

| ID | Requisito | Descrição | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:----------------:|:-------------------:|:----:|
| CT032 | RNF02 | Senha sem maiúscula | "teste@123" | Mensagem: "Senha deve conter 1 letra maiúscula" | Negativo |
| CT033 | RNF02 | Senha sem número | "Teste@abc" | Mensagem: "Senha deve conter 1 número" | Negativo |
| CT034 | RNF02 | Senha com menos de 8 caracteres | "Tes@12" | Mensagem: "Senha deve ter no mínimo 8 caracteres" | Negativo |
| CT035 | RNF02 | Senha válida | "Teste@123" | Senha aceita | Positivo |

---

##  RNF03 — TEMPO DE RESPOSTA

| ID | Requisito | Descrição | Como testar | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:-----------:|:-------------------:|:----:|
| CT036 | RNF03 | Listagem com 1 evento | Medir tempo de carregamento da página de eventos | < 2 segundos | Desempenho |
| CT037 | RNF03 | Listagem com 100 eventos | Medir tempo de carregamento da página de eventos | < 2 segundos | Desempenho |
| CT038 | RNF03 | Listagem com 0 eventos | Medir tempo de carregamento da página de eventos | < 2 segundos | Desempenho |

---

##  RNF04 — COMPATIBILIDADE (NAVEGADORES)

| ID | Requisito | Descrição | Navegador | Passos | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:---------:|:------:|:-------------------:|:----:|
| CT039 | RNF04 | Executar CT001 no Chrome | Chrome | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |
| CT040 | RNF04 | Executar CT001 no Firefox | Firefox | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |
| CT041 | RNF04 | Executar CT001 no Edge | Edge | Executar o caso de teste CT001 | Funciona normalmente | Compatibilidade |

---

##  RNF05 — INTEGRIDADE DE DADOS (EMAIL ÚNICO)

| ID | Requisito | Descrição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------:|:----------------:|:-------------------:|:----:|
| CT042 | RNF05 | Criar dois usuários com mesmo email simultaneamente | 1. Enviar duas requisições de cadastro com mesmo email ao mesmo tempo | Email: joao@email.com<br>Senha: Teste@123 | Apenas UM cadastro é criado<br>O segundo recebe erro de email duplicado | Concorrência |

---

##  RF06 — CANCELAMENTO DE INSCRIÇÃO EM EVENTO

| ID | Requisito | Descrição | Pré-condição | Passos | Dados de Entrada | Resultado Esperado | Tipo |
|:--:|:---------:|:---------:|:------------:|:------:|:----------------:|:-------------------:|:----:|
| CT024 | RF06 | Cancelar inscrição válida | Usuário autenticado e inscrito em evento futuro com vagas ocupadas | 1. Acessar "Minhas Inscrições"<br>2. Localizar evento desejado<br>3. Clicar em "Cancelar Inscrição"<br>4. Confirmar cancelamento | Nome do evento: "Palestra Dev"<br>Usuário: João Silva | - Inscrição cancelada com sucesso<br>- Mensagem: "Inscrição cancelada"<br>- Vaga liberada (lotação +1)<br>- Evento volta a aparecer para novos inscritos | Positivo |
| CT025 | RF06 | Cancelar inscrição inexistente | Usuário autenticado, mas não inscrito no evento | 1. Acessar página do evento<br>2. Clicar em "Cancelar Inscrição" (se disponível) | Nome do evento: "Evento Inexistente"<br>Usuário: João Silva | Mensagem: "Inscrição não encontrada" ou "Você não está inscrito neste evento" | Negativo |
| CT026 | RF06 | Cancelar sem estar autenticado | Usuário não logado tenta cancelar inscrição | 1. Acessar página do evento<br>2. Clicar em "Cancelar Inscrição" (se disponível) | - | Redirecionar para tela de login | Negativo |
| CT027 | RF06 | Cancelar inscrição em evento passado | Usuário autenticado e inscrito em evento que já ocorreu | 1. Acessar "Minhas Inscrições"<br>2. Localizar evento passado<br>3. Clicar em "Cancelar Inscrição" | Nome do evento: "Evento 2024"<br>Data: 01/01/2024 | Mensagem: "Não é possível cancelar inscrição em eventos já realizados" | Negativo |
| CT028 | RF06 | Cancelar inscrição de outro usuário | Usuário autenticado tenta cancelar inscrição de terceiro | 1. Acessar página do evento<br>2. Tentar cancelar inscrição de outro usuário (se interface permitir) | Usuário alvo: Maria Souza | Mensagem: "Você não tem permissão para cancelar esta inscrição" | Negativo |
| CT029 | RF06 | Cancelar e verificar vaga liberada | Usuário cancela e outro usuário se inscreve | 1. Usuário A cancela inscrição<br>2. Usuário B se inscreve no mesmo evento | Evento com 1 vaga restante antes do cancelamento | - Vaga é liberada<br>- Usuário B consegue se inscrever com sucesso | Positivo |
| CT030 | RF06 | Cancelar evento como administrador | Administrador cancela evento inteiro (não apenas inscrição) | 1. Admin acessa painel<br>2. Seleciona evento<br>3. Clica em "Cancelar Evento" | Evento: "Palestra Dev" | - Evento cancelado<br>- Todos os inscritos recebem notificação<br>- Vagas são liberadas | Positivo |



