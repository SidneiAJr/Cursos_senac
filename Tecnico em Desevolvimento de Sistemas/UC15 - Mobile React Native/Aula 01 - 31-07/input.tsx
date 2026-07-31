import { StyleSheet, TextInput,View } from 'react-native'
import React from 'react'

const input = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite um numero"
        placeholderTextColor="white"
      />
    </View>
  )
}

export default input

const styles = StyleSheet.create({
    input:{
        width: 400,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.24)',
        margin: 15,
        fontSize: 25
    }
})