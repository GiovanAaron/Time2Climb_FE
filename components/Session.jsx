import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonAction from './ButtonAction';
import appStyles from '../style-sheets/app-style';

const moment = require('moment');

export default function Session({ navigation, sessionData }) {

    const handleDelete = () => {
        // TODO: update when BE APIs integrated
        // TODO: add confirmation of deletion
    };

    const handleEdit = () => {
        // TODO: update when BE APIs integrated
    };

    return (
        <View style={styles.sessionContainer}>
            <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Session Screen', { sessionData })}>

                <Text style={styles.header}>{sessionData.wall_name}</Text>
                <View style={styles.details}>
                    <Text style={appStyles.standardFont}>{moment(new Date(sessionData.date)).format('DD-MM-YYYY')}</Text>
                    <Text style={appStyles.standardFont}>
                        <Text style={appStyles.standardFont}>{sessionData.duration_minutes} mins</Text>
                        <Text style={appStyles.standardFont}>   Climbs: {sessionData.climb_count}</Text>
                    </Text>
                </View>
                <View style={styles.icons}>
                    <ButtonAction
                        onPress={handleDelete}
                        icon={<Ionicons name="trash" color={'red'} size={20} />}
                    />
                    <ButtonAction
                        onPress={handleEdit}
                        icon={<Ionicons name="create" color={'#0083A7'} size={20} />}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    sessionContainer: {
        paddingTop: 2,
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderColor: '#FFC759',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkblue',
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row-reverse'
    },
    details: {
        marginTop: 5,
        alignItems: 'center'
    }
});
