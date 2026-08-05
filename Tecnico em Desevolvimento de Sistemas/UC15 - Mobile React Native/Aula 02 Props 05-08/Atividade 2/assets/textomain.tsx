import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface nomeLoja{
  nome:string
}


const textomain = ({nome}:nomeLoja) => {
  return (
    <View>
      <Text style={styles.texto}>Bem vindo | {nome}</Text>
    </View>
  )
}

export default textomain

const styles = StyleSheet.create({
  texto:{
    color: 'black',
    fontWeight: '900',
    fontSize: 35,
    marginLeft: 6,
    margin: 5
    }
})