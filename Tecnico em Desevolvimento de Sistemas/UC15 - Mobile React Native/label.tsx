import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = () => {
  return (
    <View>
     <Text style={styles.labelText}>Insira seu Nome:</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
    botao:{
        display: 'flex',
        textAlign: 'center',
        alignItems :'center',
    },
    labelText:{
       color: 'black',
        fontWeight : 'bold',
        fontSize: 30
    }
})
