import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const texto2 = () => {
  return (
    <View>
      <Text style={styles.texto}>Bem Vindo</Text>
    </View>
  )
}

export default texto2

const styles = StyleSheet.create({
texto:{
    fontSize: 50,
    fontWeight: 900,
    color: 'black',
}
})