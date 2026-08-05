import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const botaolimpar = () => {
  return (
    <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Limpar</Text>
        <Image
      source={{ uri: 'https://img.icons8.com/material-outlined/24/broom.png' }}
      style={styles.foto}
      resizeMode="cover"
    />
    </TouchableOpacity>
  )
}

export default botaolimpar

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'blue',
        height: 50,
        width: 120,
        borderRadius: 10
    },
    foto:{
        width: 30,
        height: 30,
    },
    texto:{
    color: 'white',
    fontWeight: '900',
    fontSize: 15,
    marginLeft: 6,
    }
})