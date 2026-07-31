import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const nome = () => {
  return (
    <View>
      <Text style={styles.texto}>Dalvano Silva</Text>
    </View>
  )
}

export default nome

const styles = StyleSheet.create({
   texto:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: 'white'
   }
})