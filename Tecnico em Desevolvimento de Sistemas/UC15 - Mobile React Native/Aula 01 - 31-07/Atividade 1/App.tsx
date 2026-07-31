import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native';
import Logo from './components/logo'
import Nome from './components/nome'
import Fundo from './components/fundo'
import Bibio from './components/bibio'
import Foto from './components/foto'
import Botao from './components/botao'

export default function App() {
  return (
    <SafeAreaProvider>
      <Fundo>
        <SafeAreaView style={styles.container}>

          <Logo />

          <Foto/>
          <Nome/>
          <Bibio/>
          <Botao/>

        </SafeAreaView>
      </Fundo>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
