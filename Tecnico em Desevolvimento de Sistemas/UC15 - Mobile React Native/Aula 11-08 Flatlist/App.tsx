import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCalculadora from './components/pages/TelaCalculaduras';
import TelaContador from './components/pages/TelaContador';
import TelaInicial from './components/pages/TelaInicial';
import TelaAPi from './components/pages/TelaAPi';
import TelaTesteinput from './components/pages/TelaTesteinput';
import TelaRelogio from './components/pages/TelaRelogio';
import TelaLista from './components/pages/TelaLista';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} options={{headerShown: false}} />
        <Stack.Screen name="Calculadora" component={TelaCalculadora} />
        <Stack.Screen name="Contador" component={TelaContador} />
        <Stack.Screen name="API" component={TelaAPi} />
        <Stack.Screen name="teste" component={TelaTesteinput} />
        <Stack.Screen name="teste2" component={TelaRelogio} />
        <Stack.Screen name="teste3" component={TelaLista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}