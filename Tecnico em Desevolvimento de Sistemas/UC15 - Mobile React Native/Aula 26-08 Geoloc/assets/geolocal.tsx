import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapView, { Marker,Region } from 'react-native-maps'

export default function geolocal() {
    const [regiao, setRegiao] = useState<Region | null>(null)
    const [marcadorManual, setMarcadorManual] = useState<any>(null)
    const [pins , setPins]= useState<{latitude:number; longitude: number;}[]>([])
     
    const adicionarPin = (coordenada: { latitude: number; longitude: number }) => {
        setPins(prev => [...prev, coordenada])
    }

  useEffect(() => {
    const carregar = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return

      const posicao = await Location.getCurrentPositionAsync({})
      setRegiao({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      })
    }
    
    carregar()
  }, [])
   if (!regiao) {
    return <ActivityIndicator size="large" style={styles.loading} />
  }
  return (
      <MapView
      style={styles.mapa}
      initialRegion={regiao}
      showsUserLocation={true}
      onPress={(toque)=>{
         adicionarPin(toque.nativeEvent.coordinate)
         setMarcadorManual(toque.nativeEvent.coordinate)
      }}
    >
      {pins.map((pin, index) => (
        <Marker key={index} coordinate={pin} title={`pin ${index + 1}`} />
    ))}
      <Marker
        coordinate={{ latitude: regiao.latitude, longitude: regiao.longitude }}
        title="Você está aqui"
         description="Sua Localição Atual"
      />

    </MapView>
  )
}

const styles = StyleSheet.create({
    mapa: { flex: 1 },
  loading: { flex: 1 },
})