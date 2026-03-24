# 📚 Documentação | Testes

## 🔧 Comandos para Instalar Dependências

```bash
# Instala dependências principais
npm install mysql2 cors express

# Instala dependências de desenvolvimento (testes)
npm install --save-dev jest
```

## Criar Arquivoz | Pastas:

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
