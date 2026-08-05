import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const card = ({ children }) => {
  return (
    <View style={styles.card}>
    {children}
    </View>
  )
}

export default card

const styles = StyleSheet.create({
    card:{
     backgroundColor: 'rgba(255, 255, 255, 0.2)',
     height: 500,
     width: 400,
     display: 'flex',
     justifyContent: 'center',
     textAlign: 'center',
     alignItems: 'center',
     borderRadius: 30,
    }
})