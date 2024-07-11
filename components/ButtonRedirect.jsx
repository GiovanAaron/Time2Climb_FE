import React from 'react';
import { Text,  View, StyleSheet, Pressable } from 'react-native';

export default function ButtonRedirect(props) {

    const { navigation, screen, btnText } = props;

    const handlePress = () => {
        if (navigation && screen) {
            navigation.navigate(screen);
        }
    };
  
    return (
        // <View style={customBtnStyles.container}>
            <Pressable style={customBtnStyles.button} onPress={handlePress} >
                <Text style={customBtnStyles.text}>{btnText}</Text>
            </Pressable>
        // </View>
    );
}

const customBtnStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        borderRadius: 25,
        elevation: 6,
        backgroundColor: '#7AD3D7',
        borderColor: '#0083A7',
        borderWidth: 2,
        marginVertical: 3,
        marginHorizontal: 1,
        minWidth: '30%',
        width: '30%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderWidth: 2,
        borderBottomWidth: 8,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'darkblue',
    }
});
