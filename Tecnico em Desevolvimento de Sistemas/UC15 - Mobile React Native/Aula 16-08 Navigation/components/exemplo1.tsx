import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const exemplo1 = () => {
    const [contador,setContador] = useState<number>(0)

    useEffect(()=>{
        console.log("O componente foi renderizado")
    })

  return (
    <View>
      <Text>exemplo1</Text>
      <Text onPress={()=>setContador(contador+1)}></Text>
    </View>
  )
}

export default exemplo1

const styles = StyleSheet.create({})