# 🌊 GIT FLOW + CONVENTIONAL COMMITS | CANVAS COMPLETO

---

## 📋 ÍNDICE

1. O que é Git Flow?
2. Estrutura de Branches
3. Conventional Commits
4. Fluxo Completo com Exemplos
5. Comandos Essenciais
6. Boas Práticas
7. Seu Caso Específico

---

# 🌊 1. O QUE É GIT FLOW?

É um modelo organizacional de branches no Git que:

* ✅ Organiza o desenvolvimento em fluxos paralelos
* ✅ Separa funcionalidades novas de código estável
* ✅ Facilita correções de emergência (hotfix)
* ✅ Permite trabalho em equipe sem conflitos
* ✅ Mantém a `main` sempre pronta para produção

---

# 🌳 2. ESTRUTURA DAS BRANCHES

```text
main (produção)
    ↑
    ├── hotfix/* (correção urgente)
    │
release/* (preparação de versão)
    ↑
develop (integração)
    ↑
    ├── feature/* (nova funcionalidade)
    ├── feature/* (outra funcionalidade)
    └── feature/* (mais uma...)
```

## 🎨 Cores e Significados

| Branch    | Tipo                    | Duração      | Base    | Merge em           |
| --------- | ----------------------- | ------------ | ------- | ------------------ |
| main      | Principal / Permanente  | Sempre       | -       | -                  |
| develop   | Integração / Permanente | Sempre       | main    | main (via release) |
| feature/* | Funcionalidade          | Dias/semanas | develop | develop            |
| release/* | Preparação              | Curta        | develop | main e develop     |
| hotfix/*  | Emergência              | Horas/dias   | main    | main e develop     |

---

# 📝 3. CONVENTIONAL COMMITS

## 🧠 Tipos de Commit

| Tipo     | Quando usar                             | Exemplo                         |
| -------- | --------------------------------------- | ------------------------------- |
| feat     | ✨ Nova funcionalidade                   | feat: adiciona tela de login    |
| fix      | 🐛 Correção de bug                      | fix: corrige validação de email |
| docs     | 📚 Mudanças na documentação             | docs: atualiza README           |
| style    | 💅 Formatação (espaços, pontuação)      | style: formata código CSS       |
| refactor | ♻️ Mudança que não altera comportamento | refactor: simplifica função     |
| test     | 🧪 Adicionar ou corrigir testes         | test: adiciona teste de cálculo |
| chore    | 🔧 Tarefas gerais                       | chore: atualiza dependências    |
| perf     | ⚡ Melhoria de performance               | perf: otimiza dashboard         |
| ci       | 👷 Configurações de CI/CD               | ci: configura pipeline          |
| revert   | ⏪ Reverte commit anterior               | revert: volta commit abc123     |

## 📐 Estrutura do Commit

```text
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Exemplos

```text
feat(auth): adiciona autenticação por Google

- Implementa OAuth2
- Adiciona botão de login
- Configura callback URL

Closes #123
```

```text
fix(calc): corrige divisão por zero

Adiciona validação para evitar erro quando denominador é zero
```

---

# 🔄 4. FLUXO COMPLETO COM EXEMPLOS

## 🚀 Iniciando o Projeto

```bash
git init
git checkout -b main
git commit -m "chore: inicializa projeto"

git checkout -b develop main
git push -u origin develop
```

---

## ✨ Desenvolvendo Features

```bash
git checkout -b feature/login develop

git add .
git commit -m "feat(login): cria estrutura básica"

git add .
git commit -m "feat(login): adiciona validação"

git add .
git commit -m "test(login): adiciona testes"

git checkout develop
git pull origin develop
git merge --no-ff feature/login -m "feat: integra login"
git branch -d feature/login
git push origin develop
```

---

## 📦 Preparando uma Release

```bash
git checkout -b release/1.0.0 develop

git add .
git commit -m "fix: ajustes finais"

git add .
git commit -m "docs: atualiza changelog"

git checkout main
git merge --no-ff release/1.0.0 -m "release: 1.0.0"
git tag -a 1.0.0 -m "versão 1.0.0"
git push origin main --tags

git checkout develop
git merge --no-ff release/1.0.0 -m "chore: integra release"
git branch -d release/1.0.0
git push origin develop
```

---

## 🚨 Hotfix (Correção Urgente)

```bash
git checkout -b hotfix/1.0.1 main

git add .
git commit -m "fix: corrige falha crítica"

git checkout main
git merge --no-ff hotfix/1.0.1 -m "hotfix: 1.0.1"
git tag -a 1.0.1 -m "versão 1.0.1"
git checkout develop
git merge --no-ff hotfix/1.0.1 -m "chore: integra hotfix"
git branch -d hotfix/1.0.1
```

---

# ⚡ 5. COMANDOS ESSENCIAIS (RESUMÃO)

## Branches Permanentes

```bash
git checkout -b develop main
git push -u origin develop
```

## Features

```bash
git checkout -b feature/nome develop
git commit -m "feat(nome): descrição"

git checkout develop
git merge --no-ff feature/nome -m "feat: integra nome"
git branch -d feature/nome
git push origin develop
```

## Releases

```bash
git checkout -b release/1.0.0 develop

git checkout main
git merge --no-ff release/1.0.0 -m "release: 1.0.0"
git tag -a 1.0.0 -m "versão 1.0.0"

git checkout develop
git merge --no-ff release/1.0.0 -m "chore: integra release"
git branch -d release/1.0.0
```

## Hotfixes

```bash
git checkout -b hotfix/1.0.1 main

git checkout main
git merge --no-ff hotfix/1.0.1 -m "hotfix: 1.0.1"
git tag -a 1.0.1 -m "versão 1.0.1"

git checkout develop
git merge --no-ff hotfix/1.0.1 -m "chore: integra hotfix"
git branch -d hotfix/1.0.1
```

---

# ✅ 6. BOAS PRÁTICAS

## 📌 Regras de Ouro

* ❌ Nunca commit direto na `main` ou `develop`
* ✅ Sempre use `feature/`, `release/` ou `hotfix/`
* ✅ Use `--no-ff` nos merges
* ✅ Commits atômicos (uma mudança lógica por commit)
* ✅ Mensagens claras e padronizadas
* ✅ Delete branches após merge
* ✅ Sempre sincronize (`git pull` antes, `git push` depois)

---

# 📊 7. SEU CASO ESPECÍFICO

| Sua Branch        | Tipo | Ação Recomendada           |
| ----------------- | ---- | -------------------------- |
| main              | 🟢   | Manter (produção)          |
| develop           | 🟡   | Manter (integração)        |
| feature/cadastro  | 🔵   | Merge na develop e deletar |
| feature/calc      | 🔵   | Unificar                   |
| feature/calc2     | 🔵   | Unificar                   |
| feature/calc3     | 🔵   | Unificar                   |
| feature/dashboard | 🔵   | Desenvolver e integrar     |
| feature/login     | 🔵   | Desenvolver e integrar     |

## 🎯 Sugestão

Unifique as três features de calculadora em:

```text
feature/calculadora
```

Isso evita bagunça e mantém o fluxo organizado.

---

📌 **Pronto!** Agora você tem um guia completo de Git Flow + Conventional Commits em Markdown.
