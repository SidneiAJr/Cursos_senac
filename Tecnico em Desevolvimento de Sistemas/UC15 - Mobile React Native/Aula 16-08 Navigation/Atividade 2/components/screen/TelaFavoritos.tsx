import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TelaFavoritos = () => {
  return (
    <View>
      <Text style={styles.texto}>Um Favorito Bem bonito ⭐</Text>
    </View>
  )
}

export default TelaFavoritos

const styles = StyleSheet.create({
  texto:{
    marginTop:35,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 900,
    color: 'black'
  }
})