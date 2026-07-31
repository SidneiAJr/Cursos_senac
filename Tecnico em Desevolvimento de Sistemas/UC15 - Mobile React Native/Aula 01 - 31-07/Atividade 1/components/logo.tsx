import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios/50/home--v1.png' }}
        style={styles.foto}
        resizeMode="contain"
      />
      <Text style={styles.texto}>Home</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  containerLogo:{
    position: 'absolute',
    top: 20,
    left: 20,
  },

  foto:{
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'white',
  },
  texto:{
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
}
})