const url = "https://pokeapi.co/api/v2/pokemon"

async function procurarNome() {
    const nomePokemon = document.getElementById('nome').value.trim().toLowerCase()
    const idPokemon = document.getElementById('idPokemon').value.trim()

    const busca = idPokemon || nomePokemon;

    try {
        if (!busca) {
            alert("Digite o nome OU o ID do Pokémon")
            return
        }

        const resposta = await fetch(`${url}/${busca}`)
        if (!resposta.ok) throw new Error("Pokémon não encontrado")

        const dados = await resposta.json()
        const tipos = dados.types.map(t => t.type.name).join(", ")
        const img = dados.sprites.versions['generation-v']['black-white'].animated.front_default

        let saida = document.getElementById("img")
        saida.innerHTML = `
            <img src="${img}" id="pok"alt="${dados.name}"><br>
            <strong>ID Pokémon:</strong> ${dados.id}<br>
            <strong>Nome:</strong> ${dados.name}<br>
            <strong>Tipo:</strong> ${tipos}
        `

    } catch (erro) {
        alert("Pokémon não encontrado ⚠️")
        console.error(erro)
    }
}
