# 🚀 Guia GitHub | Iniciando Repositório Remoto + Local

---

## 📁 Criar Projeto Local

### 1️⃣ Criar a pasta do projeto

```bash
mkdir meu-projeto
```

### 2️⃣ Entrar na pasta

```bash
cd meu-projeto
```

### 3️⃣ Iniciar o Git na pasta

```bash
git init
```

---

# 🌐 Criar o Repositório no Servidor (GitHub, GitLab, etc.)

1. Acesse o site (ex: github.com)
2. Clique em **"New repository"**
3. Escolha um nome (pode ser igual ao da pasta)
4. ⚠️ **NÃO marque "Add a README"** (evita conflito)
5. Crie o repositório vazio

---

# 🔗 Conectar Local com Remoto

### Adicionar o endereço do repositório remoto

```bash
git remote add origin https://github.com/seu-usuario/meu-projeto.git
```

---

# 🔁 Renomear Branch (master → main, se necessário)

```bash
git branch -M main
```

---

# 📤 Criar Primeiro Arquivo e Enviar

### Criar um arquivo (ex: README.md)

```bash
echo "# Meu Projeto" > README.md
```

### Adicionar ao Git

```bash
git add README.md
```

### Fazer o primeiro commit

```bash
git commit -m "first commit"
```

### Enviar para o GitHub

```bash
git push -u origin main
```

---

# 🧠 Resumo (Modo Decoreba)

| Passo | Comando                   | O que faz                 |
| ----- | ------------------------- | ------------------------- |
| 1     | git init                  | Inicia Git local          |
| 2     | (site)                    | Cria repo vazio no GitHub |
| 3     | git remote add origin ... | Liga local com remoto     |
| 4     | git branch -M main        | Renomeia branch           |
| 5     | git add . + git commit    | Prepara arquivos          |
| 6     | git push -u origin main   | Envia para o GitHub       |

---

# 🔥 Erros Comuns (e Como Resolver)

| Erro                         | Motivo                | Solução                                          |
| ---------------------------- | --------------------- | ------------------------------------------------ |
| remote origin already exists | Já linkou antes       | git remote set-url origin ...                    |
| master e main diferentes     | Branch desalinhada    | git branch -M main                               |
| Push negado                  | Repo remoto não vazio | git pull origin main --allow-unrelated-histories |
| fatal: not a git repository  | Não rodou git init    | Rodar git init na pasta correta                  |

---

# ⚡ Bônus: Criar Alias para Iniciar Projeto Já com Main

```bash
git config --global alias.inicio '!git init && git branch -M main'
```

Depois disso, basta usar:

```bash
git inicio
```

---


