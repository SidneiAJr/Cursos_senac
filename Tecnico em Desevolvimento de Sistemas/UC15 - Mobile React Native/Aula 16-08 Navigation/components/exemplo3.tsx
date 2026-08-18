import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Exemplo3 = () => {
    const [contador,setContador] = useState<number>(0)

    useEffect(()=>{
        console.log("O componente foi renderizado")
    },[contador])

  return (
    <View>
      <Text>Contador:{contador}</Text>
      <Text onPress={()=>setContador(contador+1)}>Click para aumentar o contador</Text>
    </View>
  )
}

export default Exemplo3

const styles = StyleSheet.create({})