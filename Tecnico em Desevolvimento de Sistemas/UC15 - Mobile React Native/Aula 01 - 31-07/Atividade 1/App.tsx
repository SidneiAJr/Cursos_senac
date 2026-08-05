import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native';
import Logo from './components/logo'
import Nome from './components/nome'
import Fundo from './components/fundo'
import Bibio from './components/bibio'
import Foto from './components/foto'
import Botao from './components/botao'
import Card from './components/card'

export default function App() {
  return (
    <SafeAreaProvider>
      <Fundo>
        <SafeAreaView style={styles.container}>
          <Logo />
         <Card>
          <Foto/>
          <Nome/>
          <Bibio/>
          <Botao/>
         </Card>
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
