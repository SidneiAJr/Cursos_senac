# O que é o JWT? O que significa? Onde ele vive? Do que se alimenta? Descubra hoje no Globo Repórter.

JWT significa **JSON Web Token**. Ele é um código gerado e salvo no navegador que, entre outras coisas, guarda as informações de um usuário (exemplo: `{ id: 1, email: "Sid Moreira" }`).

## Como ele se parece?

Ele se parece com isso aqui:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbGljZUBtYWlsLmNvbSJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

## Para que ele serve?

Ele serve para guardar informações de qual usuário está logado. Assim, nós podemos fazer requisições (por exemplo, criar um post) sem precisar que o usuário faça login novamente toda vez. Também podemos garantir que um usuário crie, atualize e delete posts apenas para si mesmo ou veja apenas as suas informações, e não as de outros usuários.

Por exemplo, vamos pensar no funcionamento de uma rede social. Imagine que você acessa o Instagram e quer criar um post. Você primeiro precisa ter uma conta e fazer login com ela. Nós usamos o JWT justamente para isso: manter o usuário autenticado após o login.

Outra vantagem é que você só consegue criar, editar ou deletar os seus próprios posts. Não há como criar, editar ou deletar, por exemplo, o post de outro usuário. O JWT também ajuda a garantir isso, pois ele informa qual é o ID do usuário que está autenticado. Dessa forma, o sistema consegue verificar se aquele usuário realmente é o dono do post antes de permitir qualquer alteração.

## Como o JWT é dividido?

O token em si é dividido em três partes. As mais importantes para nós são as duas últimas: o **Payload** e a **Signature**.

O **Payload** é a parte do meio. É ali que ficam armazenadas informações como o ID e o e-mail do usuário.

A **Signature** é a terceira parte. Nela fica armazenada uma assinatura gerada utilizando um **segredo** (_secret_), que é um código exclusivo de cada sistema. Ela garante que aquele token pertence ao sistema e que não foi alterado. Se o conteúdo do token for modificado, a assinatura deixa de ser válida e o token é invalidado. Isso evita que uma pessoa altere um token ou tente utilizar um token falso em nosso sistema.

# Como utilizar no nosso projeto? Vamos lá!

## PASSO 1 - Primeiro, é preciso instalar as dependências.

```bash
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

## PASSO 2 - Para usarmos o JWT, agora vamos criar um arquivo chamado `jwt.ts` dentro da pasta `utils`.

Dentro desse arquivo, precisamos:

#### 2.1 - Importar tudo o que é necessário: o JWT e o dotenv (pois teremos variáveis importantes nele).

```ts
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
```

#### 2.2 - Precisamos carregar as variáveis do arquivo `.env` para o objeto `process.env` (é ele quem nos fornece os valores depois).

```ts
dotenv.config(); // Sem isso aqui, não temos acesso às variáveis do .env.

// Pegamos então as variáveis do .env.
// Use sempre os mesmos nomes das variáveis definidas no arquivo .env.
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
```

#### 2.3 - No arquivo `.env`, precisamos ter as variáveis correspondentes.

```ts
DB_HOST = localhost;
DB_PORT = 3306;
DB_USER = root;
DB_PWD = root;
DB_NAME = rede_social;

PORT = 3000;

// Estas são as novas variáveis de ambiente.
JWT_SECRET = chaveSecreta123; // Serve para converter depois na assinatura do token (Signature).
JWT_EXPIRES_IN = 86400; // Identifica por quanto tempo o token é válido (nesse caso, um dia = 86400 segundos).
```

#### 2.4 - Voltando ao arquivo `jwt.ts`, vamos criar uma interface chamada `Payload` para representar o que esperamos que nosso token receba.

```ts
interface Payload {
  id: number;
  email: string;
}
```

#### 2.5 - Agora vamos criar o método que gera o novo token. Geralmente, chamamos esse método dentro de uma função de login.

```ts
// Nunca esqueça do export, ou não poderemos usar essa função em outros arquivos.
// Nosso método recebe por parâmetro um objeto que deve ter id e email (por causa da nossa interface).

// O método sign da biblioteca JWT gera um token.
// Precisamos passar como argumentos:
/*
1 - As informações do usuário, que vêm do payload.
2 - O segredo (JWT_SECRET).
3 - Um objeto contendo a opção "expiresIn", cujo valor será a variável JWT_EXPIRES_IN do arquivo .env.

Se no .env estiver algo como "JWT_EXPIRES_IN = 86400", no sign() você precisa chamá-lo dentro de Number() para convertê-lo de string para número.
*/

export function generateToken(payload: Payload) {
  return jwt.sign(payload, JWT_SECRET!, {
    expiresIn: Number(JWT_EXPIRES_IN),
  });
}

// O argumento JWT_SECRET possui um "!" no final porque o TypeScript considera
// que essa variável pode ser undefined. Ao colocar o ponto de exclamação,
// é como se disséssemos: "tem sim, confia no pai".
```

#### 2.6 - Criamos a função que gera o token. Agora vamos criar a função que analisa se ele é válido ou não.

```ts
export function verifyToken(token: string) {
  try {
    // Chamamos a função verify() da biblioteca JWT para fazer a verificação.
    // O primeiro argumento é o próprio token.
    // O segundo é o JWT_SECRET.
    // Se o token for válido, a função retorna as informações do usuário.

    return jwt.verify(token, JWT_SECRET!);
  } catch {
    return null;
  }
}
```

### EXTRA: Se quiser testar, no mesmo arquivo você pode chamar os dois métodos: primeiro o `generateToken()` e depois o `verifyToken()`.

```ts
const token = generateToken({ id: 3, email: "gabi123@gmail.com" });
console.log(token);

const valido = verifyToken(token);
console.log(valido);

// Se for válido, mostra as informações do usuário.
```

**Obs.:** No exemplo acima, passamos a variável `token` para o `verifyToken()`. Se você passar uma string vazia (`""`), a função retornará `null`, pois não haverá um token válido para verificar.

Depois, rode o comando no terminal:

```bash
ts-node-dev src/utils/jwt.ts
```

## PASSO 3 - Se não tivermos uma função que procura por e-mail no `UserRepository`, precisamos criá-la. Se já existir, podemos pular esta etapa. Vá até o `UserRepository` e adicione a seguinte função:

```ts
async findByEmail(email: string) {
  return repo.findOne({ where: { email } });
},
```

## PASSO 4 - Na camada Service, vamos precisar adicionar mais algumas coisas.

#### 4.1 - Adicionar uma extensão da classe `Error`, que vamos chamar de `UnauthorizedError` (_Unauthorized = Não autorizado_). Adicione a seguinte linha no `UserService.ts`:

```ts
// Não é obrigatório criar essa classe filha de Error. Porém, ao fazermos isso,
// quando esse erro for lançado, sabemos exatamente do que se trata.
export class UnauthorizedError extends Error {}
```

#### 4.2 - Vamos adicionar o método de login no `UserService.ts`. Esse método vai receber um e-mail e uma senha, validar se o e-mail existe usando `UserRepository.findByEmail()`, que criamos há pouco, depois validar, através do método `bcrypt.compare()`, se a senha informada corresponde à senha criptografada no banco. Se tudo estiver correto, aí sim ele gera um token chamando o método `generateToken()` que criamos anteriormente.

Então, no arquivo `UserService.ts`, crie:

```ts
// Recebe o e-mail e a senha como parâmetros.
async login(data: { email: string; password: string }) {
  // Verificamos se o e-mail existe.
  // Precisamos do await, já que o método findByEmail() é assíncrono
  // (ele precisa de um tempo para buscar as informações no banco).

  const user = await UserRepository.findByEmail(data.email);

}
```

## PASSO 5 - Agora, depois da camada **Service**, vamos para a camada **Controller**, onde vamos criar um arquivo chamado `AuthController.ts`. Ele ficará responsável pela parte de login.

## 5.1 - Os imports

```ts
import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";
```

## 5.2 - O método de login

```ts
export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // Pegamos o e-mail e a senha enviados pelo body da requisição.
      const { email, password } = req.body;

      // Chamamos o método de login da camada Service.
      const result = await UserService.login({ email, password });

      // Se tudo der certo, retornamos o resultado.
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
```

## PASSO 6 - Agora, precisamos criar as rotas de autenticação. Porém, ao contrário do que fazíamos antes, não vamos colocar todas as rotas em um único arquivo. Vamos separá-las entre: rotas de autenticação (**Auth**), rotas de usuários (**User**), rotas de posts (**Post**) e um arquivo principal que reunirá todas elas.

### 6.1 - Dentro da pasta `routes`, crie um arquivo chamado `auth.routes.ts`.

Dentro dele, faça os imports:

```ts
import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
```

### 6.2 - Crie o objeto `router` e uma instância do `AuthController`.

```ts
const router = Router();
const authController = new AuthController();
```

### 6.3 - Agora, vamos criar a rota de login.

Essa rota receberá uma requisição do tipo **POST** para `/login`. Quando ela for chamada, executará o método `login()` do `AuthController`.

```ts
router.post("/login", authController.login.bind(authController));
```

### 6.4 - Por fim, exporte o `router` para que ele possa ser utilizado em outros arquivos.

```ts
export default router;
```

O arquivo `auth.routes.ts` ficará assim:

```ts
import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login.bind(authController));

export default router;
```
