import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const imagem = () => {
  return (
    <View>
      <Image
  source={{ uri: 'https://i.redd.it/q027jd5j84y61.gif' }}
  style={styles.img }
/>
    </View>
  )
}

export default imagem

const styles = StyleSheet.create({
    img:{
        width: 400,
        height: 400,
        borderRadius: 50,
        elevation: 25,
    }
})