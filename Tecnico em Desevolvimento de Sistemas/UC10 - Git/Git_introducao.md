# 🗣️ Introdução ao Git | Início em 18/02/2026

Documento organizado para estudo inicial de Git — versão completa para base sólida.

---

# 📌 1. O que é Git?

Git é um sistema de controle de versão distribuído.

Ele permite:

* ✅ Controlar versões do código
* ✅ Trabalhar em equipe
* ✅ Criar ramificações (branches)
* ✅ Voltar para versões anteriores
* ✅ Integrar com plataformas como GitHub, GitLab, Bitbucket

---

# 🔽 2. Clonando Repositório

Baixa um projeto remoto para sua máquina.

```bash
git clone <url-do-repositorio>
```

Exemplo:

```bash
git clone https://github.com/usuario/projeto.git
```

Isso cria uma pasta com todos os arquivos + histórico completo.

---

# ➕ 3. Adicionando Arquivos (Stage)

Coloca as alterações na "área de preparação" (staging area).

Adicionar tudo:

```bash
git add .
```

Adicionar todos os arquivos modificados/deletados:

```bash
git add --all
```

Adicionar arquivo específico:

```bash
git add nome-do-arquivo
```

---

# ✅ 4. Commitando Alterações

Salva as alterações no histórico do Git.

```bash
git commit -m "Descrição da alteração"
```

Exemplo:

```bash
git commit -m "feat: adiciona tela de login"
```

Boa prática:

* Mensagens claras
* Um commit por mudança lógica

---

# 🚀 5. Enviando para o Repositório Remoto

Envia commits locais para o servidor.

```bash
git push origin main
```

Se for o primeiro push da branch:

```bash
git push -u origin main
```

---

# 📊 6. Verificando Status

Mostra:

* Arquivos modificados
* Arquivos no stage
* Arquivos não rastreados

```bash
git status
```

---

# 📜 7. Histórico de Commits

```bash
git log
```

Modo resumido:

```bash
git log --oneline
```

Sair do log: pressione `q`

---

# 🌿 8. Trabalhando com Branches

## 📍 Listar branches

```bash
git branch
```

## ➕ Criar nova branch

```bash
git branch nome-da-branch
```

## 🔀 Criar e já entrar na branch

```bash
git checkout -b nome-da-branch
```

ou (modo moderno):

```bash
git switch -c nome-da-branch
```

## 🔄 Trocar de branch

```bash
git checkout nome-da-branch
```

ou

```bash
git switch nome-da-branch
```

---

# 🔀 9. Fazendo Merge (Unindo Branches)

Estando na branch de destino:

```bash
git merge nome-da-branch
```

Exemplo:

```bash
git checkout main
git merge feature/login
```

---

# 🔄 10. Atualizando Repositório Local (Trabalho em Equipe)

Baixa alterações do remoto e já faz merge.

```bash
git pull origin nome-da-branch
```

Separado (mais controle):

```bash
git fetch
git merge
```

---

# 🧹 11. Removendo Arquivos

Remover arquivo do Git e do sistema:

```bash
git rm nome-do-arquivo
```

---

# 🏷️ 12. Trabalhando com Tags

Criar tag:

```bash
git tag 1.0.0
```

Criar tag anotada:

```bash
git tag -a 1.0.0 -m "versão 1.0.0"
```

Enviar tags:

```bash
git push origin --tags
```

---

# 🔎 13. Ver Diferenças

Ver alterações antes do commit:

```bash
git diff
```

---

# 🧠 14. Fluxo Básico do Git

Fluxo mais comum no dia a dia:

```bash
git add .
git commit -m "mensagem"
git push origin main
```

---

# 📦 15. Fluxo Completo do Zero

```bash
git init
git add .
git commit -m "chore: projeto inicial"
git branch -M main
git remote add origin <url>
git push -u origin main
```

---

# ⚠️ 16. Erros Comuns

## ❌ Nothing to commit

Nada foi alterado.

## ❌ Rejected (non-fast-forward)

Precisa atualizar antes:

```bash
git pull origin main
```

## ❌ Merge conflict

Resolver manualmente os arquivos conflitantes, depois:

```bash
git add .
git commit
```

---

# 🎯 Conclusão

Com esses comandos você já consegue:

* Criar repositórios
* Trabalhar com branches
* Versionar corretamente
* Trabalhar em equipe
* Publicar projetos no GitHub

Esse documento serve como base sólida para evoluir para:

* Git Flow
* Conventional Commits
* Versionamento Semântico
* CI/CD

---

📚 Guia completo para estudo inicial e intermediário de Git.
