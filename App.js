import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/auth/Home';
import Homecopy from './components/auth/Homecopy';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Loading from './components/auth/Loading';
import Mainstack from './components/Mainstack';

import { useFonts, BigShouldersDisplay_700Bold } from '@expo-google-fonts/big-shoulders-display';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';
import { Chonburi_400Regular } from '@expo-google-fonts/chonburi';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';

const store = createStore(rootReducer, applyMiddleware(thunk));

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

export default class App extends Component {
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
        <View>
          <Text> Load </Text>
        </View>
        //<Loading />
      )
    }
    if (!loggedIn) {
    return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Homecopy} options={{ headerShown: false}} />
              <Stack.Screen name="Register" component={Register} options = {{ headerShown:false }}/>
              <Stack.Screen name="Login" component={Login} options = {{ headerShown:false }}/>
            </Stack.Navigator>
          </NavigationContainer>
    ) 
    }

    return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Mainstack">
              <Stack.Screen name="Mainstack" component={Mainstack} options = {{ headerShown:false }}/> 
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    )
  }
}

