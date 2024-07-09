import React from "react";
import Map from '../Map';
import { Text, View, ImageBackground } from "react-native";
import mapStyles from '../../style-sheets/map-style';
import appStyles from '../../style-sheets/app-style';

export default function MapScreen({ route, navigation }) {
  
  const { mapData } = route.params;
  mapData.zoomed = false;
  mapData.miniView = false;

  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <View style={appStyles.screenContainer}>
        <View style ={mapStyles.mapContainer}>
        <Map mapData={mapData} /> 
        </View>
      </View>
    </ImageBackground>
  );
}
