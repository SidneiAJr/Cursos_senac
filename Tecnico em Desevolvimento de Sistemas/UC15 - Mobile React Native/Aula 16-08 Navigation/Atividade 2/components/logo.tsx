import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Imagem } from '../hooks/Components'

const Logo = ({ uri, tamanho = 50, resizeMode = 'contain', borderRadius = 0 }: Imagem) => {
  return (
    <Image
      source={{ uri }}
      style={[styles.logo, { 
        width: tamanho, 
        height: tamanho,
        borderRadius,
      }]}
      resizeMode={resizeMode}
    />
  )
}

export default Logo

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 0,      // garante sem margem
    padding: 0,
  }
})