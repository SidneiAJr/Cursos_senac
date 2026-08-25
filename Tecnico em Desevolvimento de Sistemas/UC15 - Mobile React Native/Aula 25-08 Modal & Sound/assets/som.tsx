import { StyleSheet, Text, View,TouchableOpacity,Image,Modal } from 'react-native'
import React,{ useState} from 'react'
import { useAudioPlayer } from 'expo-audio'

export default function som() {

    const [visivel, setVisivel] = useState<boolean>(false)
    
    const player = useAudioPlayer(require('../assets/windows.mp3'))

    const trocar = () =>{
        player.seekTo(0)
        player.play()
        player.volume = 1.0
    }

    return (
        <View style={styles.container}>
              <Image source={{ uri: 'https://www.aosindico.com/storage/posts/456456_11022020005527.png' }} style={{ width: 600, height: 600 }} />
              <TouchableOpacity onPress={trocar} style={styles.botao}>
    <Text style={styles.texto}>▶ Tocar</Text>
  </TouchableOpacity>
  <Modal
  visible={visivel}
  animationType="none"
  transparent={true}
  onRequestClose={() => setVisivel(false)}
>
  <View style={styles.modalFundo}>
    <View style={styles.modalCaixa}>
         <TouchableOpacity onPress={() => setVisivel(false)} style={styles.botao}>
        <Text style={styles.texto}>Fechar</Text>
      </TouchableOpacity>
        <Image source={{ uri: 'https://www.aosindico.com/storage/posts/456456_11022020005527.png' }} style={{ width: 200, height: 200 }} />
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <Text style={styles.texto2}>Modal</Text>
      <TouchableOpacity onPress={trocar} style={styles.botao}>
    <Text style={styles.texto}>▶ Tocar</Text>
  </TouchableOpacity>
    </View>
  </View>
</Modal>
<TouchableOpacity onPress={() => setVisivel(true)} style={styles.botao}>
  <Text style={styles.texto}>Abrir Modal</Text>
</TouchableOpacity>
         </View>

)


}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
     botao: {
    backgroundColor: '#cc0000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto2: {
    color: 'black',
    fontSize: 35,
    fontWeight: 900,
  },
  modalFundo: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalCaixa: {
  backgroundColor: '#fff',
  padding: 24,
  borderRadius: 12,
  width: '80%',
  alignItems: 'center',
},
})