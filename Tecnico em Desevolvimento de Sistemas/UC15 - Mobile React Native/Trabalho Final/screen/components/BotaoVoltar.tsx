import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function BotaoVoltar() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
      <Text style={styles.texto}>←</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    padding: 20,
    margin: 10,
    height: 20,
    width: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
  },
})