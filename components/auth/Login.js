import React, { Component } from 'react'
import { 
    View,
    Button, 
    TextInput,
    StyleSheet
} from 'react-native';

import firebase from 'firebase';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export class Login extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            email: '',
            password:''
        }
        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(){
        const { email, password } = this.state;
        firebase.auth().SignInWithEmailAndPassword(email, password)
        .then((result) => { 
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <View style={styles.textBox}>
                <TextInput 
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />

                <Button 
                    onPress={() => {this.onSignIn()}}
                    title="Sign In"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textBox : { 
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    top: {
        backgroundColor: 'rgba(233,127,87,1)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: '40%',
        justifyContent: 'flex-start',
        alignContent:'center'
    },
    welcomeTextBold: {
        color: 'black',
        fontSize: 30,
      //  fontFamily: Roboto_700Bold,
    },
    welcomeTextNormal: {
        color:'black',
        fontSize: 25,
       // fontFamily: Roboto_400Regular
    }
})

export default Login
