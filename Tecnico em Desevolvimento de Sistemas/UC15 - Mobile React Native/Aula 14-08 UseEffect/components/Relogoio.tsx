import {Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Texto } from '../hooks/components'

const TelaRelogoio = ({tamanho,color,peso,alinhamento, borderRadius = 0}:Texto) => {
    const [hora,setHora] = useState<Date>(new Date())

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setHora(new Date())
        },1000)
        return () => clearInterval(intervalo)
    },[])
  return (
    <View style = {{ borderRadius: borderRadius}}>
      <Text style={{fontSize: tamanho, color: color,fontWeight: peso,textAlign: alinhamento }}>Data:{hora.toLocaleDateString()} | Horas:{hora.toLocaleTimeString()} </Text>
    </View>
  )
}

export default TelaRelogoio
