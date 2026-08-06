import { StyleSheet, Text, View } from 'react-native';
import InputTexto from './components/inputTexto';
import InputNumero from './components/inputNumero';
import Logo from './components/logo';
import Inputmult from './components/inputmult';
import Inputdim from './components/inputdim';
import Contador from './components/contador';
import Fundo from './components/Fundo';

export default function App() {
  return (
    <Fundo>
      <View style={styles.container}>
     <Logo/>
     <Text style={styles.texto}>Calculadora | Teste</Text>
     <InputTexto/>
    <InputNumero/>
    <Inputmult/>
    <Inputdim/>
    <Contador/>
    </View>
    </Fundo>
  );
}

const styles = StyleSheet.create({
  texto:{
    fontSize: 30,
    fontWeight: 900,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  },
  container:{
    flex: 1,
    padding: 20,
  }
});
