import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface nomeUsuario{
  nome:string
}

const nome = ({nome}:nomeUsuario) => {
  return (
    <View>
      <Text style={styles.texto}> Usuario | {nome} </Text>
    </View>
  )
}

export default nome

const styles = StyleSheet.create({
   texto:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 900
   }
})