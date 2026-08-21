import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Botaotri } from '../hooks/components'

const botao = ({title,onPress,fundo,textoTamanho,textoColor}:Botaotri) => {
  return (
    <TouchableOpacity style={[styles.botao,{backgroundColor: fundo}]}onPress={onPress}>
       <Text style={[styles.texto,{color:textoColor},textoTamanho ? {fontSize:textoTamanho}: undefined]}>{title}</Text>
    </TouchableOpacity>
  )
}
export default botao

const styles = StyleSheet.create({
  botao: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  semCor: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
  },
})