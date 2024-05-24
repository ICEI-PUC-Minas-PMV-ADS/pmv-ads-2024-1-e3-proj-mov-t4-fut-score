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
import Estatisticas from "./src/Pages/Estatisticas"; // Certifique-se de importar sua página de Estatísticas

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{
          headerStyle: { backgroundColor: '#4caf50' },
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
        options={{ headerStyle: { backgroundColor: '#4caf50' } }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="HomeStack"
            options={{
              drawerLabel: "Homepage",
              title: "FutSre", 
              headerStyle: { backgroundColor: '#4caf50' },
              drawerIcon: () => (
                <SimpleLineIcons name="home" size={20} color="#808080" />
              ),
              // Deixe o headerShown como padrão para garantir que o Drawer funcione corretamente
            }}
            component={HomeStack}
          />
          <Drawer.Screen
            name="Login"
            options={{
              drawerLabel: "Login",
              title: "Login",
              drawerIcon: () => (
                <MaterialIcons name="login" size={20} color="#808080" />
              ),
            }}
            component={LoginScreen}
          />
          <Drawer.Screen
            name="Cadastro"
            options={{
              drawerLabel: "Cadastro",
              title: "Cadastro",
              drawerIcon: () => (
                <MaterialCommunityIcons name="account-plus" size={20} color="#808080" />
              ),
            }}
            component={Cadastro}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
