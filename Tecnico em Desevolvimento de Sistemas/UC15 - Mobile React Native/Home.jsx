import { StyleSheet, Text, ImageBackground } from 'react-native'
import React from 'react'

const imagemLocal = require('../icon.png'); // Ajuste o caminho conforme sua pasta

export default function Home() {
  return (
    <ImageBackground
      source={imagemLocal}
      style={styles.container}
      imageStyle={styles.imagem}
    >
      {/* TUDO DENTRO DO IMAGEBACKGROUND */}
      <Text style={styles.text}>Home</Text>
      <Text style={styles.sub}>Bem vindo</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,          
    width: '100%',     
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    resizeMode: 'cover',  
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  sub: {
    color: 'white',     
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
})
