// Importando os comantes princiais que preciamos para contuir a tela
import {View,Text,StyleSheet,Image} from "react-native";

// Essa é a primeira tela do app
// Ela mostra uma imagem e dois botoes
// Ir login ou cadastro

export default function IndexScree(){
  return(
    <View style={styles.container}>
     <Image 
     source={require("../../assets/images/")}
     style={styles.imagem}
     resizeMode='contain'
     />
    </View>
  )
}
