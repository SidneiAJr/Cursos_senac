import { StyleSheet, View, Image, Modal, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { pokemonsIniciais } from '../constants/Pokemons'

interface Props {
  visivel: boolean
  onEscolher: (poke: any) => void
  onFechar: () => void
}

export default function ModalEscolha({ visivel, onEscolher, onFechar }: Props) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade"
      onRequestClose={onFechar}
    >
      <View style={styles.fundo}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Escolha seu Pokémon!</Text>

          <View style={styles.grid}>
            {pokemonsIniciais.map((poke) => (
              <TouchableOpacity
                key={poke.name}
                style={styles.card}
                onPress={() => onEscolher(poke)}
              >
                <Image
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png` }}
                  style={styles.img}
                />
                <Text style={styles.nome}>{poke.name.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button onPress={onFechar}>Cancelar</Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  box: { backgroundColor: '#3B82F6', borderRadius: 15, padding: 20, borderColor: 'black', borderWidth: 4, width: '85%' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 },
  card: { backgroundColor: '#1E40AF', borderRadius: 10, padding: 10, alignItems: 'center', width: '45%', borderColor: 'black', borderWidth: 2 },
  img: { width: 80, height: 80 },
  nome: { color: 'white', fontWeight: 'bold', marginTop: 5 },
})