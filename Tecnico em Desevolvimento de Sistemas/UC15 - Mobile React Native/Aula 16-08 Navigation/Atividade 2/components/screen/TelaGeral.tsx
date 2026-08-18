import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import ListaSerie from '../ListaSerie'
import ImagemSerie from '../ImagemSerie'
import BotaoComponente from '../botao'

const TelaGeral = () => {
  const [filmes, setfilmes] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial | Geral</Text>
      <View>
        <ListaSerie
        tamanho={250}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImagemSerie image={item.image} />  // cada card tem sua imagem
        )}
      />
      </View>
    </View>
  )
}

export default TelaGeral

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  texto:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 25,
    fontWeight: 900
  }
})