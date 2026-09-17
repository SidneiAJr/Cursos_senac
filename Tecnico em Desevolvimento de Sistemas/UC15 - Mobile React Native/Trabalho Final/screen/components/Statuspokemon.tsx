import { StyleSheet, Text } from 'react-native'

interface Props {
  nome: string
  alimentar: number
  energia: number
  higiene: number
  felicidade: number
}

export default function StatusPokemon({ nome, alimentar, energia, higiene, felicidade }: Props) {
  return (
    <>
      <Text style={styles.texto}>Pokemon: {nome ? nome.toUpperCase() : 'Nenhum'}</Text>
      <Text style={styles.texto}>Saciedade: {alimentar}/100</Text>
      <Text style={styles.texto}>Energia: {energia}/100</Text>
      <Text style={styles.texto}>Higiene: {higiene}/100</Text>
      <Text style={styles.texto}>Felicidade: {felicidade}/100</Text>
    </>
  )
}

const styles = StyleSheet.create({
  texto: { fontSize: 20, color: 'white', fontWeight: '900', textAlign: 'center' },
})