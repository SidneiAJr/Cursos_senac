import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Botao } from '../hooks/Components'

const BotaoComponente = ({
  tamanho,
  grossura,
  sombra,
  corFundo,
  titulo,
  corTexto = '#FFFFFF',
  onPress,
  desabilitado = false,
}: Botao) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={desabilitado}
      style={[
        styles.botao,
        {
          padding: tamanho,
          borderWidth: grossura,
          elevation: sombra,          
          shadowOpacity: sombra > 0 ? 0.3 : 0,  
          shadowRadius: sombra,       
          backgroundColor: corFundo,
          opacity: desabilitado ? 0.5 : 1,
        }
      ]}
    >
      <Text style={[styles.texto, { color: corTexto }]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  )
}

export default BotaoComponente

const styles = StyleSheet.create({
  botao: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',      // iOS
    shadowOffset: {           // iOS
      width: 0,
      height: 2,
    },
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})