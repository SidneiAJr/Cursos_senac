import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  PaperProvider,
  Button,
  TextInput,
  Card,
  Text,
  Portal,
  Dialog,
  FAB,
  Chip,
  Avatar,
  Badge,
  Appbar,
  ProgressBar,
  Snackbar,
  Switch,
  Divider,
  List,
  IconButton,
  ActivityIndicator,
  DataTable,
} from 'react-native-paper'

export default function TelaT() {
  const [nome, setNome] = useState('')
  const [dialogVisible, setDialogVisible] = useState(false)
  const [snackVisible, setSnackVisible] = useState(false)
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <PaperProvider>
      {/* APPBAR */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Catálogo Paper" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView style={styles.scroll}>

        {/* BUTTONS */}
        <Text variant="titleMedium" style={styles.section}>Buttons</Text>
        <Button mode="contained" onPress={() => {}}>Contained</Button>
        <Button mode="outlined" onPress={() => {}}>Outlined</Button>
        <Button mode="text" onPress={() => {}}>Text</Button>
        <Button mode="elevated" onPress={() => {}}>Elevated</Button>
        <Button mode="contained-tonal" onPress={() => {}}>Tonal</Button>

        <Divider style={styles.divider} />

        {/* TEXT INPUT */}
        <Text variant="titleMedium" style={styles.section}>TextInput</Text>
        <TextInput label="Flat (padrão)" value={nome} onChangeText={setNome} />
        <TextInput label="Outlined" mode="outlined" value={nome} onChangeText={setNome} />

        <Divider style={styles.divider} />

        {/* CARD */}
        <Text variant="titleMedium" style={styles.section}>Card</Text>
        <Card>
          <Card.Title
            title="Pikachu"
            subtitle="Tipo: Elétrico"
            left={(props) => <Avatar.Icon {...props} icon="flash" />}
          />
          <Card.Content>
            <Text>HP: 35 | Ataque: 55</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancelar</Button>
            <Button mode="contained">Capturar</Button>
          </Card.Actions>
        </Card>

        <Divider style={styles.divider} />

        {/* CHIPS */}
        <Text variant="titleMedium" style={styles.section}>Chips</Text>
        <View style={styles.row}>
          <Chip icon="fire" style={styles.chip}>Fogo</Chip>
          <Chip icon="water" style={styles.chip}>Água</Chip>
          <Chip icon="leaf" style={styles.chip} selected>Planta</Chip>
          <Chip style={styles.chip} disabled>Desativado</Chip>
        </View>

        <Divider style={styles.divider} />

        {/* AVATAR */}
        <Text variant="titleMedium" style={styles.section}>Avatar</Text>
        <View style={styles.row}>
          <Avatar.Icon icon="account" size={48} />
          <Avatar.Text label="PK" size={48} />
        </View>

        <Divider style={styles.divider} />

        {/* BADGE */}
        <Text variant="titleMedium" style={styles.section}>Badge</Text>
        <View style={styles.row}>
          <IconButton icon="bell" size={28} />
          <Badge style={styles.badge}>3</Badge>
        </View>

        <Divider style={styles.divider} />

        {/* PROGRESS BAR */}
        <Text variant="titleMedium" style={styles.section}>ProgressBar</Text>
        <ProgressBar progress={0.6} />
        <ActivityIndicator animating style={{ marginTop: 8 }} />

        <Divider style={styles.divider} />

        {/* SWITCH */}
        <Text variant="titleMedium" style={styles.section}>Switch</Text>
        <View style={styles.row}>
          <Text>Notificações</Text>
          <Switch value={switchOn} onValueChange={setSwitchOn} />
        </View>

        <Divider style={styles.divider} />

        {/* LIST */}
        <Text variant="titleMedium" style={styles.section}>List</Text>
        <List.Item
          title="Pikachu"
          description="Elétrico"
          left={(props) => <List.Icon {...props} icon="flash" />}
        />
        <List.Item
          title="Charizard"
          description="Fogo / Voador"
          left={(props) => <List.Icon {...props} icon="fire" />}
        />

        <Divider style={styles.divider} />

        {/* DATA TABLE */}
        <Text variant="titleMedium" style={styles.section}>DataTable</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Pokémon</DataTable.Title>
            <DataTable.Title numeric>HP</DataTable.Title>
            <DataTable.Title numeric>Atk</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Pikachu</DataTable.Cell>
            <DataTable.Cell numeric>35</DataTable.Cell>
            <DataTable.Cell numeric>55</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Charizard</DataTable.Cell>
            <DataTable.Cell numeric>78</DataTable.Cell>
            <DataTable.Cell numeric>84</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Divider style={styles.divider} />

        {/* DIALOG */}
        <Text variant="titleMedium" style={styles.section}>Dialog</Text>
        <Button mode="outlined" onPress={() => setDialogVisible(true)}>
          Abrir Dialog
        </Button>

        {/* SNACKBAR */}
        <Button
          mode="outlined"
          onPress={() => setSnackVisible(true)}
          style={{ marginTop: 8 }}>
          Mostrar Snackbar
        </Button>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* FAB */}
      <FAB icon="plus" style={styles.fab} onPress={() => {}} />

      {/* PORTAL: Dialog e Snackbar ficam aqui */}
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Capturar?</Dialog.Title>
          <Dialog.Content>
            <Text>Deseja capturar o Pikachu?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Não</Button>
            <Button onPress={() => setDialogVisible(false)}>Sim</Button>
          </Dialog.Actions>
        </Dialog>

        <Snackbar
          visible={snackVisible}
          onDismiss={() => setSnackVisible(false)}
          duration={2000}
          action={{ label: 'OK', onPress: () => setSnackVisible(false) }}>
          Pokémon capturado!
        </Snackbar>
      </Portal>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16 },
  section: { marginTop: 8, marginBottom: 6 },
  divider: { marginVertical: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  chip: { marginRight: 4 },
  badge: { position: 'absolute', top: 4, right: 4 },
  fab: { position: 'absolute', right: 16, bottom: 16 },
})