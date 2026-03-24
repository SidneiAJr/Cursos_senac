# 📚 Documentação | Testes

Iniciar Projeto com npm init -y

## 🔧 Comandos para Instalar Dependências

```bash
# Instala dependências principais
npm install mysql2 cors express

# Instala dependências de desenvolvimento (testes)
npm install --save-dev jest

# Iniciar npx tsc
npx tsc --init

# depencia:
npm install --save-dev jest ts-jest @types/jest typescript

# Iniciar o Jest Test
npx ts-jest config:init


```

## Criar Arquivos | Pastas:

```bash
# Criar Pasta Mãe:
Pasta src/
# Pasta config
arquivo: database.ts
# Arquivo de Servidor TS | Forda config
arquivo: server.ts
# Arquivo env-config.ts
env-config.ts
```

## Configuração Tsconfig:

```ts
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Configuração do Json:

```bash
{
  "name": "d",
  "version": "1.0.0",
  "main": "server.ts",
  "scripts": {
    "dev": "nodemon --exec ts-node server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "mysql2": "^3.20.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^22.0.0",
    "jest": "^30.3.0",
    "nodemon": "^3.1.14",
    "ts-jest": "^29.4.6",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  }
}
```
