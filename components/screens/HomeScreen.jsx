import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import Map from '../Map';
import { fetchMapData } from '../../utils/api';

export default function HomeScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [mapData, setMapData] = useState({});
    const [errStatus, setErrStatus] = useState(null);
    
    // TODO: delete this temp hardcoded data once API is integrated
    const tempMapData = {
        userLocations: [
            { id: 1, latitude: 53.98423, longitude: -1.43245, numOfSessions: 1 },
            { id: 2, latitude: 52.28423, longitude: -1.83154, numOfSessions: 2 },
            { id: 3, latitude: 52.98423, longitude: -2.45304, numOfSessions: 3 },
            { id: 4, latitude: 53.347581, longitude: -1.459631, numOfSessions: 3 }
        ],
        gymLocations: [
            { id: 1, latitude: 53.28423, longitude: -1.953013 },
            { id: 2, latitude: 53.148291, longitude:-1.202161 }
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Text>Home Screen</Text>

            {/* // TODO: change from tempMapData to mapData once API integrated */}
            <Map mapData={tempMapData} /> 
            
            <Button
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
            />

        </View>
    );
}