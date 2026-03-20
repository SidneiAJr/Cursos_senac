# 🔧 Guia: Criando um Backend com Node.js + .env

## 📁 Estrutura de Pastas (baseada no seu projeto)

```bash
📦 seu-projeto
├── config
├── controllers
├── errors
├── middlewares
├── models
├── repositories
├── routes
├── services
├── .env
├── .gitignore
├── package.json
├── server.js
```


---

## 🧠 1. O que é .env?

Arquivo que armazena **variáveis de ambiente**:
- Porta do servidor
- Senha do banco de dados
- Chaves de API
- Tokens secretos

**Nunca suba pro GitHub!** Use `.gitignore`.

---

## ⚙️ 2. Criando o arquivo `.env`

Na raiz do projeto:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=123456
JWT_SECRET=minhachavesecreta
API_KEY=abc123def456
```


---

## 📦 3. Instalando a dependência

```bash
npm install dotenv
npm install express dotenv mysql2 cors
npm install -D typescript @types/node @types/express @types/mysql2 @types/cors ts-node nodemon
npm install express dotenv mysql2 cors && npm install -D typescript @types/node @types/express @types/mysql2 @types/cors ts-node nodemon
npx tsc --init
```

## 4. .gitignore
```bash
# Dependências
node_modules/

# Arquivos de ambiente
.env
.env.local
.env.production

# Logs
*.log
```

## 5. Ajustar tsconfig.json

```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```



