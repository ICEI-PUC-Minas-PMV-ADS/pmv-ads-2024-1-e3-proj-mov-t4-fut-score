import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Homepage from "./src/Pages/Homepage";
import Cadastro from "./src/Pages/Cadastro";
import LoginScreen from "./src/Pages/Login";
import Estatisticas from "./src/Pages/Estatisticas";
import Perfil from "./src/Pages/Perfil";
import StatsTable from "./src/Pages/SerieA";
import CopadoBrasil from "./src/Pages/CopadoBrasil";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#228B22' },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <SimpleLineIcons name="menu" size={24} color="#fff" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Estatisticas"
        component={Estatisticas}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff', 
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#228B22',
              width: 240,
            },
            drawerContentStyle: {
              backgroundColor: '#228B22',
            },
            drawerInactiveTintColor: '#ffffff',
            drawerActiveTintColor: '#ffffff',
          }}
        >
          <Drawer.Screen
            name="HomeStack"
            options={{
              drawerLabel: "Homepage",
              title: "FutScore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <SimpleLineIcons name="home" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={HomeStack}
          />
          <Drawer.Screen
            name="Perfil"
            options={{
              drawerLabel: "Perfil",
              title: "Futscore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <MaterialIcons name="person" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={Perfil}
          />
          <Drawer.Screen
            name="Login"
            options={{
              drawerLabel: "Login",
              title: "Futscore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <MaterialIcons name="login" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={LoginScreen}
          />
          <Drawer.Screen
            name="Cadastro"
            options={{
              drawerLabel: "Cadastro",
              title: "Futscore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <MaterialCommunityIcons name="account-plus" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={Cadastro}
          />
          <Drawer.Screen
            name="StatsTable"
            options={{
              drawerLabel: "Serie A",
              title: "Futscore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <MaterialIcons name="assessment" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={StatsTable}
          />
          <Drawer.Screen
            name="CopadoBrasil"
            options={{
              drawerLabel: "Copa do Brasil",
              title: "Futscore",
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: '#228B22' },
              drawerIcon: () => (
                <MaterialIcons name="assessment" size={20} color="#ffffff" />
              ),
              drawerLabelStyle: { color: '#ffffff' },
              headerTintColor: '#ffffff',
            }}
            component={CopadoBrasil}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
