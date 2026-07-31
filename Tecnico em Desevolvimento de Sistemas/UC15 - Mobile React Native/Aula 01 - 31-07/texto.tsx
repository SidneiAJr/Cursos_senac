import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const texto = () => {
  return (
    <View>
      <Text style={styles.titulo}>
         Hello Word
        </Text>
    </View>
  )
}

export default texto

const styles = StyleSheet.create({
    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    }
})