import React, { Component } from 'react';
import { 
    View,
    Button, 
    TextInput,
    StyleSheet,
    Text
} from 'react-native';

import firebase from 'firebase';

export class Register extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            email: '',
            password:'',
            name:''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(){
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
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
                    placeholder="name"
                    onChangeText={(name) => this.setState({name})}
                />
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
                    onPress={() => {this.onSignUp()}}
                    title="Sign Up"
                />
            </View>
            // <View style = {styles.container}>
                
            //     <View style = {styles.top}>
            //         <Text style = {styles.welcomeTextBold}>Welcome!</Text>
            //         <Text style = {styles.welcomeTextNormal}>Sign up to</Text>
            //         <Text style = {styles.welcomeTextNormal}>get started!</Text>
            //     </View>


            //</View>
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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: '35%',
        paddingTop: 100,
        paddingLeft: 40,
        alignContent:'center'
    },
    welcomeTextBold: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
      //  fontFamily: Roboto_700Bold,
    },
    welcomeTextNormal: {
        color:'black',
        fontSize: 25,
      //  fontFamily: Roboto_400Regular
    }
})

export default Register
