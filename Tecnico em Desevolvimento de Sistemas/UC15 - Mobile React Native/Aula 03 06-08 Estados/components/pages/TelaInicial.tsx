import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fundo from '../Fundo';

export default function TelaInicial({ navigation }: any) {
  return (
    <Fundo img="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/1095.adapt_.1900.1.jpg?w=1900&h=1425">
      <View style={styles.container}>
        <Text style={styles.titulo}>Tela Inicial | Bem Vindo!</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
          <Text style={styles.botao}>Calculadora</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Contador')}>
          <Text style={styles.botao}>Contador</Text>
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
    backgroundColor: 'red',
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