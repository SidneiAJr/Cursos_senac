# ☕ Documentação — Exercícios Java

> Documentado no padrão **Albertool DocGen**

---

# **Assunto:** Interface + Implementação — `entrada1` / `Exc1`

### O que é
Interface `Verificar` que força a classe `entrada1` a implementar `Verificar1()` — coleta dados do usuário via Scanner e calcula a soma das notas.

### Pra que serve
Garante que qualquer classe que "seja um verificador" tenha o método `Verificar1()` — sem a interface, nada impede alguém de criar uma classe sem o método e quebrar o contrato.

### Fluxo

```
[objeto entrada1 criado com dados padrão no construtor]
        ↓
[Verificar1() sobrescreve tudo via Scanner — lê idade, nome e 3 notas]
        ↓
[calcula soma e imprime resultado com if/else]
```

### Exemplo

```java
entrada1 e1 = new entrada1("Frederico", 10, "Informacao", 5.5, 5.5, 5.5);
e1.Verificar1();
// Scanner vai pedir: Idade → Nome → Nota1 → Nota2 → Nota3
// Saída: Soma + Nome + Idade + classificação da nota
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface Verificar` | Define contrato — quem implementar DEVE ter `Verificar1()` | Classe `entrada1` | `entrada1 implements Verificar` | Garantir que o método exista em qualquer implementação |
| `entrada1 implements Verificar` | Assina o contrato da interface | JVM | `interface Verificar` | Obriga a classe a ter o método ou não compila |
| `Scanner entrada1 = new Scanner(System.in)` | Abre canal de leitura do teclado | Variáveis da classe | `System.in` | Capturar input do usuário em runtime |
| `@Override public void Verificar1()` | Implementa o método exigido pela interface | `main` | `interface Verificar` | Cumprir o contrato e executar a lógica real |
| `double soma = nota1+nota2+nota3` | Soma as 3 notas digitadas | `if/else` abaixo | `nota1, nota2, nota3` | Calcular média/soma para classificação |
| `if(soma<=7) ... else if(soma<5) ... else` | Classifica a nota — **atenção: lógica invertida** | `System.out` | `soma` | Mostrar status da nota (mas os blocos fazem a mesma coisa) |
| `entrada1.close()` | Fecha o Scanner | — | `Scanner entrada1` | Liberar recurso de I/O |
| `System.out.printf(String.format("Soma: ",soma))` | **Bug:** `soma` não aparece — falta `%s` ou `%.2f` no formato | `console` | `soma` | Deveria imprimir a soma, mas não imprime o valor |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Objeto criado com   →      Scanner captura novos valores  →   Soma calculada e
valores do construtor       e sobrescreve os atributos         impressa no console
```

### ⚠️ Armadilha

```
❌ if(soma<=7) vem ANTES de if(soma<5) — o segundo bloco nunca executa
❌ String.format("Soma: ", soma) — falta o placeholder %.2f, soma não aparece na saída
❌ Scanner não é fechado com try-with-resources — risco de resource leak
```

---

# **Assunto:** Interface + Scanner — `Personagem` / Energia

### O que é
Classe `Personagem` que implementa `Verificar` e lê o nível de energia do usuário via Scanner, comparando com o valor 50.

### Pra que serve
Exercita o padrão interface → implementação → `@Override` em Java, com lógica condicional simples pós-leitura.

### Fluxo

```
[Personagem criado com nivelEnergia=50]
        ↓
[VerificarEnergia() abre Scanner e lê novo valor do usuário]
        ↓
[if > 50 → "Alcançado" | else → "Ta Faltando Energia"]
```

### Exemplo

```java
Personagem p1 = new Personagem(50);
p1.VerificarEnergia();
// Console: "Insire o nivel de energia Atual: "
// Usuário digita: 80
// Saída: "Nivel de Energia Alcançado com Sucesso!"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface Verificar` | Contrato: exige `VerificarEnergia()` | `Personagem` | `implements Verificar` | Garantir o método em qualquer classe que implementar |
| `protected int NivelEnergia` | Armazena o nível de energia do personagem | `VerificarEnergia()` | construtor + Scanner | Dado central da lógica de verificação |
| `Scanner entrada = new Scanner(System.in)` | Abre leitura do teclado | `NivelEnergia` | `System.in` | Capturar valor digitado pelo usuário |
| `NivelEnergia = entrada.nextInt()` | Sobrescreve o valor do construtor com input real | `if/else` | `Scanner entrada` | Atualizar o estado do objeto com dado do usuário |
| `if(NivelEnergia>50)` | Compara energia com threshold 50 | `System.out` | `NivelEnergia` | Decidir qual mensagem exibir |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
NivelEnergia=50     →      Scanner lê novo valor e        →   if/else decide e
vindo do construtor         sobrescreve o atributo             imprime resultado
```

---

# **Assunto:** Múltiplas Interfaces — `personagem` / Frieren

### O que é
Classe `personagem` que implementa 4 métodos de interface (`VerificarNivelAlma`, `VerificarCoragem`, `VerificarEnergia`, `VerificarPortal`), cada um lendo input e avaliando atributos do personagem.

### Pra que serve
Demonstra que uma interface pode exigir vários métodos de uma vez — a classe é obrigada a implementar todos ou não compila.

### Fluxo

```
[3 personagens criados com atributos diferentes: Frieren, Gabriela, Prime]
        ↓
[cada método lê um atributo via Scanner e avalia com if/else]
        ↓
[VerificarPortal() usa os atributos já lidos para decidir qual portal exibir]
```

### Exemplo

```java
personagem p1 = new personagem(75.5, "Frieren", 2000, 200, 200);
p1.VerificarCoragem();   // lê Coragem do Scanner → "Coragem" ou "Sem Coragem"
p1.VerificarPortal();    // usa Alma, Coragem, Energia já definidos → escolhe portal
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface Verificar` (4 métodos) | Contrato com 4 obrigações | `class personagem` | `implements Verificar` | Forçar implementação completa |
| `VerificarNivelAlma()` | Lê Alma, classifica em 4 níveis com if/else aninhado | `console` | `Alma` | Avaliar se o nível de alma é suficiente |
| `VerificarCoragem()` | Lê Coragem e decide entre "Coragem" / "Sem Coragem" | `console` | `Coragem` | Verificar threshold de coragem |
| `VerificarEnergia()` | Lê Energia e classifica em 3 níveis | `console` | `Energia` | Verificar estado da energia |
| `VerificarPortal()` | **Não lê input** — usa atributos já existentes para decidir portal | `console` | `Alma, Coragem, Energia` | Lógica derivada dos outros atributos |
| `if(Alma>=70) { if(Alma>=75.5) ... }` | if aninhado dentro de outro if | `console` | `Alma` | Classificação em subcategorias de alma alta |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Atributos definidos →      Scanner sobrescreve cada um    →   if/else decide saída
no construtor               método por método                  e VerificarPortal
                                                               usa o estado final
```

### ⚠️ Armadilha

```
❌ VerificarNivelAlma() tem if(Alma>=70) externo — se Alma < 70 nada é impresso, silencioso
❌ Novo Scanner aberto em cada método sem fechar — 4 Scanners abertos ao mesmo tempo
```

---

# **Assunto:** Loop + Interface — `herois` / Fome

### O que é
Classe `herois` que lê nome e nível de fome via Scanner e usa um `for` para repetir verificação de fome enquanto `NivelFome >= 10`.

### Pra que serve
Exercita `for` com condição de parada baseada em atributo lido em runtime — e demonstra um loop infinito clássico de iniciante.

### Fluxo

```
[herois criado com Nome="Pedro" e NivelFome=5]
        ↓
[VerificarFome() lê novos valores e entra no for]
        ↓
[for roda enquanto NivelFome>=10 — se usuário digitar >=10, loop infinito]
```

### Exemplo

```java
herois h1 = new herois("Pedro", 5);
h1.VerificarFome();  // lê Nome e NivelFome
h1.VerificarNome();  // checa se Nome == "Meshi"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface Verificador` | Contrato com `VerificarFome()` e `VerificarNome()` | `class herois` | `implements Verificador` | Forçar implementação dos dois métodos |
| `Scanner entrainfo = new Scanner(System.in)` | Abre leitura do teclado | `Nome, NivelFome` | `System.in` | Capturar dados do usuário |
| `for (int i = 0; NivelFome >= 10; i++)` | Loop que roda enquanto NivelFome >= 10 | `if/else` interno | `NivelFome` | **Bug:** `i` incrementa mas `NivelFome` nunca muda → loop infinito |
| `if(NivelFome < 5)` dentro do `for` | Classifica fome em 3 níveis | `console` | `NivelFome` | Mostrar estado da fome do herói |
| `VerificarNome()` | Checa se nome é "Meshi" e imprime mensagem temática | `console` | `Nome` | Lógica de identidade do personagem |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
NivelFome=5 (abaixo →      Scanner lê novo valor — se     →   Loop infinito se
do threshold 10)            >= 10, for nunca para              NivelFome >= 10
```

### ⚠️ Armadilha

```
❌ Loop infinito garantido: NivelFome nunca é alterado dentro do for
❌ Condição do for usa NivelFome>=10 mas o if interno testa NivelFome<5 — lógica inconsistente
```

---

# **Assunto:** Interface + Scanner — `carta` / Tamanho de Texto

### O que é
Classe `carta` que lê o número de palavras via Scanner e classifica como texto grande ou pequeno com base no threshold 300.

### Pra que serve
Exemplo mínimo de interface com um único método e lógica condicional simples — bom ponto de partida pra entender `implements`.

### Fluxo

```
[carta criada com Tamanhotexto=550]
        ↓
[VerificarTexto() lê novo valor via Scanner]
        ↓
[if > 300 → imprime tamanho | else → "Texto Pequeno"]
```

### Exemplo

```java
carta c1 = new carta(550);
c1.VerificarTexto();
// Console: "Insira o Numero de palavras..."
// Usuário digita: 450
// Saída: "Seu Texto tem 450"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface Verificador` | Contrato: exige `VerificarTexto()` | `class carta` | `implements Verificador` | Garantir o método |
| `protected int Tamanhotexto` | Armazena tamanho do texto | `VerificarTexto()` | construtor + Scanner | Dado central da lógica |
| `Tamanhotexto = entra.nextInt()` | Sobrescreve valor do construtor | `if/else` | `Scanner entra` | Atualizar com input real |
| `if(Tamanhotexto>300)` | Threshold de classificação | `System.out` | `Tamanhotexto` | Decidir se texto é grande ou pequeno |
| `System.out.printf("Seu Texto tem "+Tamanhotexto)` | Imprime tamanho sem quebra de linha | `console` | `Tamanhotexto` | Feedback ao usuário |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Tamanhotexto=550    →      Scanner lê novo valor e        →   if decide e imprime
vindo do construtor         sobrescreve o atributo             mensagem no console
```

---

# **Assunto:** Sobrecarga de Construtor — `ReservaHotel`

### O que é
Classe `ReservaHotel` com 3 construtores sobrecarregados — cada um aceita um conjunto diferente de parâmetros para criar reservas em estados distintos.

### Pra que serve
Sobrecarga de construtor resolve o problema de criar objetos com "níveis" diferentes de informação sem precisar de vários métodos `criar`.

### Fluxo

```
[4 objetos ReservaHotel criados com diferentes parâmetros]
        ↓
[JVM escolhe o construtor certo baseado na assinatura]
        ↓
[teste() imprime os dados — campos não passados ficam com valor padrão Java]
```

### Exemplo

```java
ReservaHotel r1 = new ReservaHotel("Gabriela");               // só nome
ReservaHotel r2 = new ReservaHotel("Gabriela", 10);           // nome + noites
ReservaHotel r3 = new ReservaHotel("Gabriela",10,"Normal",true); // completo
r1.teste(); // Numeronoites=0, TipoQuarto=null (padrão Java)
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `ReservaHotel(String nomeCliente)` | Construtor mínimo — só nome | objeto `r1` | `NomeCliente` | Criar reserva sem dados completos ainda |
| `ReservaHotel(String, int)` | Construtor com nome + noites | objeto `r2` | `NomeCliente, Numeronoites` | Criar reserva com duração definida |
| `ReservaHotel(String, int, String, boolean)` | Construtor completo | objetos `r3, r4` | todos os campos | Criar reserva com todos os dados |
| `public void teste()` | Imprime todos os campos do objeto | `console` | todos os atributos | Verificar estado do objeto |
| `quantidadeReservas` e `idade` nunca inicializados | Campos declarados mas sem setter/construtor | `teste()` | — | **Bug:** sempre imprimem 0 |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
new ReservaHotel()  →      JVM resolve qual construtor    →   Objeto criado com
com N argumentos            bater com a assinatura             campos preenchidos
                                                               ou com padrão Java
```

### ⚠️ Armadilha

```
❌ teste() imprime campos que nunca foram inicializados: idade=0, quantidadeReservas=0
❌ Campos TipoQuarto e TemReserva não são impressos em teste() mesmo existindo
```

---

# **Assunto:** Sobrecarga de Construtor — `teste1` / Pizzaria

### O que é
Classe `teste1` (pizzaria) com 5 construtores sobrecarregados — modela pizza vazia, só sabor, sabor+borda, sabor+preço e pizza completa.

### Pra que serve
Mostra como oferecer diferentes "formas de criar" um objeto sem duplicar classe — cada construtor cobre um cenário de pedido diferente.

### Fluxo

```
[cliente chama new teste1() com 0 a 4 argumentos]
        ↓
[JVM escolhe o construtor pela assinatura — ordem e tipos dos parâmetros]
        ↓
[exibirInfor() mostra sabor, borda, preço do objeto criado]
```

### Exemplo

```java
teste1 t1 = new teste1();                    // pizza vazia — imprime "Pizza Vazia!"
teste1 t2 = new teste1("Costelinha");        // só sabor, preço fixo 50
teste1 t4 = new teste1("20 Queijos", 93.20); // sabor + preço custom
t4.exibirInfor();
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `teste1()` sem params | Construtor vazio — imprime "Pizza Vazia!" direto | `console` | — | Criar pizza sem nenhum dado |
| `teste1(String sabor)` | Só sabor — preço fixo 50 | objeto | `Sabor, preco` | Pedido mínimo |
| `teste1(String, boolean)` | Sabor + borda — adiciona R$10 se borda recheada | objeto | `Sabor, bordaRecheada, preco` | Pedido com personalização de borda |
| `teste1(String, double)` | Sabor + preço custom | objeto | `Sabor, preco` | Pedido com preço negociado |
| `this.Sabor=Sabor` no construtor `(String sabor)` | **Bug:** atribui o campo a ele mesmo — `Sabor` (atributo) não recebe `sabor` (parâmetro) | — | `Sabor` | Deveria ser `this.Sabor = sabor` (minúsculo) |
| `void exibirInfor()` | Imprime estado completo da pizza | `console` | todos os campos | Mostrar resultado do pedido |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
new teste1(args)    →      JVM resolve construtor pela    →   Objeto pizza com
com diferentes args         assinatura dos parâmetros         campos preenchidos
                                                               (ou bug no sabor)
```

### ⚠️ Armadilha

```
❌ this.Sabor=Sabor (maiúsculo) no construtor de 1 param — atribui campo a si mesmo, sabor fica null
❌ t1.exibirInfor() chamado 3 vezes em vez de t2 e t3 — objetos criados mas nunca usados
```

---

# **Assunto:** Métodos com Retorno — `hashira`

### O que é
Classe `hashira` com dois métodos: um `void` que imprime a técnica usada e um `int` que soma base + experiência e retorna o resultado.

### Pra que serve
Diferencia método que só executa ação (`void`) de método que calcula e devolve valor (`int`) — conceito fundamental antes de entrar em interfaces.

### Fluxo

```
[hashira h1 = new hashira()]
        ↓
[h1.forcaTotal(20,30) → soma=50 → imprime e retorna 50]
[h1.usarRespiracao("Pedra Voadora") → imprime a técnica]
        ↓
[retorno int de forcaTotal disponível para uso externo se armazenado]
```

### Exemplo

```java
hashira h1 = new hashira();
h1.forcaTotal(20, 30);       // imprime "Soma Total: 50", retorna 50
h1.usarRespiracao("Pedra Voadora"); // imprime "Usou Tecnica: Pedra Voadora"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `public void usarRespiracao(String tecnica)` | Recebe nome da técnica e imprime | `console` | `tecnica` | Exibir ação do personagem |
| `public int forcaTotal(int base, int experencia)` | Soma os dois parâmetros e retorna | `caller` + `console` | `base, experencia` | Calcular e expor força total |
| `int soma = base+experencia` | Calcula a soma local | `return soma` | `base, experencia` | Dado intermediário do cálculo |
| `return soma` | Devolve o valor calculado pro chamador | `main` | `soma` | Permitir que o resultado seja reutilizado |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Parâmetros passados →      Método soma os valores e       →   Resultado impresso
na chamada                  imprime internamente               e retornado ao main
```

---

# **Assunto:** Herança — `evamago` extends `Maga`

### O que é
Classe `evamago` que herda de `Maga` — acessa o atributo `sincronizao` e o método `ajustar()` da classe pai sem redeclará-los.

### Pra que serve
Herança evita duplicar código — `evamago` não precisa ter `sincronizao` nem `ajustar()`, pega tudo da `Maga` via `extends`.

### Fluxo

```
[evamago m1 = new evamago()]
        ↓
[sincroziado() chama ajustar(100) — método herdado de Maga]
        ↓
[sincronizao = 100 → imprime "Sync Magica: 100%"]
```

### Exemplo

```java
evamago m1 = new evamago();
m1.sincroziado();
// Chama ajustar(100) herdado de Maga
// Saída: "Sync Magica: 100%"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `class Maga` | Classe pai com atributo e método base | `evamago` via herança | `sincronizao, ajustar()` | Centralizar dados e comportamento compartilhado |
| `protected int sincronizao` | Atributo visível para subclasses (não para externos) | `ajustar(), sincroziado()` | `evamago` | Dado compartilhado entre pai e filho |
| `protected void ajustar(int valor)` | Define o valor de sincronização | `sincronizao` | `evamago.sincroziado()` | Encapsular a atribuição do atributo |
| `class evamago extends Maga` | Herda tudo de Maga | JVM | `Maga` | Reutilizar código sem copiar |
| `ajustar(100)` dentro de `sincroziado()` | Chama método herdado direto — sem `super.` | `sincronizao` | `Maga.ajustar()` | Setar sincronização via método do pai |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
evamago não tem     →      extends Maga dá acesso a       →   sincronizao=100
sincronizao nem             sincronizao e ajustar()            impresso via filho
ajustar()                   em tempo de compilação
```

---

# **Assunto:** Métodos e Atributos — `agente`

### O que é
Classe `agente` com atributos `nome` e `Idade` e 3 métodos: um `void` de missão, um `int` de cálculo de sigilo e um `void` de apresentação.

### Pra que serve
Exercita a diferença entre método que retorna valor e método que só executa ação, dentro de uma classe com atributos de instância.

### Fluxo

```
[agente g1 = new agente()]
        ↓
[apresentar("Pedro") → imprime codinome]
[executarMissao() → imprime status]
[calcularSigilo(20,1) → retorna 21 mas não imprime]
        ↓
[retorno de calcularSigilo ignorado — ninguém armazena]
```

### Exemplo

```java
agente g1 = new agente();
g1.apresentar("Pedro");        // "Agente Identificado como: Pedro"
g1.executarMissao();           // "Missão em Andamento"
g1.calcularSigilo(20, 1);      // retorna 21 mas não imprime nada
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `protected String nome` | Atributo de instância — nome do agente | métodos da classe | — | Dado de identidade do agente |
| `public void executarMissao()` | Imprime status fixo | `console` | — | Simular ação do agente |
| `public int calcularSigilo(int base, int missao)` | Soma e retorna — **não imprime** | `caller` | `base, missao` | Calcular nível de sigilo para uso externo |
| `public void apresentar(String codinome)` | Recebe nome e imprime | `console` | `codinome` | Identificar o agente |
| `return base+missao` | Devolve resultado pro caller | `main` | `base, missao` | Valor disponível mas ignorado no main |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Objeto sem estado   →      Métodos executam com params    →   void imprime direto
relevante                   locais ou atributos                int retorna e é
                                                               ignorado no main
```

### ⚠️ Armadilha

```
❌ calcularSigilo() retorna 21 mas main não armazena nem imprime — resultado some
❌ nome e Idade nunca são inicializados — ficam null e 0
```

---

# **Assunto:** Classe Simples — `retsuko`

### O que é
Classe `retsuko` com dois métodos: `cantarMetal()` que imprime ação e `estado(int estress)` que recebe nível de stress, imprime e retorna.

### Pra que serve
Exemplo mínimo de classe com método `void` e método com retorno `int` — sem interface, sem herança, foco puro em métodos.

### Fluxo

```
[retsuko r1 = new retsuko()]
        ↓
[cantarMetal() → imprime "Cantar Metal......"]
[estado(100) → imprime "Nivel de Stress: 100" → retorna 100]
        ↓
[retorno de estado() ignorado no main]
```

### Exemplo

```java
retsuko r1 = new retsuko();
r1.cantarMetal();   // "Cantar Metal......"
r1.estado(100);     // "Nivel de Stress: 100" — retorna 100 mas ninguém usa
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `public void cantarMetal()` | Imprime ação fixa | `console` | — | Simular comportamento do personagem |
| `public int estado(int estress)` | Recebe, imprime e retorna o nível de stress | `console` + `caller` | `estress` | Expor estado com possibilidade de reuso |
| `return estress` | Devolve o parâmetro direto | `main` (ignorado) | `estress` | Disponibilizar o valor pro chamador |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Objeto sem estado   →      Métodos executam com params    →   void só imprime
(sem atributos)             e imprimem resultado               int imprime e retorna
                                                               mas é ignorado
```

---

# **Assunto:** JDBC — Criar Banco de Dados — `CriarBanco`

### O que é
Classe que conecta ao MySQL via JDBC sem especificar banco, executa `CREATE DATABASE IF NOT EXISTS`, fecha a conexão e reconecta já no banco criado.

### Pra que serve
Resolve o problema de criar o banco programaticamente — sem precisar entrar no MySQL Workbench ou terminal antes de rodar a aplicação.

### Fluxo

```
[DriverManager.getConnection(URL sem banco)]
        ↓
[Statement executa CREATE DATABASE IF NOT EXISTS escola]
        ↓
[fecha conexão → abre nova conexão já com URL+banco]
```

### Exemplo

```java
// Conecta no MySQL raiz
Connection conn = DriverManager.getConnection(URL, USER, PASS);
// Cria banco se não existir
stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS escola");
// Reconecta no banco criado
conn = DriverManager.getConnection(URL + "escola", USER, PASS);
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `private static final String URL` | URL de conexão sem nome de banco | `DriverManager` | `USER, PASS` | Base da string de conexão JDBC |
| `DriverManager.getConnection(URL, USER, PASS)` | Abre conexão com MySQL sem banco específico | `conn` | `URL, USER, PASS` | Primeiro acesso para criar o banco |
| `stmt.executeUpdate(sql)` | Executa DDL no banco | MySQL Server | `sql (CREATE DATABASE)` | Criar o banco se não existir |
| `stmt.close(); conn.close()` | Fecha recursos antes de reconectar | — | `stmt, conn` | Liberar conexão antes de abrir nova |
| `DriverManager.getConnection(URL + nomeBanco, ...)` | Reconecta já no banco criado | `conn` | `nomeBanco` | Pronto pra usar o banco `escola` |
| `catch (SQLException e)` | Captura erro de conexão ou SQL | `console` | `e.getMessage()` | Evitar crash silencioso |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
MySQL rodando sem   →      JDBC conecta, cria banco e     →   conn aponta pro
banco "escola"              reconecta com banco na URL         banco pronto pra uso
```

### ⚠️ Armadilha

```
❌ Conexão aberta sem try-with-resources — se exceção ocorrer antes do close(), vaza conexão
❌ Senha hardcoded "root" — nunca em produção, usar variável de ambiente
```

---

# **Assunto:** JDBC — Classe de Conexão Reutilizável — `Conexao`

### O que é
Classe utilitária com método estático `conectar(String nomeBanco)` que encapsula a criação do banco e retorna um `Connection` pronto — qualquer classe chama sem repetir o boilerplate JDBC.

### Pra que serve
Centraliza a lógica de conexão — sem essa classe, cada arquivo que precisar do banco repetiria as 10 linhas de JDBC, e trocar a senha exigiria mexer em vários lugares.

### Fluxo

```
[Conexao.conectar("escola") chamado de qualquer lugar]
        ↓
[cria banco se não existe → fecha stmt → reconecta com banco]
        ↓
[retorna Connection pronto pra queries]
```

### Exemplo

```java
// Em qualquer classe do projeto:
Connection conn = Conexao.conectar("escola");
// conn pronto para Statement, PreparedStatement, etc.
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `public static Connection conectar(String nomeBanco)` | Método estático — não precisa instanciar `Conexao` | caller | `DriverManager` | Centralizar lógica de conexão |
| `throws SQLException` | Avisa o caller que pode lançar exceção de SQL | caller | `SQLException` | Forçar quem chama a tratar o erro |
| `try (Statement stmt = conn.createStatement())` | try-with-resources — fecha `stmt` automaticamente | `stmt.close()` automático | `conn` | Evitar resource leak no Statement |
| `stmt.executeUpdate(sql)` | Cria banco se não existir | MySQL | `CREATE DATABASE IF NOT EXISTS` | Garantir banco antes de conectar |
| `conn = DriverManager.getConnection(urlCompleta, ...)` | Reconecta com banco na URL | retorno | `urlCompleta` | Retornar conexão já no banco correto |
| `return conn` | Entrega conexão pronta pro caller | qualquer classe | `Connection` | Ponto central de acesso ao banco |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Classe precisa de   →      Conexao.conectar() cuida de    →   Connection retornada
conexão com banco           criar banco e conectar             pronta pra uso
sem saber JDBC              em dois passos                     pelo caller
```

---

# **Assunto:** JDBC + Swing — `ConexBanco`

### O que é
Classe `ConexBanco` que encapsula conexão MySQL com construtor recebendo banco, usuário e senha — e atualiza um `JLabel` (`lb_saida`) com o status da conexão.

### Pra que serve
Integra JDBC com interface gráfica Swing — o botão chama `cx1.conectar()` e o label mostra sucesso ou erro sem `System.out`.

### Fluxo

```
[botão clicado → jButton1ActionPerformed dispara]
        ↓
[new ConexBanco("test2","root","root") → conectar()]
        ↓
[sucesso: lb_saida.setText("Conexão estabelecida") | erro: lb_saida.setText(e.getMessage())]
```

### Exemplo

```java
// Dentro do evento do botão no Swing:
ConexBanco cx1 = new ConexBanco("test2", "root", "root");
cx1.conectar();  // atualiza lb_saida com resultado
// Para fechar depois:
cx1.fecharConexao();
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `private Connection conn = null` | Guarda a conexão como estado da instância | `conectar(), fecharConexao()` | `DriverManager` | Manter conexão acessível entre métodos |
| `public void conectar()` | Monta URL e abre conexão | `conn` | `DriverManager.getConnection()` | Estabelecer conexão com feedback visual |
| `lb_saida.setText(...)` | Atualiza label Swing com resultado | UI Swing | `JLabel lb_saida` | Feedback visual ao usuário sem console |
| `catch (SQLException e)` | Captura falha de conexão | `lb_saida` | `e.getMessage()` | Exibir erro na tela em vez de travar |
| `public void fecharConexao()` | Fecha `conn` se não for null | — | `conn.close()` | Liberar recurso ao fim do uso |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Botão clicado na    →      ConexBanco monta URL e        →    lb_saida mostra
interface Swing             tenta DriverManager              "sucesso" ou erro
```

### ⚠️ Armadilha

```
❌ lb_saida referenciado direto na classe — ConexBanco está acoplada ao componente Swing
❌ conn não é fechada automaticamente — fecharConexao() precisa ser chamado manualmente
```

---

# **Assunto:** Try/Catch/Finally — Divisão Segura

### O que é
Programa que lê dois inteiros e divide — captura `ArithmeticException` se divisor for zero e garante bloco `finally` sempre executando.

### Pra que serve
`try/catch` evita que a JVM encerre o programa abruptamente com stack trace quando ocorre divisão por zero — o `finally` garante limpeza mesmo com erro.

### Fluxo

```
[Scanner lê num1 e num2]
        ↓
[try: resultado = num1 / num2]
        ↓
[sucesso → imprime resultado | ArithmeticException → mensagem de erro]
        ↓
[finally sempre executa: "Operação Finalizada"]
```

### Exemplo

```java
// num1=10, num2=0
try {
    int resultado = 10 / 0;  // lança ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("❌ ERRO: Não é Possivel dividir por Zero DUDU");
} finally {
    System.out.println("Operação Finalizada");  // sempre roda
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `Scanner input = new Scanner(System.in)` | Abre leitura do teclado | `num1, num2` | `System.in` | Capturar os dois operandos |
| `try { int resultado = num1/num2 }` | Tenta a divisão — pode lançar exceção | `catch` se falhar | `num1, num2` | Isolar operação perigosa |
| `catch (ArithmeticException e)` | Captura divisão por zero especificamente | `console` | `ArithmeticException` | Tratar erro sem travar o programa |
| `finally` | Executa **sempre** — com ou sem erro | `console` | — | Garantir limpeza ou mensagem final |
| `input.close()` | Fecha o Scanner | — | `Scanner input` | Liberar recurso de I/O |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Dois números lidos  →      JVM tenta dividir — se zero,  →   catch imprime erro
pelo usuário                lança ArithmeticException         finally sempre roda
```

---

# **Assunto:** Exception Customizada — `salario` / Saque

### O que é
Classe `salario` com método `sacar()` que lança `Exception` customizada quando o valor do saque supera o saldo disponível.

### Pra que serve
`throw new Exception(mensagem)` permite criar regra de negócio com mensagem clara — em vez de deixar a JVM lançar `NullPointerException` ou `ArrayIndexOutOfBoundsException` sem contexto.

### Fluxo

```
[salario criado com saldo=1000]
        ↓
[sacar(500) → saldo>=500 → subtrai → "Saque realizado"]
[sacar(600) → saldo=500 < 600 → throw new Exception("Saldo Insuficiente...")]
        ↓
[catch no main captura e imprime a mensagem da exceção]
```

### Exemplo

```java
salario s1 = new salario(1000, 0.02, 0.05);
s1.sacar(500);  // OK → "Saque realizado! Novo saldo: R$ 500.0"
s1.sacar(600);  // throw → "❌ Saldo Insuficiente | Tentou sacar R$ 600.0 mas o saldo é R$ 500.0"
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `public void sacar(double valor) throws Exception` | Declara que pode lançar exceção checada | `caller (main)` | `Exception` | Forçar quem chamar a tratar o erro |
| `if (valor > saldo)` | Checa se saque é possível | `throw` | `saldo, valor` | Regra de negócio: não sacar mais que tem |
| `throw new Exception("❌ Saldo Insuficiente...")` | Lança exceção com mensagem detalhada | `catch` no main | `valor, saldo` | Comunicar falha com contexto claro |
| `saldo -= valor` | Deduz o saque do saldo | `saldo` | `valor` | Atualizar estado após saque válido |
| `catch (Exception e)` no main | Captura qualquer exceção de `s1` | `console` | `e.getMessage()` | Tratar erro sem travar o programa |
| `public void verificarsaldo()` | **Bug:** `if(saldo>=0)` imprime "sem saldo" mesmo com saldo positivo | `console` | `saldo` | Deveria ser `saldo<=0` para indicar sem saldo |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
saldo=1000, pedido  →      sacar() valida se valor <=    →   saldo atualizado ou
de saque chega              saldo antes de debitar           Exception lançada e
                                                              capturada no main
```

### ⚠️ Armadilha

```
❌ verificarsaldo(): if(saldo>=0) sempre verdadeiro com saldo positivo — mensagem "sem saldo" errada
❌ acrescimento(): catch(ArithmeticException) em operação de multiplicação — nunca vai lançar esse erro
❌ construtor ignora o parâmetro saldo e hardcoda this.saldo=1000
```
