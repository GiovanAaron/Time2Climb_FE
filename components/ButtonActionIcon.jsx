import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function ButtonActionIcon(props) {
    const { onPress, icon } = props;

    return (
        <Pressable style={customBtnStyles.button} onPress={onPress} hitSlop={25}>
            <View style={customBtnStyles.iconContainer}>
                {icon}
            </View>
        </Pressable>
    );
}

const customBtnStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 25,
        elevation: 2,
        backgroundColor: 'white',
        marginVertical: 0,
        marginHorizontal: 5,
        width: 40,
        height: 40,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '75%',
    },
});
