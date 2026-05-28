import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButtom from './assets/Components/Button';
import InputCustom from './assets/Components/Input';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Calculadora</Text>

        <InputCustom
          placeholder="Digite Numero: "
          value={nome}
          onChangeText={setNome}
        />
        <InputCustom
          placeholder="Digite Numero: "
          value={nome}
          onChangeText={setNome}
        />


        <CustomButtom
          title="Entrar"
          onPress={() => alert('Olá ' + nome)}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 300,
    backgroundColor: 'rgba(251, 0, 0, 0.41)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
  },
});
