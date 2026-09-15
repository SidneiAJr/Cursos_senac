import { StyleSheet } from 'react-native'
import { Button, Dialog, Portal, Text } from 'react-native-paper'

interface Props {
  mensagem: string
  onFechar: () => void
}

export default function DialogAlerta({ mensagem, onFechar }: Props) {
  return (
    <Portal>
      <Dialog visible={mensagem !== ''} onDismiss={onFechar} style={styles.dialog}>
        <Dialog.Title style={styles.titulo}>🐾 Pokemon | Status</Dialog.Title>
        <Dialog.Content>
          <Text style={styles.msg}>{mensagem}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onFechar}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  dialog: { backgroundColor: 'black' },
  titulo: { fontSize: 20, fontWeight: '900', color: 'red' },
  msg: { fontSize: 20, fontWeight: '900', color: 'white' },
})