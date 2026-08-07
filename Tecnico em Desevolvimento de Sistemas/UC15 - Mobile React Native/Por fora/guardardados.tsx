import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const guardardados = () => {
    const [nome,setNome] = useState('')

    useEffect(()=>{
        AsyncStorage.getItem('nome').then(valor=>{
            if(valor)setNome(valor)
        })
    },[])

    async function salvar() {
        await AsyncStorage.setItem('nome',nome)
        alert('Salvo com sucesso!')
    }


  return (
    <View>
      <Text></Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome..."
      />
      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default guardardados

const styles = StyleSheet.create({
    container: { flex: 1, padding: 25, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, fontSize: 16, marginBottom: 10 },
  botao: { backgroundColor: '#4CAF50', padding: 16, borderRadius: 8, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
})