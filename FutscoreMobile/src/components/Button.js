import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 8,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5,
        width: '80%', // Define a largura do botão como 80% do contêiner pai
        alignItems: 'center', // Centraliza o texto dentro do botão
        marginVertical: 10, // Adiciona margem vertical para espaçamento
    },
    text: {
        fontSize: 16, // Tamanho da fonte do texto
        fontWeight: 'bold', // Negrito no texto
    }
});
