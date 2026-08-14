import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fundo from '../Fundo';

export default function TelaInicial({ navigation }: any) {
  return (
    <Fundo img="https://i.pinimg.com/originals/59/69/84/59698460a33a71e42ddf46e185e17737.gif">
      <View style={styles.container}>
        <Text style={styles.titulo}>Tela Inicial | Bem Vindo!</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
          <Text style={styles.botao}>Calculadora</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Contador')}>
          <Text style={styles.botao}>Contador</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('API')}>
          <Text style={styles.botao}>API</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('teste')}>
          <Text style={styles.botao}>Input Teste</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('teste2')}>
          <Text style={styles.botao}>Relogio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('teste3')}>
          <Text style={styles.botao}>Lista</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('t')}>
          <Text style={styles.botao}>Tela Teste</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('a')}>
          <Text style={styles.botao}>Lista Teste usuarios</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('previsao')}>
          <Text style={styles.botao}>Previsao do Tempo</Text>
        </TouchableOpacity>

      </View>
    </Fundo>
  );
}

const styles = StyleSheet.create({
titulo:{
    fontSize: 30,
    fontWeight: 900,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  },
  container:{
    flex: 1,
    padding: 20,
  },
   botao: {
    width: 400,
    height: 90,
    borderRadius: 20,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    fontWeight: 900,
    margin: 5
  },
})