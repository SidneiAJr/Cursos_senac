import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CaixadeTexto = () => {
  return (
    <View>
     <TextInput style={styles.caixa} placeholder ='Escreva seu nome' onChangeText={(texto)=>console.log(texto)}
     />
    </View>
  )
}

export default CaixadeTexto

const styles = StyleSheet.create({
    caixa:{
         color: 'white',
        fontWeight : 'bold',
        fontSize: 30,
        backgroundColor: 'red',
        borderRadius: 30,
        width: 400,
        height: 50,
        margin: 5
    }
})
