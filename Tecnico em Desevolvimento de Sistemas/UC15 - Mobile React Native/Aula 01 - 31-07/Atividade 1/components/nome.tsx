import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const nome = () => {
  return (
    <View>
      <Text style={styles.texto}>Primaveira Silveira Jr</Text>
    </View>
  )
}

export default nome

const styles = StyleSheet.create({
   texto:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'black',
    fontWeight: '900'
   }
})