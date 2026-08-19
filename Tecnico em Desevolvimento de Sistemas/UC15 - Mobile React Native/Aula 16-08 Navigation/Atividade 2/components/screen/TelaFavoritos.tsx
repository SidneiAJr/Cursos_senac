import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../logo'

const TelaFavoritos = () => {
  return (
    <View style={styles.container}>
      <Logo tamanho={100} uri='https://img.icons8.com/ios/ffffff/50/hearts--v1.png'/>
      <Text style={styles.texto}>Um Favorito Bem bonito ⭐</Text>
       <Text style={styles.texto}>Quando tiver pronto eu falo</Text>
    </View>
  )
}

export default TelaFavoritos

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
  },
  texto:{
    marginTop:50,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 900,
    color: 'white'
  }
})