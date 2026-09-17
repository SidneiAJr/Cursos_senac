# Git — do zero ao "que merda fiz agora?"

## Configuração inicial (uma vez só)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
git config --global init.defaultBranch main
```

---

## Começando um projeto

```bash
# Novo repositório local
git init

# Clonar repositório existente
git clone https://github.com/usuario/repo.git
git clone https://github.com/usuario/repo.git pasta-destino
```

---

## Fluxo do dia a dia

```bash
# Ver status do que mudou
git status

# Ver diferenças antes de adicionar
git diff
git diff arquivo.txt

# Adicionar arquivos para o próximo commit
git add arquivo.txt          # arquivo específico
git add .                    # tudo de uma vez
git add pasta/               # uma pasta inteira

# Fazer o commit
git commit -m "mensagem descrevendo o que mudou"

# Atalho: add + commit de arquivos já rastreados
git commit -am "mensagem"

# Ver histórico
git log
git log --oneline            # versão resumida
git log --oneline --graph    # com grafo de branches
```

---

## Trabalhando com remoto (GitHub, GitLab...)

```bash
# Adicionar remoto
git remote add origin https://github.com/usuario/repo.git

# Ver remotos configurados
git remote -v

# Enviar para o remoto
git push origin main
git push -u origin main      # -u salva como padrão (só precisa na primeira vez)
git push                     # depois do -u, basta isso

# Baixar mudanças do remoto
git pull
git pull origin main
```

---

## Branches

```bash
# Listar branches
git branch                   # locais
git branch -a                # locais + remotas

# Criar e trocar de branch
git switch -c nome-da-branch         # jeito moderno (Git 2.23+)
git checkout -b nome-da-branch       # jeito antigo (ainda funciona)

# Trocar de branch existente
git switch main
git checkout main

# Deletar branch
git branch -d nome-da-branch         # seguro (só deleta se já fez merge)
git branch -D nome-da-branch         # força deletar mesmo sem merge

# Merge: traz mudanças de uma branch pra atual
git merge nome-da-branch
```

---

## 🆘 Revertendo merda

### "Ainda não fiz commit, quero desfazer as mudanças no arquivo"
```bash
git restore arquivo.txt              # descarta mudanças no working directory
git restore .                        # descarta TUDO (cuidado!)
```

### "Fiz git add mas não commitei, quero tirar do stage"
```bash
git restore --staged arquivo.txt
git restore --staged .
```

### "Commitei errado, quero mudar a mensagem do último commit"
```bash
git commit --amend -m "mensagem corrigida"
# Só faça isso se ainda não fez push!
```

### "Commitei errado, quero adicionar um arquivo esquecido no último commit"
```bash
git add arquivo-esquecido.txt
git commit --amend --no-edit
# Só faça isso se ainda não fez push!
```

### "Quero desfazer o último commit mas manter as mudanças"
```bash
git reset --soft HEAD~1
# Os arquivos voltam pro stage, prontos pra commitar de novo
```

### "Quero desfazer o último commit e tirar do stage também"
```bash
git reset HEAD~1
# ou
git reset --mixed HEAD~1
# Mudanças ficam no working directory mas fora do stage
```

### "Quero APAGAR o último commit e as mudanças junto (sem volta)"
```bash
git reset --hard HEAD~1
# ⚠️ PERIGO: apaga as mudanças permanentemente
```

### "Quero desfazer N commits atrás"
```bash
git reset --soft HEAD~3    # volta 3 commits, mantém mudanças no stage
git reset --hard HEAD~3    # apaga os últimos 3 commits e as mudanças
```

### "Já fiz push e quero desfazer sem reescrever histórico (jeito seguro)"
```bash
git revert HEAD            # cria um commit novo que desfaz o último
git revert abc1234         # desfaz um commit específico pelo hash
```

### "Quero voltar um arquivo pra como estava em um commit específico"
```bash
git log --oneline                        # pega o hash do commit
git restore --source abc1234 arquivo.txt
```

### "Stash: guardei mudanças sem querer ou preciso pausar o trabalho"
```bash
git stash                  # guarda mudanças temporariamente
git stash list             # lista o que tem guardado
git stash pop              # restaura o último stash e remove da lista
git stash apply            # restaura sem remover da lista
git stash drop             # descarta o último stash
```

---

## Referências rápidas

| Símbolo | Significado |
|---------|-------------|
| `HEAD` | commit atual (onde você está) |
| `HEAD~1` | um commit antes do atual |
| `HEAD~N` | N commits antes |
| `abc1234` | hash de um commit específico |

---

## Fluxo resumido típico

```
git pull                    # pega o que tem de novo
git switch -c minha-feature # cria branch pra trabalhar
# ... edita arquivos ...
git add .
git commit -m "feat: adiciona X"
git push -u origin minha-feature
# abre PR/MR no GitHub/GitLab
```
