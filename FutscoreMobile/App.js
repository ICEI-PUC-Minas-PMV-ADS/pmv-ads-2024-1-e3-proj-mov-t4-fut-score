import "react-native-gesture-handler";
import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity, Alert } from 'react-native';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Homepage from "./src/Pages/Homepage";
import Cadastro from "./src/Pages/Cadastro";
import LoginScreen from "./src/Pages/Login";
import Estatisticas from "./src/Pages/Estatisticas";
import Perfil from "./src/Pages/Perfil";
import StatsTable from "./src/Pages/SerieA";
import CopadoBrasil from "./src/Pages/CopadoBrasil";
import Libertadores from "./src/Pages/Libertadores";
import AuthContext, { AuthProvider } from './AuthContext';
import Sulamericana from "./src/Pages/Sulamericana";
import MeuTime from "./src/Pages/Perfil";
import SerieBTable from "./src/Pages/SerieB";

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
      <Stack.Screen
        name="StatsTable"
        component={StatsTable}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CopadoBrasil"
        component={CopadoBrasil}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Libertadores"
        component={Libertadores}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={MeuTime}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Série B" 
        component={SerieBTable}
        options={{
          headerStyle: { backgroundColor: '#228B22' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  const { navigation } = props;
  const { logged, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    Alert.alert("Logout", "Você desconectou da sua conta.");
    navigation.navigate('HomeStack');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Homepage"
        onPress={() => navigation.navigate('HomeStack')}
        icon={() => <SimpleLineIcons name="home" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      />
      {!logged ? (
        <>
          <DrawerItem
            label="Login"
            onPress={() => navigation.navigate('Login')}
            icon={() => <MaterialIcons name="login" size={20} color="#ffffff" />}
            labelStyle={{ color: '#ffffff' }}
          />
          <DrawerItem
            label="Cadastro"
            onPress={() => navigation.navigate('Cadastro')}
            icon={() => <MaterialCommunityIcons name="account-plus" size={20} color="#ffffff" />}
            labelStyle={{ color: '#ffffff' }}
          />
        </>
      ) : (
        <>
          <DrawerItem
              label="Perfil"
              onPress={() => navigation.navigate('Perfil')}
              icon={() => <MaterialIcons name="person" size={20} color="#ffffff" />}
              labelStyle={{ color: '#ffffff' }}
          />
          <DrawerItem
            label="Logout"
            onPress={handleLogout}
            icon={() => <MaterialIcons name="logout" size={20} color="#ffffff" />}
            labelStyle={{ color: '#ffffff' }}
          />
        </>
      )}
      <DrawerItem
        label="Perfil"
        onPress={() => navigation.navigate('Perfil')}
        icon={() => <MaterialIcons name="assessment" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      />
      {/*
      <DrawerItem
        label="Serie A"
        onPress={() => navigation.navigate('StatsTable')}
        icon={() => <MaterialIcons name="assessment" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      />
      <DrawerItem
        label="Copa do Brasil"
        onPress={() => navigation.navigate('CopadoBrasil')}
        icon={() => <MaterialIcons name="assessment" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      />
      <DrawerItem
        label="Libertadores"
        onPress={() => navigation.navigate('Libertadores')}
        icon={() => <MaterialIcons name="assessment" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      />
       <DrawerItem
        {/* label="Série B" 
        onPress={() => navigation.navigate('SerieBTable')}
        icon={() => <MaterialIcons name="assessment" size={20} color="#ffffff" />}
        labelStyle={{ color: '#ffffff' }}
      /> 
      */}
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
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
                headerTintColor: '#ffffff',
              }}
              component={Cadastro}
            />
            <Drawer.Screen
              name="Brasileirão"
              options={{
                drawerLabel: "Serie A",
                title: "Futscore",
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#228B22' },
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
                headerTintColor: '#ffffff',
              }}
              component={CopadoBrasil}
            />
            <Drawer.Screen
              name="Libertadores"
              options={{
                drawerLabel: "Libertadores",
                title: "Futscore",
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#228B22' },
                headerTintColor: '#ffffff',
              }}
              component={Libertadores}
            />
            <Drawer.Screen
              name="Sulamericana"
              options={{
                drawerLabel: "Sulamericana",
                title: "Futscore",
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#228B22' },
                headerTintColor: '#ffffff',
              }}
              component={Sulamericana}
            />
             <Drawer.Screen
              name="SerieBTable"
              options={{
                drawerLabel: "Série B", // Nome da tela na gaveta
                title: "FutScore",
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#228B22' },
                headerTintColor: '#ffffff',
              }}
              component={SerieBTable}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
