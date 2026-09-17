import { StyleSheet, TextInput } from 'react-native'

interface Props {
  valor: string
  onChange: (texto: string) => void
}

export default function BuscaInput({ valor, onChange }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar Pokemon..."
      value={valor}
      onChangeText={onChange}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#fffbfbff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
})