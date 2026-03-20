# 🎹 Comandos para Realizar testes | Jest:

## Configuração de Teste:
- Criação de teste
- Comando para Iniciar test
- Biblioteca Necessaria pra baixar.

## 📦 Inicializar projeto

```bash
npm init -y
```

## 📦 Instalar dependências

```bash
npm install --save-dev jest ts-jest @types/jest typescript
```

## ⚙️ Configurar Jest

```bash
npm install --save-dev jest ts-jest @types/jest typescript
```

## Gerar Arquivo `jest.config.js`
```bash
npx ts-jest config:init
```

## Configuração dos `jest.config.js`
```bash
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[jt]s?(x)" // ← aqui aceita .tests.ts
  ],
};
```


## Configurar o TypeScript
```bash
npx tsc --init
```

## Configuração TS:
```bash
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "isolatedModules": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["./tests/", "./node_modules", "./dist"]
}
```

## ✅Comando para Testar | Resultado("Sem Erro"):

<img width="304" height="251" alt="image" src="https://github.com/user-attachments/assets/3447797c-a5db-4df6-b7c4-6be8968c5628" />

## ❌Comando para Testar | Resultado("Com Erro")

<img width="341" height="160" alt="image" src="https://github.com/user-attachments/assets/db316d5e-b328-4ca1-86cc-d491126a512b" />


## 📊 Principais comandos do Jest


| Comando           | Descrição                          | Exemplo                             |
|:-----------------:|:----------------------------------:|:-----------------------------------:|
| `describe()`      | Agrupa testes relacionados         | `describe("Calculadora", () => {})` |
| `test()` / `it()` | Define um caso de teste            | `test("deve somar", () => {})`      |
| `expect()`        | Inicia uma verificação             | `expect(valor)`                     |
| `toBe()`          | Compara valores primitivos (`===`) | `expect(2+2).toBe(4)`               |
| `toEqual()`       | Compara objetos/estruturas         | `expect(obj).toEqual({})`           |
| `toBeNull()`      | Verifica se é `null`               | `expect(valor).toBeNull()`          |
| `toBeUndefined()` | Verifica se é `undefined`          | `expect(valor).toBeUndefined()`     |
| `toBeTruthy()`    | Verifica se é “verdadeiro”         | `expect(valor).toBeTruthy()`        |
| `toBeFalsy()`     | Verifica se é “falso”              | `expect(valor).toBeFalsy()`         |
| `toThrow()`       | Verifica se lança erro             | `expect(fn).toThrow()`              |
| `beforeEach()`    | Executa antes de cada teste        | `beforeEach(() => {})`              |
| `afterEach()`     | Executa após cada teste            | `afterEach(() => {})`               |

## 📦 Estrutura de Testes

### describe()

O que faz: Agrupa vários testes relacionados em um bloco.

Por que usar: Organiza o código, melhora a legibilidade e permite rodar ou pular grupos inteiros.

---

### test() / it()

O que faz: Define um caso de teste individual.

Por que usar: É o coração do teste – cada test verifica uma funcionalidade específica.

---

### ✅ Matchers de Valor

#### expect()

O que faz: Inicia uma verificação. Todo teste começa com ele.

Por que usar: É a base para comparar resultados com o esperado.

---

#### toBe()

O que faz: Compara valores primitivos usando === (igualdade estrita).

Por que usar: Para números, strings, booleanos – é rápido e direto.

---

#### toEqual()

O que faz: Compara objetos e estruturas complexas (arrays, objetos) verificando se têm o mesmo conteúdo.

Por que usar: toBe não funciona para objetos, porque compara referências, não valores.

---

### 🧪 Matchers de Estado

#### toBeNull()

O que faz: Verifica se o valor é null.

Por que usar: Quando você espera que algo seja nulo.

---

#### toBeUndefined()

O que faz: Verifica se o valor é undefined.

Por que usar: Quando você espera que algo não tenha sido definido.

---

#### toBeTruthy()

O que faz: Verifica se o valor é considerado "verdadeiro" em JavaScript (diferente de false, 0, "", null, undefined, NaN).

Por que usar: Quando você quer garantir que algo existe ou é válido.

---

#### toBeFalsy()

O que faz: Verifica se o valor é considerado "falso" em JavaScript.

Por que usar: Quando você espera que algo seja inválido ou vazio.


