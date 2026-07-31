import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const foto = () => {
  return (
    <View>
      <Image
      source={{ uri: 'https://img.icons8.com/ios/50/user--v1.png' }}
      style={styles.foto}
      resizeMode="cover"
    />
    </View>
  )
}

export default foto

const styles = StyleSheet.create({
foto:{
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 2,
    borderColor: 'white',
}
})