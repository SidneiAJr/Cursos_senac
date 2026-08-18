import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import TelaPerfil from './components/screen/TelaPerfil'
import TelaGeral from './components/screen/TelaGeral'
import TelaFavoritos from './components/screen/TelaFavoritos'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Geral"
          component={TelaGeral}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Favoritos"
          component={TelaFavoritos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="heart-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})