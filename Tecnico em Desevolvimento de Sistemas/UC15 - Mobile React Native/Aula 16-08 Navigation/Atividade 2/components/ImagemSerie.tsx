import { StyleSheet, Image } from 'react-native'
import React from 'react'

interface ImagemSerieProps {
  image: {
    medium: string
    original: string
  }
}

const ImagemSerie = ({ image }: ImagemSerieProps) => {
  if (!image) return null  

  return (
    <Image
      source={{ uri: image.medium }}
      style={styles.imagem}
    />
  )
}

export default ImagemSerie

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 260,
    marginLeft: 11,
    borderRadius: 15,
    marginBottom: 7
  }
})