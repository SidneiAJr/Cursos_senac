import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const caixaazul = () => {
  return (
    <View style={styles.azul}>
      <Text style={styles.texto}>Rede Social</Text>
    </View>
  )
}

export default caixaazul

const styles = StyleSheet.create({
  azul:{
    height: 100,
    width: 430,
    backgroundColor: 'black',
    borderRadius: 20
  },
  texto:{
    fontSize: 20,
    color: 'white',
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 35
  }
})