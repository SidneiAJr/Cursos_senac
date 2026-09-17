import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BotaoVoltar from './components/BotaoVoltar'
import BuscaInput from './components/Buscainput'
import CardPokemon from './components/CardPokemon'

export default function TelaListaPokemons() {
  const [pokemons, setPokemons] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [busca, setBusca] = useState('')
  const [pokemonSelecionado, setPokemonSelecionado] = useState<any>(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [pokemonDetalhes, setPokemonDetalhes] = useState<any>(null)

  const filtrados = pokemons.filter((item: any) =>
    item.name.includes(busca.toLowerCase())
  )

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=5000').then(resposta => {
      setPokemons(resposta.data.results)
      setCarregando(false)
    })
  }, [])

  function handlePokemonPress(item: any, detalhes: any) {
    setPokemonSelecionado(item)
    setPokemonDetalhes(detalhes)
    setModalAberto(true)
  }

  return (
    <View style={styles.container}>
      <BotaoVoltar />
      <View style={styles.container_img} />
      <Text style={styles.texto}>Pokedex</Text>
      <BuscaInput valor={busca} onChange={setBusca} />
      <FlatList
        data={filtrados}
        keyExtractor={(item: any) => item.name}
        renderItem={({ item }: any) => (
          <CardPokemon item={item} onPress={handlePokemonPress} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#00a7e9ff' },
  texto: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
  },
  container_img: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
})