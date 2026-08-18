import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import ListaSerie from '../ListaSerie'

const TelaGeral = () => {
  const [filmes, setfilmes] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial | Geral</Text>
      <ListaSerie
        tamanho={250}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
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