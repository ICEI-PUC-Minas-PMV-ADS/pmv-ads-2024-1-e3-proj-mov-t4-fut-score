import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

export default Campeonatos = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Campeonatos</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                <View style={styles.campeonatos}>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.campeonatosWrapper}>
                            <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png' }} />
                            <Text>Brasileirão</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.campeonatosWrapper}>
                            <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/brasileiro-serieb.png' }} />
                            <Text>Serie B</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.campeonatosWrapper}>
                            <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/copa-do-brasil.png' }} />
                            <Text>Copa do Brasil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.campeonatosWrapper}>
                            <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/libertadores.png' }} />
                            <Text>Libertadores</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.campeonatosWrapper}>
                            <Image style={styles.images} source={{ uri: 'https://api.api-futebol.com.br/images/competicao/sulamericana.png' }} />
                            <Text>Sulamericana</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 15,
        marginTop: 25
    },
    images: {
        width: 40,
        height: 40,

    },
    campeonatosWrapper: {
        flexDirection: "column",
        alignItems: "center"

    },
    container: {
        marginBottom: 50,

    },
    button: {
        alignItems: "center",
        marginRight: 20
    },
    campeonatos: {
        flexDirection: "row",
        justifyContent: "center"

    }
})

