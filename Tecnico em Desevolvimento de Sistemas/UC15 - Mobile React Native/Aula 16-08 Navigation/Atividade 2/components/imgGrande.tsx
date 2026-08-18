import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Imagem } from '../hooks/Components'

const ImgGrande = ({ uri, largura, altura = 300, resizeMode = 'cover', borderRadius = 0 }: Imagem) => {
  return (
    <Image
      source={{ uri }}
      style={[styles.imagem, { 
        height: altura,
        borderRadius,
      }]}
      resizeMode={resizeMode}
    />
  )
}

export default ImgGrande

const styles = StyleSheet.create({
  imagem: {
    width: '100%' as any,
  }
})