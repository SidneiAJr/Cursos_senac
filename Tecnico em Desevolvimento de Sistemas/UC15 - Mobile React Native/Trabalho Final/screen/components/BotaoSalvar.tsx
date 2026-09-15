import { StyleSheet, Text, TouchableOpacity, Alert,View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  pokemonSorteado: { name: string; url: string } | undefined
  level: number
}

export default function BotaoSalvar({ pokemonSorteado, level }: Props) {
  const salvar = async () => {
    if (!pokemonSorteado) {
      Alert.alert('Nenhum Pokémon escolhido!')
      return
    }
    await AsyncStorage.setItem('pokemon_salvo', JSON.stringify({ ...pokemonSorteado, level }))
    Alert.alert('Salvo!', `${pokemonSorteado.name} foi salvo com sucesso.`)
  }

const verAtual = () => {
  if (!pokemonSorteado) {
    Alert.alert('Nenhum Pokémon em jogo!')
    return
  }
  Alert.alert('Pokémon Atual', `${pokemonSorteado.name} — Nível ${level}`)
}

  return (
    <View>
       <TouchableOpacity style={styles.botao} onPress={salvar}>
      <Text style={styles.botaoTexto}>Salvar Pokemon Escolhido</Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.botao} onPress={verAtual}>
  <Text style={styles.botaoTexto}>Ver Pokemon Atual</Text>
</TouchableOpacity>
    </View>
   
    
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#4ade9e',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginTop: 5,
  },
  botaoTexto: {
    color: 'black',
    fontWeight: '900',
    fontSize: 14,
  },
})