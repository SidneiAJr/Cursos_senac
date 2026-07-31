import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <Image style={styles.imagem} source={{uri: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'}}></Image>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
     imagem:{
        width: 50,
        height: 50,
        borderRadius: 50
    }
})
