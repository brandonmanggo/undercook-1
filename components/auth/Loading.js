import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import { useFonts, BigShouldersDisplay_700Bold } from '@expo-google-fonts/big-shoulders-display';

export default function Loading() {
    let [fontsLoaded] = useFonts({
        'bigShoulder': BigShouldersDisplay_700Bold,
    });

    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <ImageBackground 
                    source={require("../../assets/images/Screenshot_2021-05-28_at_1.51.23_PM-removebg.png")}
                    resiexzeMode= "cover"
                    style={styles.image}
                >
                    <Text style={styles.undercooked}>•UNDERCOOKED•</Text>
                </ImageBackground>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "rgba(233,127,87,1)",
        height: '100%'
    },
    rect: { 
        flex: 1,
        backgroundColor: "rgba(233,127,87,1)",
        alignItems: "center",
        justifyContent: "center"
    },
    image: { 
        width: 354,
        height: 354,
        justifyContent: "center",
        alignContent:"center",
        alignSelf: "center"
    },
    undercooked: {
        fontFamily: 'bigShoulder',
        color: "rgba(255,255,255,1)",
        fontSize: 25,
        textAlign: "center",
        marginTop: 370
    },
})  