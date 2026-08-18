import { StyleSheet, Image, View } from 'react-native'
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
    <View>
      <Image
        source={{ uri: image.medium }}
        style={styles.imagem}
      />
    </View>
  )
}

export default ImagemSerie

const styles = StyleSheet.create({
  imagem: {
    width: 150,
    height: 200,
    borderRadius: 8,
  }
})