import React from "react";
import Map from '../Map';
import { Text, View } from "react-native";
import mapStyles from '../../style-sheets/map-style';
import appStyles from '../../style-sheets/app-style';

export default function MapScreen({ mapData }) {

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
    zoomed: false,
    miniView: false
  };

  // TODO: reinstate this data once API integrated
  // mapData.zoomed = false;
  // mapData.miniView = false;

  return (
    <View style={[mapStyles.container, appStyles.h3]}>
      <Text>Climbs & Sessions Map</Text>
      {/* // TODO: change from tempMapData to mapData once API integrated  */}
      <Map mapData={tempMapData} /> 
    </View>
  );
}
