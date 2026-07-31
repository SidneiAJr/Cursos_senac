import { Image , StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Imagem = () => {
  return (
    <View>
      <Image style={styles.imagem} source={{uri: 'https://wallpapers.com/images/featured/imagens-de-paisagens-a3hr6gk3xfx36dyg.jpg'}}></Image>
    </View>
  )
}

export default Imagem

const styles = StyleSheet.create({
    imagem:{
        width: 500,
        height: 500,
    }
})
