import React from "react";
import { TextInput, StyleSheet, ImageBackground, Button, View, Text, Pressable } from "react-native";
import ButtonRedirect from "../ButtonRedirect";

const image = require('../../assets/images/bady-abbas-VmYZe_yqxL0-unsplash.jpg')

export default function LandingScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>

          <TextInput
            style={[styles.textInput]}
            placeholder="Your email address"
          // onChangeText={onChangeText}
          // value={text}
          />
          <TextInput
            style={[styles.textInput, {marginBottom: 50}]}
            placeholder="Your password"
          // onChangeText={onChangeText}
          // value={text}
          />
          <Pressable style={styles.button} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: '100%',
    height: '100%'
  },
  textInput: {
    height: 50,
    width: '60%',
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 15,
    borderRadius: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginBottom: 10,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});