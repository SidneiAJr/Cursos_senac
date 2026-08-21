import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState,useRef} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { CameraView, useCameraPermissions } from 'expo-camera'

const ImgGaleria = () => {

    const [foto, setFoto] = useState<string | null>(null)
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
      allowsEditing: true,
      aspect: [1, 1],
      quality: 5.0,
    })

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={escolherDaGaleria}>
        <Text style={styles.botaoTexto}>Escolher da galeria</Text>
      </TouchableOpacity>
      {foto && <Image source={{ uri: foto }} style={styles.preview} />}
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
  camera: { flex: 1, width: '100%' }, // ← width: '100%' também
})