# 📂 Documentos e Artefatos de Teste

Além do código, criamos documentos auxiliares que ajudam a organizar os testes:

## 📋 Principais Artefatos

| Artefato | Descrição | Exemplo Prático |
|----------|-----------|-----------------|
| **Plano de Teste 📑** | Descreve o que será testado, como e quando | "Testar módulo de pagamento até 15/03" |
| **Casos de Teste 📝** | Passo a passo para validar uma funcionalidade | "CT001 - Login com sucesso" |
| **Relatórios de Teste 📊** | Registram o que foi testado e os resultados | "80% dos testes passaram, 20% falharam" |
| **Matriz de Rastreabilidade 🔗** | Liga requisitos aos testes | "Requisito R123 está coberto pelo CT456" |
| **Massas de Dados 💾** | Conjuntos de dados para executar os testes | "100 usuários fictícios para teste de carga" |

---

## 💡 Exemplo Prático de Caso de Teste (Login)

### CT001 - Login com Credenciais Válidas

**Objetivo:** Validar login com credenciais corretas.

**Pré-condições:**
- Usuário já cadastrado no sistema
- Sistema disponível e acessível

**Passos:**
1. Acessar tela de login
2. Inserir usuário válido: `joao.silva@email.com`
3. Inserir senha válida: `Senha@123`
4. Clicar em "Entrar"

**Resultado esperado:** 
- ✅ Usuário acessa o sistema com sucesso
- ✅ Redirecionado para a página inicial/dashboard
- ✅ Mensagem de boas-vindas exibida: "Bem-vindo, João!"

**Pós-condições:**
- Sessão do usuário iniciada
- Log de acesso registrado no sistema

---

### CT002 - Login com Credenciais Inválidas

**Objetivo:** Validar bloqueio de acesso com dados incorretos.

**Passos:**
1. Acessar tela de login
2. Inserir usuário: `joao.silva@email.com`
3. Inserir senha: `senha_errada`
4. Clicar em "Entrar"

**Resultado esperado:**
- ❌ Usuário NÃO acessa o sistema
- ⚠️ Mensagem de erro exibida: "Usuário ou senha inválidos"
- 🔒 Permanece na tela de login

---

## 🧪 Tipos de Testes (Visão Geral)

Na prática, existem vários tipos de testes. Vamos só dar uma passada rápida hoje (os detalhes ficam para próximas aulas):

### Classificação por Escopo

| Tipo | Descrição | Exemplo | Ferramentas |
|------|-----------|---------|-------------|
| **Testes de Unidade 🔬** | Validam pequenas partes do código, como funções e métodos | Testar função `calcularFrete()` | JUnit, pytest, Jest |
| **Testes de Integração 🔗** | Checam se módulos diferentes trabalham bem juntos | Testar comunicação entre API e banco de dados | TestContainers, Supertest |
| **Testes Funcionais ⚙️** | Validam se o sistema atende aos requisitos | Testar fluxo completo de compra | Cypress, Selenium |
| **Testes de Sistema 🖥️** | Testam o sistema como um todo | Testar aplicação completa em ambiente similar ao real | Playwright, Robot Framework |
| **Testes de Aceitação 👥** | Validam se o cliente aprova o sistema | Homologação com usuário real | UAT (User Acceptance Testing) |

### Classificação por Conhecimento

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Testes de Caixa Branca 📖** | Olham para dentro do código (estrutura) | Testar todos os caminhos possíveis de um `if` |
| **Testes de Caixa Preta 🕵️** | Olham só o comportamento externo (entrada/saída) | Testar se ao digitar CEP, o endereço aparece |

---

## 🎯 Outros Tipos Importantes

| Tipo de Teste | Pra que serve? | Exemplo rápido |
|---------------|-----------------|----------------|
| **Regressão 🔁** | Garantir que mudanças não quebraram o que já funcionava | Rodar todos os testes antigos após nova funcionalidade |
| **Performance 🚀** | Avaliar velocidade e estabilidade | Quantos usuários simultâneos o sistema aguenta? |
| **Carga 📈** | Comportamento sob uso intenso | 10.000 acessos por minuto |
| **Estresse 💥** | Até onde o sistema aguenta antes de cair | Aumentar usuários até o servidor cair |
| **Segurança 🔒** | Encontrar vulnerabilidades | Testar se dá pra invadir com SQL Injection |
| **Usabilidade 👍** | Experiência do usuário | O botão de comprar é fácil de encontrar? |
| **Acessibilidade ♿** | Funciona para pessoas com deficiência | Leitor de tela consegue navegar? |
| **Mobile 📱** | Específico para dispositivos móveis | App roda bem em iPhone e Android? |

---

## 📌 Recapitulando

✅ **Testar** = garantir qualidade e reduzir riscos

✅ **Documentos de teste** ajudam a organizar o processo:
- Plano de Teste: O QUE testar
- Casos de Teste: COMO testar
- Relatórios: RESULTADOS dos testes

✅ **Já existem diferentes tipos de teste**, mas hoje só conhecemos a visão geral:
- Por escopo: Unidade, Integração, Funcional, Sistema
- Por conhecimento: Caixa Branca, Caixa Preta
- Por objetivo: Regressão, Performance, Segurança, etc.

---

## 🏠 Atividade para Fixar

📌 **Imagine que você está testando um aplicativo de delivery 📱🍕**

### Desafio:
Crie um caso de teste simples para verificar o cadastro de usuário.

**Complete a estrutura:**
