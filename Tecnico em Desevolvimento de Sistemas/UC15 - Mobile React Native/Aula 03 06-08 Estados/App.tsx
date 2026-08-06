import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCalculadora from './components/pages/TelaCalculaduras';
import TelaContador from './components/pages/TelaContador';
import TelaInicial from './components/pages/TelaInicial';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Calculadora" component={TelaCalculadora} />
        <Stack.Screen name="Contador" component={TelaContador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}