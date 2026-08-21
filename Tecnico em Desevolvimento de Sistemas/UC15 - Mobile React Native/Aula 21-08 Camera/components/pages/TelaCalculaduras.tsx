import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputTexto from '../inputTexto';
import InputNumero from '../inputNumero';
import Logo from '../logo';
import Inputmult from '../inputmult';
import Inputdim from '../inputdim';
import Fundo from '../Fundo';


const TelaCalculaduras = () => {
  return (
    <Fundo>
      <View style={styles.container}>
     <Logo/>
     <Text style={styles.texto}>Calculadora | Teste</Text>
     <InputTexto/>
    <InputNumero/>
    <Inputmult/>
    <Inputdim/>
    </View>
    </Fundo>
  )
}

export default TelaCalculaduras

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
    padding: 5,
  }
})