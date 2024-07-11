import React from "react";
import { useState, useContext, useCallback } from "react";
import { TextInput, ImageBackground, View, Text, Pressable, Image } from "react-native";
import landingStyles from "../../style-sheets/landing-style";
import { useFocusEffect } from '@react-navigation/native';

import app from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { UserContext } from '../../app/authListener';

const image = require('../../assets/images/bady-abbas-VmYZe_yqxL0-unsplash.jpg')

export default function LandingScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerScreen, setRegisterScreen] = useState(false);

  const { user } = useContext(UserContext)

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [logInError, setLogInError] = useState(false);
  const [logInErrorMessage, setLogInErrorMessage] = useState("");

  useFocusEffect(
    useCallback(() => {
      setRegisterScreen(false);
      setLogInError(false);
      setEmailError(false);
      setPasswordError(false);
      setEmail("");
      setPassword("");
    }, [])
  );

  const auth = getAuth(app)

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setRegisterScreen(false);
        setEmailError(false);
        navigation.replace('Main');
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/missing-email":
            {
              setEmailErrorMessage("Missing email address");
              setEmailError(true);
            };
            break;
          case "auth/email-already-in-use":
            {
              setEmailErrorMessage("Email address is already in use by another account");
              setEmailError(true);
            };
            break;
          case "auth/invalid-email":
            {
              setEmailErrorMessage("This email address is invalid");
              setEmailError(true);
            };
            break;
          case "auth/weak-password":
            {
              setPasswordErrorMessage("Password should be at least 6 characters");
              setPasswordError(true)
            };
            break;
          case "auth/missing-password":
            {
              setPasswordErrorMessage("Missing password");
              setPasswordError(true);
            };
            break;
          case "auth/operation-not-allowed":
            setEmailErrorMessage("Email/password accounts are not enabled");
            setEmailError(true);
            break;
          default:
            setEmailErrorMessage(error.code);
            break;
        }

      });
  };

  const handleLogIn = () => {
    login()
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace('Main')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            {
              setLogInErrorMessage("Email address or password not recognised");
              setLogInError(true);
            };
            break;
          case "auth/invalid-credential":
            {
              setLogInErrorMessage("Email address or password not recognised");
              setLogInError(true);
            };
            break;
          case "auth/missing-password":
            {
              setLogInErrorMessage("Missing password");
              setLogInError(true);
            };
            break;
        }
      });
  };

  return (

    <View style={landingStyles.screenContainer}>
      <ImageBackground source={image} resizeMode="cover" style={landingStyles.image}>
        <View style={landingStyles.overlay}>

          {!registerScreen ?
            <View style={landingStyles.logInSection}>

              <View style={landingStyles.logoContainer}>
                <Image
                  style={landingStyles.logo}
                  source={require('../../assets/Logo.png')}
                />
              </View>

              <Text style={landingStyles.loginPrompt}>Log in</Text>

              <TextInput
                style={[landingStyles.textInput]}
                placeholder="Your email address"
                onChangeText={setEmail}
                value={email}
                autoCorrect={false}
              />
              <TextInput
                style={[landingStyles.textInput, { marginBottom: 20 }]}
                placeholder="Your password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                autoCorrect={false}
              />

              {logInError && <Text style={landingStyles.logInError}>{logInErrorMessage}</Text>}

              <Pressable style={landingStyles.button} onPress={handleLogIn}>
                <Text style={landingStyles.buttonText}>Log in</Text>
              </Pressable>

              <Pressable onPress={() => setRegisterScreen(!registerScreen)} >
                <Text style={landingStyles.signUpPrompt}>Or <Text style={{ textDecorationLine: 'underline' }}>register</Text> a new account</Text>
              </Pressable>

              <Pressable style={landingStyles.button} onPress={() => navigation.replace('Main')}>
                <Text style={landingStyles.buttonText}>Skip</Text>
              </Pressable>

              {/* <Pressable style={landingStyles.button} onPress={() => console.log(user.uid)}>
                <Text style={landingStyles.buttonText}>Log user</Text>
              </Pressable> */}

            </View> :

            <View style={landingStyles.registerSection}>

              <Text style={landingStyles.loginPrompt}>Please provide a valid email address</Text>

              <TextInput
                style={[landingStyles.textInput]}
                placeholder="Your email address"
                onChangeText={setEmail}
                value={email}
              />

              {emailError && <Text style={landingStyles.registerError}>{emailErrorMessage}</Text>}

              <Text style={landingStyles.loginPrompt}>Please create a password at least 8 characters long</Text>

              <TextInput
                style={[landingStyles.textInput, { marginBottom: 20 }]}
                placeholder="Your password"
                onChangeText={setPassword}
                value={password}
              />

              {passwordError && <Text style={landingStyles.registerError}>{passwordErrorMessage}</Text>}

              <Pressable onPress={createUser} style={[landingStyles.button, { marginTop: 10 }]}>
                <Text style={[landingStyles.buttonText]}>Register</Text>
              </Pressable>

              <Pressable style={landingStyles.button} onPress={() => setRegisterScreen(false)}>
                <Text style={landingStyles.buttonText}>Back</Text>
              </Pressable>
            </View>
          }

        </View>


      </ImageBackground>

    </View>
  );
}

