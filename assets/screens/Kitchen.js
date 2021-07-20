import React, { Component } from "react";
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    Text, 
    FlatList, 
    TouchableWithoutFeedback, 
    Keyboard,
    Dimensions
} from "react-native";
import { useFonts, Chonburi_400Regular } from '@expo-google-fonts/chonburi';

const width = Dimensions.get('window').width;

export default function Kitchen() { 
    let [fontsLoaded] = useFonts({
        'chonburi': Chonburi_400Regular,
    });

    return ( 
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>My kitchen</Text>
                <View style={styles.content}>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

    
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "rgba(177,156,217,1)",
        alignItems: 'center',
    },
    title: { 
        marginTop: 30,
        fontFamily: 'chonburi',
        fontSize: 25,
        color: "rgba(96,83,83,1)",
    },
    content: { 
        backgroundColor: 'rgba(161,70,9,1)',
        borderRadius: 20,
        marginTop: 20,
        width: width - 60,
        height: 800
    }
})