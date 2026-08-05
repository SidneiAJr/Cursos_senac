import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const botaocomprar = () => {
  return (
    <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Comprar</Text>
        <Image
      source={{ uri: 'https://img.icons8.com/ios/50/buy--v1.png' }}
      style={styles.foto}
      resizeMode="cover"
    />
    </TouchableOpacity>
  )
}

export default botaocomprar

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'green',
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