import { ActivityIndicator, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Region } from "react-native-maps";

const MapaTempoReal = () => {

  // guarda a localização atual do usuário
  const [localizacao, setLocalizacao] = useState<Region>();

  useEffect(() => {

    // guarda o acompanhamento da localização
    let inscricao: Location.LocationSubscription | null = null;

    const iniciar = async () => {

      // pede permissão para acessar a localização
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {

        Alert.alert(
          "Para usar o mapa você precisa permitir a geolocalização"
        );

        return;
      }

      // acompanha a posição do usuário
      inscricao = await Location.watchPositionAsync(

        {
          // atualiza a cada 5 segundos
          timeInterval: 5000,

          // ou quando o usuário se mover 10 metros
          distanceInterval: 10,
        },

        (posicao) => {

          // atualiza a localização com a nova posição
          setLocalizacao({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });

        }

      );

    };

    iniciar();

    // para de acompanhar a localização
    // quando sair deste componente
    return () => {
      inscricao?.remove();
    };

  }, []);


  // enquanto ainda não conseguiu pegar a localização
  if (!localizacao) {

    return (
      <ActivityIndicator
        size="large"
        style={styles.loading}
      />
    );

  }


  return (

    <MapView
      style={styles.mapa}
      region={localizacao}
    >

      {/* pin mostrando a posição atual */}
      <Marker
        coordinate={{
          latitude: localizacao.latitude,
          longitude: localizacao.longitude,
        }}
        title="Minha posição"
        pinColor="blue"
      />

    </MapView>

  );

};

export default MapaTempoReal;


const styles = StyleSheet.create({

  mapa: {
    flex: 1,
    width: "100%",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});