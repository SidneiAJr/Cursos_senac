import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListaUser from '../listaUser'

const TelaTeste2 = () => {
  return (
    <View style={styles.container}>
      <ListaUser/>
    </View>
  )
}

export default TelaTeste2

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})