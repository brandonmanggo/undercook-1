import React, { Component } from 'react'
import { 
    View,
    Button, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
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
            <View style = {styles.container}>
                <View style = {styles.top}>
                    <Text style = {styles.welcomeTextBold}>Welcome Back!</Text>
                    <Text style = {styles.welcomeTextNormal}>Log in to</Text>
                    <Text style = {styles.welcomeTextNormal}>get cooking!</Text>
                </View>
                <View style ={styles.container1}>
                    <View style = {styles.textInputBox}>
                        <TextInput 
                            placeholder="Username"
                            fontSize = '18'
                            onChangeText={(username) => this.setState({username})}
                        />
                        </View>
                    <View style = {styles.textInputBox}>
                        <TextInput style
                            placeholder="Password"
                            fontSize ='18'
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={() => {this.onSignIn()}}
                    >
                        <Text style= {styles.signInText}>Get cooking! </Text>
                        <AntDesign name="arrowright" 
                            size={24} 
                            color="rbg(0,0,0)"
                        />
                    </TouchableOpacity>
                
                
                
                
                </View>
                <View style={styles.image}>
                <Image
                    source={require('../assets/images/undercooked-register-page.png')}
                />
                </View>








            </View>
            // <View>
            //     <TextInput 
            //         placeholder="email"
            //         onChangeText={(email) => this.setState({email})}
            //     />
            //     <TextInput 
            //         placeholder="password"
            //         secureTextEntry={true}
            //         onChangeText={(password) => this.setState({password})}
            //     />

            //     <Button 
            //         onPress={() => {this.onSignIn()}}
            //         title="Sign In"
            //     />
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    container1: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 30,
        marginTop: 30
        
    },
    textInputBox: {
        borderColor: 'rgba(233,127,87,1)',
        borderBottomWidth: 1,
        width: 200,
        height: 40,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignContent: 'center'
    },
    top: {
        backgroundColor: 'rgba(233,127,87,1)',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: '35%',
        alignContent:'center'
        
    },
    welcomeTextBold: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 110,
        marginLeft: 30
      //  fontFamily: Roboto_700Bold,
    },
    welcomeTextNormal: {
        color:'black',
        fontSize: 25,
        paddingLeft: 30
      //  fontFamily: Roboto_400Regular
    },
    backButton: {
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 10
    },
    signInButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15 ,
        borderWidth:2,
        borderColor: 'rgba(233,127,87,1)',
        width: 150,
        height: 40,
        marginTop: 40,
        marginLeft: 180,
        backgroundColor: 'rgba(253,186,162,1)'
    },
    signInText: {
        fontSize: 18
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
