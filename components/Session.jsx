import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonAction from './ButtonAction';

export default function Session({ sessionData }) {

    const handleDelete = () => {
        // TODO: update when BE APIs integrated
        // TODO: add confirmation of deletion
    };

    const handleEdit = () => {
        // TODO: update when BE APIs integrated
    };

    return (
        <View style={styles.sessionContainer}>
            <View style={styles.header}>
                <Text style={styles.wallText}>{sessionData.wall}</Text>
                <View style={styles.icons}>
                    <ButtonAction 
                        onPress={handleEdit} 
                        icon={<Ionicons name="create" color={'cornflowerblue'} size={20} />} 
                    />
                    <ButtonAction 
                        onPress={handleDelete} 
                        icon={<Ionicons name="trash" color={'cornflowerblue'} size={20} />} 
                    />
                </View>
            </View>
            <View style={styles.details}>
                <Text>{sessionData.date}</Text>
                <Text>{sessionData.duration_minutes} mins</Text>
                <Text>Climbs: {sessionData.climb_count}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sessionContainer: {
        padding: 10,
        marginBottom: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wallText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icons: {
        flexDirection: 'row',
    },
    details: {
        marginTop: 5,
    }
});
