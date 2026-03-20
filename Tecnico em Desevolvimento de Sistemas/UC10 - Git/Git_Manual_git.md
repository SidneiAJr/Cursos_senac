# 📘 Manual de Git | Nível 1 + 2 + 3 + Workflows Modernos

Documento unificado cobrindo:

* 🟢 Nível 1 — Básico
* 🟡 Nível 2 — Intermediário
* 🔵 Nível 3 — Profissional
* 🔄 Workflows Modernos

---

# 🟢 NÍVEL 1 — FUNDAMENTOS DO GIT

## 🔹 Criar Repositório

```bash
git init
```

## 🔹 Clonar Repositório

```bash
git clone <url>
```

## 🔹 Ver Status

```bash
git status
```

## 🔹 Adicionar Arquivos (Stage)

```bash
git add .
```

Adicionar arquivo específico:

```bash
git add arquivo.txt
```

## 🔹 Commit

```bash
git commit -m "mensagem"
```

## 🔹 Enviar para o Remoto

```bash
git push origin main
```

Primeiro push:

```bash
git push -u origin main
```

## 🔹 Atualizar Repositório Local

```bash
git pull origin main
```

## 🔹 Trabalhar com Branches

Criar branch:

```bash
git branch nova-branch
```

Criar e já entrar:

```bash
git checkout -b nova-branch
```

Trocar branch:

```bash
git switch nome-da-branch
```

---

# 🟡 NÍVEL 2 — INTERMEDIÁRIO

## 🔀 Merge

```bash
git merge nome-da-branch
```

Resolver conflito:

1. Editar arquivos
2. `git add .`
3. `git commit`

---

## 📜 Histórico

```bash
git log
```

Modo resumido:

```bash
git log --oneline
```

---

## 🔎 Ver Diferenças

```bash
git diff
```

---

## 🏷️ Tags (Versionamento)

Criar tag:

```bash
git tag 1.0.0
```

Tag anotada:

```bash
git tag -a 1.0.0 -m "versão 1.0.0"
```

Enviar tags:

```bash
git push origin --tags
```

---

## 🧹 Remover Arquivos

```bash
git rm arquivo.txt
```

---

# 🔵 NÍVEL 3 — PROFISSIONAL

## 🗂️ Stash (Salvar Trabalho Temporário)

Salvar alterações:

```bash
git stash
```

Listar:

```bash
git stash list
```

Restaurar:

```bash
git stash pop
```

---

## 🔄 Rebase

Atualizar branch com base na main:

```bash
git rebase main
```

Rebase interativo:

```bash
git rebase -i HEAD~3
```

Diferença:

* `merge` mantém histórico ramificado
* `rebase` cria histórico linear

---

## ⚠️ Reset vs Revert

### Reset (altera histórico)

Soft (mantém alterações):

```bash
git reset --soft HEAD~1
```

Hard (apaga tudo):

```bash
git reset --hard HEAD~1
```

### Revert (seguro em equipe)

```bash
git revert <hash>
```

---

## 🔐 Boas Práticas Profissionais

* Nunca commitar direto na main
* Commits atômicos
* Usar branches para features
* Mensagens padronizadas
* Sempre dar pull antes de push

---

# 🔄 WORKFLOWS MODERNOS

## 1️⃣ Git Flow

Estrutura:

* main (produção)
* develop (integração)
* feature/*
* release/*
* hotfix/*

Ideal para projetos grandes e versionados.

---

## 2️⃣ GitHub Flow

Fluxo simples:

1. Criar branch a partir da main
2. Fazer commits
3. Abrir Pull Request
4. Revisão
5. Merge na main

Indicado para deploy contínuo.

---

## 3️⃣ Trunk Based Development

* Trabalhar sempre próximo da main
* Branches curtas
* Integração frequente
* Uso de Feature Flags

Muito usado em times modernos com CI/CD forte.

---

# 🎯 Conclusão

Com esses níveis você domina:

* Controle de versão completo
* Trabalho em equipe
* Histórico organizado
* Estratégias profissionais
* Workflows modernos

Esse canvas cobre do básico ao profissional em um único documento estruturado.
