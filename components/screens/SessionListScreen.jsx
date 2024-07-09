import React from "react";
import { Button, View, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from "react-native";
import Map from '../Map';
import ButtonRedirect from '../ButtonRedirect';
import SessionList from '../SessionList'
import appStyles from '../../style-sheets/app-style';
import sessionListStyles from '../../style-sheets/session-list-style';

export default function SessionListScreen({ navigation }) {

  // TODO: temp data hard coded until BE is integrated (see MapScreen as an example)
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
  }

  // TODO: reinstate this data once API integrated
  // mapData.zoomed = true;
  // mapData.miniView = true;

  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>

        <View style={appStyles.screenContainer}>

          <Text style={[appStyles.h2, { marginBottom: 20 }]}>Your Sessions</Text>

          <View style={[styles.container, {marginBottom: 20}]}>
            <ButtonRedirect
              navigation={navigation}
              screen="Session Screen"
              btnText="Add Session"
            />
          </View>

          {/* <Text style={[appStyles.h3, { marginBottom: 20 }]}>Map view</Text> */}

          <Pressable style={sessionListStyles.mapContainer} onPress={() => navigation.navigate('Map Screen')}>
            <Map mapData={tempMapData} />
          </Pressable>

          {/* <Text style={[appStyles.h3, { marginBottom: 20 }]}>List view</Text> */}

          <SessionList />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});