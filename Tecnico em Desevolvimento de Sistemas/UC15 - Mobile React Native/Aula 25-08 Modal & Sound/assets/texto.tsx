import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const Texto = () => {
  const [valor, setValor] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro | Usuario</Text>
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Nome"
        style={styles.input}
      />
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Idade"
        style={styles.input}
      />
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Senha"
        style={styles.input}
      />
    </View>
  )
}

export default Texto

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  texto: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
})