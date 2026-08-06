import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const inputdim = () => {
    const [numero1,setNumero1] = useState<number>("");
    const [numero2,setNumero2] = useState<number>("");
        
    const soma = Number(numero1)-Number(numero2)
  return (
     <View style={styles.container}>
              <TextInput
                style={styles.input}
                value={numero1}
                onChangeText={setNumero1}
                keyboardType='numeric'
                placeholder="Digite um numero"
              />
               <TextInput
                style={styles.input}
                value={numero2}
                onChangeText={setNumero2}
                keyboardType='numeric'
                placeholder="Digite um numero"
              />
              <Text style={styles.texto}>Resultado da Subtração: {soma}</Text>
            </View>
  )
}

export default inputdim

const styles = StyleSheet.create({
    container: { 
    gap: 10,
    marginTop: 5
    },
  input: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  texto:{
    fontSize: 20,
    fontWeight: 900,
    color: 'white'
  }
})