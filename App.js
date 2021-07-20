import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import firebase from 'firebase/app'
import { NavigationContainer } from '@react-navigation/native';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

import Main from './screens/Main';
import SavedRecipe from './screens/SavedRecipe';
import Kitchen from './screens/Kitchen';
import Profile from './screens/Profile';
import Register from './screens/Register';

import { useFonts, BigShouldersDisplay_700Bold } from '@expo-google-fonts/big-shoulders-display';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';
import { Chonburi_400Regular } from '@expo-google-fonts/chonburi';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyA8uuWmMjFQdIie4cqNdnrSrEuexErW-jY",
  authDomain: "undercooked-2c1d6.firebaseapp.com",
  projectId: "undercooked-2c1d6",
  storageBucket: "undercooked-2c1d6.appspot.com",
  messagingSenderId: "412222741030",
  appId: "1:412222741030:web:baf17948568e3cbe2224e7",
  measurementId: "G-JBF4781Z9J"
};

if(firebase.apps.length === 0){ 
  firebase.initializeApp(firebaseConfig);
}
// let [fontsLoaded] = useFonts({
//   BigShouldersDisplay_700Bold,
//   Roboto_700Bold,
//   AlfaSlabOne_400Regular,
//   Chonburi_400Regular,
//   PlayfairDisplay_700Bold
//     });

export class App extends Component {
  // let [fontsLoaded] = useFonts({
  //   BigShouldersDisplay_700Bold,
  //   Roboto_700Bold,
  //   AlfaSlabOne_400Regular,
  //   Chonburi_400Regular,
  //   PlayfairDisplay_700Bold
  //     });
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false, 
          loaded: true,
        })
      } else {
      this.setState({
        loggedIn: true, 
        loaded: true,
      })
    }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
    return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
              <Stack.Screen name="Register" component={Register} 
                      options = {{ 
                         headerShown:false
                        
              }}/>
            </Stack.Navigator>
          </NavigationContainer>
    )
      }
      return (
        <View >
          <Text>
            Main
          </Text>
        </View>
//         <Provider store={store}>
//  <NavigationContainer >
//           <Stack.Navigator initialRouteName="Main">
//             <Stack.Screen name="Main" component={Main} />
//           </Stack.Navigator>
//         </NavigationContainer>
//         </Provider>
      )
  }
}

export default App

 

  // function storeHighScore(userId, score) {
  //   firebase
  //     .database()
  //     .ref('users/' + userId)
  //     .set({
  //       highscore: score,
  //     });
  // }

  // function setupHighscoreListener(userId) {
  //   firebase.database().ref('users/' + userId).on('value', (snapshot) => {
  //     const highscore = snapshot.val().highscore;
  //     console.log("New high score: " + highscore);
  //   });
  // }

  // storeHighScore(1,999);

