import Telacadastro from './assets/Telacadastro';
import TelaInical from './assets/TelaInical';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import salvarImg from './assets/salvarImg';
import convJson from './assets/convJson';
import TelaPerfil from './assets/telaPerfil';
import geolocal from './assets/geolocal';
import listafavoritos from './assets/listafavoritos';
import som from './assets/som';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
       <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
         <Stack.Screen name="Inicial" component={TelaInical} options={{ headerShown: false }} />
          <Stack.Screen name="cadastrofoto" component={Telacadastro} options={{ headerShown: false }} />
          <Stack.Screen name="salvarImg" component={salvarImg} options={{ headerShown: false }} />
          <Stack.Screen name="converterjson" component={convJson} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={TelaPerfil} options={{ headerShown: false }} />
          <Stack.Screen name="geo" component={geolocal} options={{ headerShown: false }} />
           <Stack.Screen name="favorito" component={listafavoritos} options={{ headerShown: false }} />
           <Stack.Screen name="som" component={som} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

