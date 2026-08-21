import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList } from 'react-native'
import React,{useState,useRef} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { CameraView, useCameraPermissions } from 'expo-camera'

const ImgGaleria = () => {

    const [foto, setFoto] = useState<string | null>(null)
    const [fotos, setFotos] = useState<string[]>([])
    const cameraRef = useRef<CameraView>(null)
    const [permissao, pedirPermissao] = useCameraPermissions()

    if (!permissao?.granted) {
    return (
      <TouchableOpacity onPress={pedirPermissao}>
        <Text>Permitir câmera</Text>
      </TouchableOpacity>
    )
  }

   const tirarFoto = async () => {
    await new Promise(resolve => setTimeout(resolve, 500)) // ← espera 500ms
  const resultado = await cameraRef.current?.takePictureAsync()
  if (resultado?.uri) {
    setFoto(resultado.uri)
  }
  }

  const escolherDaGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      selectionLimit: 20,
      aspect: [1, 1],
      quality: 1,
    })

    if (!resultado.canceled) {
        const uris = resultado.assets.map((item)=>item.uri)
      setFotos(uris)
    }
  }

return (
  <View style={styles.container}>
    <TouchableOpacity style={styles.botao} onPress={escolherDaGaleria}>
      <Text style={styles.botaoTexto}>Escolher da galeria</Text>
    </TouchableOpacity>

    {fotos.length > 0 && <FlatList
      data={fotos}
      keyExtractor={(item) => item}
      horizontal
      style={styles.flatlist}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.preview} />
      )}
    />
}
    <CameraView ref={cameraRef} style={styles.camera} facing="back" />

    <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
      <Text style={styles.botaoTexto}>Capturar</Text>
    </TouchableOpacity>
  </View>
)
}

export default ImgGaleria

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', gap: 14 },
  botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10 },
  botaoTexto: { fontWeight: 'bold' },
  preview: { width: 200, height: 200, borderRadius: 12 },
  camera: { flex: 1, width: '100%' },
  flatlist: { height: 200, flexGrow: 0 },  // ← flexGrow: 0 impede a câmera de engolir
})