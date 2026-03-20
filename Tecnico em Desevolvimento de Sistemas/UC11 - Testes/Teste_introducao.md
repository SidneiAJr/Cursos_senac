# Introdução | Teste:

Introdução a teste em 11/03/26

## Tipos de teste:

### 1. Testes Unitários
- **O que é:** Teste da menor unidade de código (funções, métodos, classes)
- **Foco:** Isolamento, testar cada parte separadamente
- **Ferramentas comuns:** JUnit (Java), pytest (Python), Jest (JS)

### 2. Testes de Integração
- **O que é:** Testa a comunicação entre diferentes módulos ou serviços
- **Foco:** Garantir que as partes funcionem bem juntas (API, banco de dados)
- **Ferramentas comuns:** TestContainers, Supertest

### 3. Testes Funcionais (E2E)
- **O que é:** Testa o fluxo completo da aplicação, do início ao fim, como um usuário real
- **Foco:** Validar os requisitos de negócio e a experiência do usuário
- **Ferramentas comuns:** Cypress, Selenium, Playwright

### 4. Testes de Regressão
- **O que é:** Reexecutar testes antigos para garantir que novas funcionalidades não quebraram o que já existia
- **Foco:** Prevenir surpresas desagradáveis após mudanças no código

### 5. Testes de Performance
- **O que é:** Avaliar velocidade, responsividade e estabilidade da aplicação sob carga
- **Subtipos:**
  - **Carga:** Comportamento sob usuários simultâneos esperados
  - **Estresse:** Até onde o sistema aguenta até quebrar
- **Ferramentas comuns:** k6, JMeter

### 6. Testes de Aceitação (UAT)
- **O que é:** Validar se o software atende às necessidades do negócio/cliente
- **Foco:** "O produto certo foi construído?" (validação)
