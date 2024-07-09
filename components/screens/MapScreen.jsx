import React from "react";
import Map from '../Map';
import { Text, View } from "react-native";
import mapStyles from '../../style-sheets/map-style';
import appStyles from '../../style-sheets/app-style';

export default function MapScreen({ mapData }) {

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
    zoomed: false,
    miniView: false
  };

  // TODO: reinstate this data once API integrated
  // mapData.zoomed = false;
  // mapData.miniView = false;

  return (
    <View style={appStyles.screenContainer}>
      {/* // TODO: change from tempMapData to mapData once API integrated  */}
      <View style ={mapStyles.mapContainer}>
      <Map mapData={tempMapData} /> 
      </View>
    </View>
  );
}
