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
    container: {
        width: '50%',
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderBottomWidth: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 0,
        borderRadius: 25,
        elevation: 8,
        backgroundColor: 'lightblue',
        borderColor: '#86CAD7',
        borderWidth: 2,
        marginVertical: 3,
        marginHorizontal: 1,
        minWidth: '30%',
        width: '50%',
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderBottomWidth: 10,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'darkblue',
    }
});
