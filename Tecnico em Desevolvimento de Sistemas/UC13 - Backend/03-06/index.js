// 1. FUNÇÃO DE REQUISIÇÃO (só chama a API)
async function buscarPokemon(identificador) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${identificador}`);
    if (!resposta.ok) throw new Error("Não encontrado");
    return await resposta.json();
}

// 2. EXTRAI DADOS DO JOGADOR
function criarPokemonJogador(dadosApi) {
    return {
        nome: dadosApi.name,
        nivel: Math.floor(dadosApi.base_experience / 10) + 1,
        hpMax: dadosApi.stats[0].base_stat,
        hpAtual: dadosApi.stats[0].base_stat,
        imagem: dadosApi.sprites.back_default,
        golpes: dadosApi.moves.slice(0, 4).map(m => m.move.name),
        ataque: dadosApi.stats[1].base_stat,
        defesa: dadosApi.stats[2].base_stat
    };
}

// 3. CRIA ADVERSÁRIO ALEATÓRIO
async function criarPokemonAdversario() {
    const idAleatorio = Math.floor(Math.random() * 151) + 1;
    const dados = await buscarPokemon(idAleatorio);
    return {
        nome: dados.name,
        nivel: Math.floor(dados.base_experience / 10) + 1,
        hpMax: dados.stats[0].base_stat,
        hpAtual: dados.stats[0].base_stat,
        imagem: dados.sprites.front_default,
        ataque: dados.stats[1].base_stat,
        defesa: dados.stats[2].base_stat
    };
}

// 4. LÓGICA DE ATAQUE
function atacar(atacante, defensor, nomeGolpe) {
    // Dano simplificado mas funcional
    const dano = Math.floor((atacante.ataque / defensor.defesa) * 10) + 5;
    const novoHp = Math.max(0, defensor.hpAtual - dano);
    
    let mensagem = `${atacante.nome} usou ${nomeGolpe} e causou ${dano} de dano!`;
    
    if (novoHp === 0) {
        mensagem += ` ${defensor.nome} desmaiou!`;
    }
    
    return { novoHp, mensagem };
}

// 5. ATUALIZA A TELA
function atualizarInterface(jogador, adversario, mensagem) {
    document.getElementById("nomeJogador").textContent = `${jogador.nome} (Nv. ${jogador.nivel})`;
    document.getElementById("nomeAdversario").textContent = `${adversario.nome} (Nv. ${adversario.nivel})`;
    
    document.getElementById("imgJogador").src = jogador.imagem;
    document.getElementById("imgAdversario").src = adversario.imagem;
    
    const hpPorcentagemJog = (jogador.hpAtual / jogador.hpMax) * 100;
    const hpPorcentagemAdv = (adversario.hpAtual / adversario.hpMax) * 100;
    
    document.getElementById("hpJogador").style.width = `${hpPorcentagemJog}%`;
    document.getElementById("hpAdversario").style.width = `${hpPorcentagemAdv}%`;
    
    if (mensagem) {
        const dialog = document.getElementById("caixaDialogo");
        dialog.innerHTML += `<p>${mensagem}</p>`;
        dialog.scrollTop = dialog.scrollHeight;
    }
}

// 6. FUNÇÃO PRINCIPAL QUE AMARRA TUDO
async function iniciarBatalha(nomePokemonJogador) {
    try {
        const dadosJogador = await buscarPokemon(nomePokemonJogador);
        const jogador = criarPokemonJogador(dadosJogador);
        const adversario = await criarPokemonAdversario();
        
        // Cria os botões de golpe
        const menu = document.getElementById("menuGolpes");
        menu.innerHTML = "";
        jogador.golpes.forEach(golpe => {
            const btn = document.createElement("button");
            btn.textContent = golpe.toUpperCase();
            btn.onclick = () => {
                const resultado = atacar(jogador, adversario, golpe);
                adversario.hpAtual = resultado.novoHp;
                atualizarInterface(jogador, adversario, resultado.mensagem);
                
                // Vez do adversário (simplificado)
                if (adversario.hpAtual > 0) {
                    const contraGolpe = atacar(adversario, jogador, "ataque rápido");
                    jogador.hpAtual = contraGolpe.novoHp;
                    atualizarInterface(jogador, adversario, contraGolpe.mensagem);
                }
            };
            menu.appendChild(btn);
        });
        
        atualizarInterface(jogador, adversario, "Batalha começou! Escolha um golpe!");
        
    } catch (erro) {
        console.error("Deu ruim:", erro);
        alert("Pokémon não encontrado!");
    }
}
