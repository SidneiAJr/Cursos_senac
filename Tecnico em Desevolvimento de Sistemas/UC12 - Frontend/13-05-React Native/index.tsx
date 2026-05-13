// Importando os comantes princiais que preciamos para contuir a tela
import {View,Text,StyleSheet,Image} from "react-native";
import CustomButtom from "@/components/ui/Button";
import { router } from "expo-router";

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
     <Text style={styles.title}>Hydro RS | Não Rolo</Text>
     <CustomButtom
      title = 'Ir para Cadastro'
      onPress ={()=>router.push('/register')}
     />
     <CustomButtom
      title = 'Ir para Login'
      onPress ={()=>router.push('/Login')}
     />
    </View>
  )
}

// Estilizando
const styles = StyleSheet.create({
  title:{
     
  },
  subtitle:{
    
  },
  imagem:{
    width: 220,
    height: 200,
    marginBottom: 20
  },
  container:{
    flex:1,
    backgroundColor: "#f7f8fa",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  }

})
