import { StyleSheet, Text, View,FlatList,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalLista from './ModalLista'

const listaapi = ()=>{
    const [pokemons, setpokemons] = useState([])
    const [carregando,setcarregando]=useState(true)
    const [busca,setbusca]=useState('')
    const [pokemonSelecionado, setPokemonSelecionado] = useState<any>(null)
    const [modalAberto, setModalAberto] = useState(false)
    const [pokemonDetalhes, setPokemonDetalhes] = useState<any>(null)

      const filtrados = pokemons.filter((item: any) =>item.name.includes(busca.toLowerCase())
)

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(resposta=>{
           setpokemons(resposta.data.results)
            setcarregando(false)
        })
},[])


return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pokedex</Text>
    <TextInput
                style={styles.input}
                placeholder="Buscar contato..."
                value={busca}
                onChangeText={setbusca}
              />
    <FlatList
    data={filtrados}
      keyExtractor={(item: any) => item.name}
        renderItem={({ item, index }: any) => (
            <TouchableOpacity  onPress={ async() => {
    setPokemonSelecionado(item)
    setModalAberto(true)
    try {
      const resposta = await axios.get(item.url)
      setPokemonDetalhes(resposta.data)
    } catch (error) {
      console.log('Erro ao buscar detalhes:', error)
    }
  }}>
          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/').filter(Boolean).pop()}.png` }}
            />
            <Text style={styles.nome}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
      <ModalLista
  visivel={modalAberto}
  tamanho={30}
  lista={pokemonSelecionado?.name ?? ''}
  corfundo="#fff"
  fonte="System"
  grossuraFonte="bold"
  cor="#222"
  fechar={() => {
    setModalAberto(false)
    setPokemonDetalhes(null)
  }}
  pokemon={pokemonDetalhes}
/>
      </View>
  )
}


export default listaapi

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#00a7e9ff', marginTop: 15 },
    card: { flexDirection: 'row', alignItems: 'center', padding: 5, marginBottom: 5, backgroundColor: '#ffffffff', borderRadius: 8 },
    imagem: { width: 60, height: 60, marginRight: 16 },
    nome: { fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' },
    input: { borderWidth: 1, borderColor: '#fffbfbff', borderRadius: 8, padding: 10, marginBottom: 16, fontSize: 16 },
    texto:{fontSize:30, display:'flex',justifyContent: 'center',alignItems: 'center',textAlign: 'center',fontWeight:900}
})