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
import { useFonts, AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';

const width = Dimensions.get('window').width;

export default function SavedRecipe() { 
    let [fontsLoaded] = useFonts({
        'alfa': AlfaSlabOne_400Regular,
    });

    return ( 
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Saved Recipe</Text>
                <View style={styles.content}>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "rgba(255,209,220,1)",
        alignItems: 'center',
    },
    title: { 
        marginTop: 30,
        fontFamily: 'alfa',
        fontSize: 25,
        color: "rgba(96,83,83,1)",
    },
    content: { 
        backgroundColor: 'rgba(233,127,87,1)',
        borderRadius: 20,
        marginTop: 20,
        width: width - 60,
        height: 800
    }
})