import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Navbar = ({ title }) => {
  return (
    <Appbar.Navbar style={styles.headerStyle}>
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
    </Appbar.Navbar>
  );
};

// StyleSheet para definir os estilos
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#228B22' // Define a cor de fundo do cabeçalho
  },
  titleStyle: {
    textAlign: 'center' // Centraliza o texto no título
  }
});

export default Navbar;