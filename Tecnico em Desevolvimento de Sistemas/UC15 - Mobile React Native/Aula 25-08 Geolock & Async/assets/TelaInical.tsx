import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function TelaInical({ navigation }:any) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Menu Inicial</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Inicial')}
      >
        <Text style={styles.textoBotao}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('cadastrofoto')}
      >
        <Text style={styles.textoBotao}>Cadastrar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('salvarImg')}
      >
        <Text style={styles.textoBotao}>Salvar Imagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('converterjson')}
      >
        <Text style={styles.textoBotao}>Conveter Json</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.textoBotao}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('geo')}
      >
        <Text style={styles.textoBotao}>Geolocalização</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('favorito')}
      >
        <Text style={styles.textoBotao}>Favoritos</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  botao: {
    width: '80%',
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});