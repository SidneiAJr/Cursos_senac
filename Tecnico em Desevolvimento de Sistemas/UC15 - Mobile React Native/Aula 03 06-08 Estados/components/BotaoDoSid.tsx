import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface meuBotao {
    estilos: 'principal' | 'secundario'
}

const BotaoDoSid = ({estilos = 'principal'}:meuBotao) => {
  return (
    <View>
      <Text style={styles[estilos]}>BotaoDoSid</Text>
    </View>
  )
}

export default BotaoDoSid

const styles = StyleSheet.create({
    principal:{
        backgroundColor:'green'
    },
    secundario: {
        backgroundColor: 'red'
    }
})

