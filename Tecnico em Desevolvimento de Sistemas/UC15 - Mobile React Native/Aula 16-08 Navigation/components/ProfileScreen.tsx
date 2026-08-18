import { RouteProp } from '@react-navigation/native'
import { StyleSheet, Text, View,FlatList,Image,TextInput,TouchableOpacity } from 'react-native'

type StackParamList = {
  Home: undefined
}

interface ProfileScreenProps {
  route: RouteProp<StackParamList>
}

export default function ProfileScreen({ route }: ProfileScreenProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil do usuário | Usuario</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
    }
    ,text:{
      fontSize: 20,
      fontWeight: 900,
      display: 'flex',
      textAlign: 'center'
    }
})