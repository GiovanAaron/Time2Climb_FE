import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function ButtonRedirect(props) {

    const { navigation, screen, btnText } = props;

    const handlePress = () => {
        if (navigation && screen) {
            navigation.navigate(screen);
        }
    };
  
    return (
        <Pressable style={customBtnStyles.button} onPress={handlePress} >
            <Text style={customBtnStyles.text}>{btnText}</Text>
        </Pressable>
    );
}

const customBtnStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 0,
        borderRadius: 7,
        elevation: 2,
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 2,
        marginVertical: 3,
        marginHorizontal: 1,
        minWidth: '30%'
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});
