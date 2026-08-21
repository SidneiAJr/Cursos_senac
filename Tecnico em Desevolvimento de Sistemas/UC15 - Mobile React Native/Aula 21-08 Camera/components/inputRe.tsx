import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Input } from '../hooks/components'

const InputRe = ({ cor, texto, bordaRedonda, bordaCor, bordaEspessura, largura, altura, onChangeText, value }: Input) => {
  return (
    <TextInput
      placeholder={texto}
      value={value}
      onChangeText={onChangeText}
      style={{
        width: largura,
        height: altura,
        color: cor,
        borderWidth: bordaEspessura,
        borderColor: bordaCor,
        borderRadius: bordaRedonda,
      }}
    />
  )
}

export default InputRe

const styles = StyleSheet.create({})