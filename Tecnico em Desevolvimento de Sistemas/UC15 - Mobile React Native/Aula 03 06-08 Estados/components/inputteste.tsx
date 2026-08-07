import { StyleSheet, Text, View,TextInput,KeyboardTypeOptions } from 'react-native'
import React from 'react'

interface InputAtri{
    obrigatorio?:boolean
    title:string
    color:string
    type: KeyboardTypeOptions
    valor?: string
    textoInterno: string
    label: string
    onChangeText?: (text: string) => void; // Função quando digitar
}

const inputteste = ({obrigatorio,title,color,type,valor,textoInterno,label,onChangeText}:InputAtri) => {
  return (
    <View style={styles.container}>
    <Text style={[styles.label, { color }]}>
    {label} {obrigatorio && <Text style={styles.asterisco}>*</Text>}
      </Text>
    <TextInput
    style={styles.input}
    value={valor}
    onChangeText={onChangeText}
    keyboardType={type}
    placeholder={textoInterno}
    />
    </View>
  )
}

export default inputteste

const styles = StyleSheet.create({
    container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  asterisco: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
})