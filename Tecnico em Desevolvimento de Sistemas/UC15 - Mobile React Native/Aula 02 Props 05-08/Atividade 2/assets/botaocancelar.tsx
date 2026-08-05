import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const botaocancelar = () => {
  return (
     <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Cancelar</Text>
            <Image
          source={{ uri: 'https://img.icons8.com/ios/50/cancel.png' }}
          style={styles.foto}
          resizeMode="cover"
        />
        </TouchableOpacity>
  )
}

export default botaocancelar

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'red',
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