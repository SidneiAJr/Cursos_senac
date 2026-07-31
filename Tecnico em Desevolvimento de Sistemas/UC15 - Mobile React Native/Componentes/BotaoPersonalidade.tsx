import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function BotaoPersonalizado() {
  return (
    <View>
      <TouchableOpacity onPress={()=>console.log("Clicou!")} style={styles.personalidade}>Botao com Estilo</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   personalidade:{
      backgroundColor:'blue',
      color: 'white',
      fontFamily: 'arial',
        width: 400,
        height: 50,
        textAlign: 'center',
        borderRadius: 30
   }
})
