// TelaInicial.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TelaInicial = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
       <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('API')}>
        <Text style={styles.botaoTexto}>Pokemon</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TelaTel')}>
        <Text style={styles.botaoTexto}>Telefones</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TelaInicial

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  botao: { padding: 20, backgroundColor: '#4CAF50', borderRadius: 8, margin: 5 },
  botaoTexto: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
})