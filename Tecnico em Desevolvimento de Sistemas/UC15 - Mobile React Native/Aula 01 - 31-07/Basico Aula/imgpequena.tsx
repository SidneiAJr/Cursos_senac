import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const imgpequena = () => {
  return (
    <View>
    <Image
      source={{ uri: 'https://www.deviante.com.br/wp-content/uploads/2019/06/Amanhecer_no_Hercules_-1.jpg' }}
      style={styles.img }
    />
    </View>
  )
}

export default imgpequena

const styles = StyleSheet.create({
    img:{
        height: 80,
        width: 80,
        borderRadius: 50
    }
})