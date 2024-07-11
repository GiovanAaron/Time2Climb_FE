import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

export default function ButtonActionText(props) {
    const { onPress, btnText } = props;

    return (
        <Pressable style={customBtnStyles.button} onPress={onPress} hitSlop={25}>
            <View style={customBtnStyles.iconContainer}>
                <Text>{btnText}</Text>
            </View>
        </Pressable>
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
