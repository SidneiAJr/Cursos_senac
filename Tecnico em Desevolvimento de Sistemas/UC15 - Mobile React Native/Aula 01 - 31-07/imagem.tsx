import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const imagem = () => {
  return (
    <View style={styles.containerimg}>
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
        width: 280,
        height: 280,
        borderRadius: 50,
    },
    containerimg:{
        backgroundColor: 'rgba(255, 255, 255, 0.24)',
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 30
    }
})