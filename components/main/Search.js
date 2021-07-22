import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default function Search() {
    return (
        <View style={styles.background}>
            <Text>
                Search
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: 'rgba(233,127,87,1)'
    }
})

