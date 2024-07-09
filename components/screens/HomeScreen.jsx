import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import Map from '../Map';
import { fetchMapData } from '../../utils/api';
import Dashboard from '../Dashboard'
import styles from '../../style-sheets/home-style'
import appStyles from "../../style-sheets/app-style"

export default function HomeScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [mapData, setMapData] = useState({});
    const [errStatus, setErrStatus] = useState(null);

    // TODO: delete this temp hardcoded data once API is integrated
    const tempMapData = {
        userLocations: [
            { id: 1, latitude: 53.98423, longitude: -1.43245, numOfSessions: 1, wall_name: 'The Matrix' },
            { id: 2, latitude: 52.28423, longitude: -1.83154, numOfSessions: 2, wall_name: 'Virgin Active' },
            { id: 3, latitude: 52.98423, longitude: -2.45304, numOfSessions: 3, wall_name: 'White Hall Centre' },
            { id: 4, latitude: 53.347581, longitude: -1.459631, numOfSessions: 3, wall_name: 'The Foundry Climbing Centre' }
        ],
        gymLocations: [
            { id: 1, latitude: 53.28423, longitude: -1.953013, wall_name: 'The Climbing Works' },
            { id: 2, latitude: 53.148291, longitude: -1.202161, wall_name: 'The Adventure Hub' }
        ],
        mapCentreLatitude: null, // TODO: set to user's location
        mapCentreLongitude: null, // TODO: set to user's location
        zoomed: true,
        miniView: true,
        navigation: navigation
    };

    // TODO: check useEffect is working once API integrated
    useEffect(() => {
        setIsLoading(true);
        setErrStatus(null);
        fetchMapData()
            .then((response) => {
                response.navigation = navigation;
                response.zoomed = true;
                response.miniView = true;
                setMapData(response);
                setIsLoading(false);
            })
            .catch(() => {
                console.log(err, '--Error fetching map data--');
                setErrStatus(err.response.status);
                setIsLoading(false);
                // TODO: display error message to user
            });
    }, [])

    // TODO: display loading icon
    return (
        <ScrollView>
            <View style={styles.screenContainer}>

                <Text style={appStyles.h1}>Time to Climb</Text>


                <Pressable style={styles.mapContainer} onPress={() => navigation.navigate('Map Screen')}>
                    <Map mapData={tempMapData} />
                </Pressable>

                <Dashboard navigation={navigation} />
                {/* // TODO: change from tempMapData to mapData once API integrated */}


                <View style={styles.keyStatsContainer}>
                    <Text style={[appStyles.h3, { color: 'black' }]}>Last session</Text>
                    <Text style={styles.stat}>
                        <Text style={{ fontWeight: 'bold' }}> 6/7/2024</Text> -
                        2 hours and 15 minutes
                    </Text>
                    <Text style={styles.stat}>At
                        <Text style={{ fontWeight: 'bold' }}> The Climbing Works</Text>
                    </Text>
                    <Text style={styles.stat}>You climbed
                        <Text style={{ fontWeight: 'bold' }}> 3 boulders </Text>
                        and
                        <Text style={{ fontWeight: 'bold' }}> 6 routes</Text>
                    </Text>
                </View>

  

           


                {/* <Button
                title="Stats"
                onPress={() => navigation.navigate('Stats Screen')}
            />
            <Button
                title="Map"
                onPress={() => navigation.navigate('Map Screen', { tempMapData })} // TODO: change from tempMapData to mapData once API integrated
            />
            <Button
                title="Session"
                onPress={() => navigation.navigate('Session Screen')}
            />
            <Button
                title="Sessions"
                onPress={() => navigation.navigate('Sessions Screen')}
            /> */}

                <View style={styles.keyStatsContainer}>
                    <Text style={[appStyles.h3, { color: 'black' }]}>Key stats</Text>
                    <Text style={styles.stat}>
                        <Text style={{ fontWeight: 'bold' }}> Stat 1: </Text>
                        Statistic one
                    </Text>
                    <Text style={styles.stat}>
                        <Text style={{ fontWeight: 'bold' }}> Stat 2: </Text>
                        Statistic two
                    </Text>
                    <Text style={styles.stat}>
                        <Text style={{ fontWeight: 'bold' }}> Stat 3: </Text>
                        Statistic three
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}