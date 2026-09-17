import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'

interface Props {
  item: any
  onPress: (item: any, detalhes: any) => void
}

export default function CardPokemon({ item, onPress }: Props) {
  const id = item.url.split('/').filter(Boolean).pop()
  const imagemUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  async function handlePress() {
    try {
      const resposta = await axios.get(item.url)
      onPress(item, resposta.data)
    } catch (error) {
      console.log('Erro ao buscar detalhes:', error)
    }
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image style={styles.imagem} source={{ uri: imagemUri }} />
        <Text style={styles.nome}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#ffffffff',
    borderRadius: 8,
  },
  imagem: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
})