import React from "react";
import { Button, View, Text } from "react-native";
import Map from '../Map';

export default function SessionListScreen({ navigation }) {

  // TODO: temp data hard coded until BE is integrated (see MapScreen as an example)
  const tempMapData = {
    userLocations: [
      { id: 1, latitude: 53.98423, longitude: -1.43245, numOfSessions: 1 },
      { id: 2, latitude: 52.28423, longitude: -1.83154, numOfSessions: 2 },
      { id: 3, latitude: 52.98423, longitude: -2.45304, numOfSessions: 3 },
      { id: 4, latitude: 53.347581, longitude: -1.459631, numOfSessions: 5 }
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
  }

  // TODO: reinstate this data once API integrated
  // mapData.zoomed = true;
  // mapData.miniView = true;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Session List Screen</Text>
      <Map mapData={tempMapData} />
      <Button
        title="Session"
        // TODO: update navigation object once map data also passed in after API integration
        onPress={() => navigation.navigate('Session Screen')}
      />

    </View>


  )
}