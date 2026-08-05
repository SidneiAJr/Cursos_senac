import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface preco{
    nomeProduto: string,
    valor: number
}

const texto = ({nomeProduto,valor}:preco) => {
  return (
      <Text style={styles.texto}>Nome Produto {nomeProduto} | Preço R$:{valor}</Text>
  )
}

export default texto

const styles = StyleSheet.create({
  texto:{
    fontSize: 20,
    fontWeight: 900,
    color: 'white',
    margin: 5
  }
})