import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton(props) {

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
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'cornflowerblue',
        marginVertical: 3,
        marginHorizontal: 2
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});
