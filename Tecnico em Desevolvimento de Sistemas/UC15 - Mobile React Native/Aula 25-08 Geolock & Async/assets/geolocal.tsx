import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'

export default function geolocal() {
    const [regiao, setRegiao] = useState<Region | null>(null)

  useEffect(() => {
    const carregar = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return

      const posicao = await Location.getCurrentPositionAsync({})
      setRegiao({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
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
    >
      <Marker
        coordinate={{ latitude: regiao.latitude, longitude: regiao.longitude }}
        title="Você está aqui"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
    mapa: { flex: 1 },
  loading: { flex: 1 },
})