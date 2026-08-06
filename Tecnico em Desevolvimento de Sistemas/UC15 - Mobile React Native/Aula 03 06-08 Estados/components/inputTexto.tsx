import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const inputTexto = () => {
     const [nome,setNome] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text style={styles.texto}>Você digitou: {nome}</Text>
    </View>
  )
}

export default inputTexto

const styles = StyleSheet.create({
   container: { 
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.39)' ,
    borderRadius: 10, 
    height: 100,

    },
  input: {
    borderWidth: 4,
    borderColor: '#ffffffff',
    borderRadius: 8,
    padding: 10,
  },
  texto:{
    fontSize: 20,
    fontWeight: 900,
    color: 'white'
  }
})