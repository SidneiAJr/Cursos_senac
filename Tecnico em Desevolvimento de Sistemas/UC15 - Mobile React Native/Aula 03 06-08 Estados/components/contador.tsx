import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const contador = () => {
   
   const [contar,setcontar]= useState<number>(0)


  return (
    <View style={styles.container}>
         <Text style={styles.numero}>Contador:{contar}</Text>
     <TouchableOpacity
        style={styles.botaomenos}
        onPress={() => setcontar(contar - 1)}
      >
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaomais}
        onPress={() => setcontar(contar + 1)}
      >
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaolimpa}
        onPress={() => setcontar(0)}
      >
        <Text style={styles.botaoTexto}>C</Text>
      </TouchableOpacity>
    </View>
  )
}

export default contador

const styles = StyleSheet.create({
    container:{
    flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   gap: 5,
    },
    botaomenos: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
   botaomais: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
   botaoTexto: { 
    fontSize: 20, 
    fontWeight: 'bold' 
},
numero:{
    fontSize: 40,
    fontWeight: 900,
    color: 'white'
},
botaolimpa:{
width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
}
})