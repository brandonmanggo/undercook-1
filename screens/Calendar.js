import React, { Component, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    FlatList,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard
} from "react-native";
//import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
const { height } = Dimensions.get('window');

const Calendar = () => {
    const [selectDay, setSelectDay] = useState("M");
        return (
          <PreviewLayout
            label = "selectDay"
            selectedValue={selectDay}
            values={["MO","TU","WE","TH","FR","SA","SU"]}
            setSelectedValue={setSelectDay}>
            <View style = {styles.breakfast}></View>
            <View style = {styles.lunch}></View>
            <View style = {styles.dinner}></View>
          </PreviewLayout>
        );

  };
  const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
    }) => (
        <View style = {styles.container}>
            <View style = {styles.days}>
                {values.map((value) => (
                    <TouchableOpacity
                         key = {value}
                         onPress = {() => setSelectedValue(value)}
                         style = {[styles.dayButton, selectedValue === value && styles.selected]}
                     >
                         <Text style = {[
                             styles.buttonLabel,
                             selectedValue === value && styles.selectedLabel,
                         ]}
                         >
                             {value}
                         </Text>
                     </TouchableOpacity>
             ))}
             </View>
             {children}
         </View>
  )
  ;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        margin: 10,
        paddingTop: 50
    },
    days: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10
    },
    dayButton: {
        width: 35,
        height: 35,
        margin: 20,
        borderRadius: 100 / 2,
        borderWidth: 1,
        borderColor: "rgba(233, 127, 87, 1)",
        justifyContent: "center",
    },
    dayButtonPress: {
        width: 35,
        height: 35,
        margin: 20,
        borderRadius: 100 / 2,
        borderWidth: 1,
        borderColor: "rgba(233, 127, 87, 1)",
        justifyContent: "center",
        backgroundColor:'rgba(233, 127, 87, 0.5)'
    },
    buttonLabel: {
        fontFamily: 'roboto',
        fontSize: 17,
        color: "grey",
        textAlign: "center"
    },
    selectedLabel: {
        color:'white'
    },
    selected: {
      backgroundColor: "rgba(233, 127, 87, 1)",
      borderWidth: 0
    },
    breakfast: {
        flex: 0.35,
        backgroundColor: 'rgba(233, 127, 87, 1)',
        borderRadius: 20,
        margin: 20,
        marginTop : 5
    },
    lunch: {
        flex: 0.35,
        backgroundColor: 'rgba(233, 127, 87, 0.75)',
        borderRadius: 20,
        margin: 20
    },
    dinner: {
        flex: 0.35,
        backgroundColor: 'rgba(233, 127, 87, 0.5)',
        borderRadius: 20,
        margin: 20

    }
    addMeal: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'roboto'
    }
})
export default Calendar;





