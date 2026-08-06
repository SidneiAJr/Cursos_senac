import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fundo from '../Fundo'
import Contador from '../contador'

const TelaContador = () => {
  return (
    <Fundo>
      <View style={styles.container}>
     <Contador/>
    </View>
    </Fundo>
  )
}

export default TelaContador

const styles = StyleSheet.create({
texto:{
    fontSize: 30,
    fontWeight: 900,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  },
  container:{
    flex: 1,
    padding: 20,
  }
})