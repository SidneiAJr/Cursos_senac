import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { InputText } from '../hooks/Components'

const InputTextComponente = ({
  valor,
  aoMudar,
  placeholder,
  corFundo = '#F5F5F5',
  corTexto = '#000000',
  seguro = false,
  editavel = true,
  autoFoco = false,
}: InputText) => {
  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <TextInput
        value={valor}
        onChangeText={aoMudar}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={seguro}
        editable={editavel}
        autoFocus={autoFoco}
        style={[styles.input, { color: corTexto }]}
      />
    </View>
  )
}

export default InputTextComponente

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    marginVertical: 6,
  },
  input: {
    height: 48,
    fontSize: 16,
  }
})