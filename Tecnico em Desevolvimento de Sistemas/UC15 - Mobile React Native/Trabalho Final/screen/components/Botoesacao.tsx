import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

interface Props {
  desabilitado: boolean
  onAlimentar: () => void
  onBrincar: () => void
  onLimpar: () => void
  onDormir: () => void
}

export default function BotoesAcao({ desabilitado, onAlimentar, onBrincar, onLimpar, onDormir }: Props) {
  return (
    <View style={styles.caixa}>
      <Button style={styles.botao} onPress={onAlimentar} disabled={desabilitado}>
        <Text style={styles.texto}>Alimentar</Text>
      </Button>
      <Button style={styles.botao} onPress={onBrincar} disabled={desabilitado}>
        <Text style={styles.texto}>Brincar</Text>
      </Button>
      <Button style={styles.botao} onPress={onLimpar} disabled={desabilitado}>
        <Text style={styles.texto}>Limpar</Text>
      </Button>
      <Button style={styles.botao} onPress={onDormir} disabled={desabilitado}>
        <Text style={styles.texto}>Dormir</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  caixa: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  botao: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 200,
    height: 50,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  texto: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  },
})