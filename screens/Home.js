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

import AppLoading from 'expo-app-loading';
export default function Home({ navigation }) {
    let [fontsLoaded] = useFonts({
        BigShouldersDisplay_700Bold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (

        <View style={styles.container}>
            <View style={styles.rect}>
                <ImageBackground 
                    source={require("../assets/images/Screenshot_2021-05-28_at_1.51.23_PM-removebg.png")}
                    resiexzeMode= "cover"
                    style={styles.image}
                >
                </ImageBackground>
                <Text style={styles.undercooked}>•UNDERCOOKED•</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Register")}
            >
                <View style = {styles.button}>
                <Text style = {styles.buttonLabel}>REGISTER</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Login")}
            >
                <View style = {styles.button}>
                <Text style = {styles.buttonLabel}>SIGN IN</Text>
                </View>
            </TouchableOpacity> 
            </View>
        </View>
    )
      }
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
        justifyContent: "center",
        alignContent: 'center'
    },
    image: { 
        width: 354,
        height: 354,
        justifyContent: "center",
        alignContent:"center",
        alignSelf: "center"
    },
    button: {
        borderRadius: 10,
        width: 200,
        height: 40,
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(153, 51, 51, 0.9)'
    },
    buttonLabel: {
        color: 'white',
        //fontFamily: 'BigShouldersDisplay_700Bold',
        fontSize: 20,
        fontWeight: '500'
    },
    undercooked: {
        //fontFamily: 'BigShouldersDisplay_700Bold',
        color: "black",
        fontSize: 25,
        textAlign: "center",
        marginTop: 15
    },
})