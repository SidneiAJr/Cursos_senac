import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Inputteste from '../inputteste'
import Botao from '../botao'

const TelaTesteinput = () => {
  return (
    <View style={styles.container}>
     <Inputteste obrigatorio title='teste' color='black' valor='' textoInterno='kifdkickcdk' type='numeric' label='ola'/>
     <Inputteste obrigatorio title='teste2' color='black' valor='' textoInterno='kifdkickcdkasassaasas' type='numeric' label='ola'/>
     <Botao title='teste' fundo='red' textoTamanho={20} textoColor='white'/>
    </View>
  )
}

export default TelaTesteinput

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})