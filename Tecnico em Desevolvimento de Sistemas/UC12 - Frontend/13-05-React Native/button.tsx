import {Pressable,Text,StyleSheet} from "react-native";

type props={
    title:string //Texto que aparece no botão
    onPress:() => void //Função executada ao clicar
}

/*
Aqui Vamos criar um botão
Assim evitamos repetir codigo varias telas
*/

export default function CustomButtom({title,onPress}:props){
    // cria combonpotes custombuttom
    // recebe title e onpress atrasves das props
    return(
      <Pressable
      style={styles.button}// Aplica os estilos  do botão
      onPress={onPress}
      >
      <Text style={styles.text}>
        
      </Text>
      </Pressable>
    )
      // tudo dentro do return aparece na tela e renderizado
}





