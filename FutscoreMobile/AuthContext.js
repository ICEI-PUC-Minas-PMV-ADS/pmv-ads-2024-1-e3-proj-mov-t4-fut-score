// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLogged = await AsyncStorage.getItem('logged');
      setLogged(isLogged === 'true');
    };

    checkLoginStatus();
  }, []);

  const login = async () => {
    await AsyncStorage.setItem('logged', 'true');
    setLogged(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
