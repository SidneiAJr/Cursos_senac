import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const foto = () => {
  return (
    <View>
      <Image
      source={{ uri: 'https://down-br.img.susercontent.com/file/6f45f093e0743ea4733eb76c9611431e' }}
      style={styles.foto}
      resizeMode="cover"
    />
    </View>
  )
}

export default foto

const styles = StyleSheet.create({
foto:{
    height: 150,
    width: 150,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
    borderColor: 'white',
}
})