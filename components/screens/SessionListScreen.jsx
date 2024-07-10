import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from "react-native";
import Map from '../Map';
import ButtonRedirect from '../ButtonRedirect';
import SessionList from '../SessionList'
import appStyles from '../../style-sheets/app-style';
import sessionListStyles from '../../style-sheets/session-list-style';
import { useMapData } from '../../contexts/map-context';

export default function SessionListScreen({ navigation }) {

  const { mapData } = useMapData();
  mapData.zoomed = true;
  mapData.miniView = true;

  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>

        <View style={appStyles.screenContainer}>

          <View style={appStyles.sectionContainer}>

            <Text style={[appStyles.h2, { marginBottom: 20 }]}>Your Sessions</Text>

            <View style={[styles.container, { marginBottom: 20 }]}>
              <ButtonRedirect
                navigation={navigation}
                screen="Session Screen"
                btnText="Add Session"
              />
            </View>

            {/* <Text style={[appStyles.h3, { marginBottom: 20 }]}>Map view</Text> */}

            <Pressable style={sessionListStyles.mapContainer} onPress={() => navigation.navigate('Map Screen')}>
              <Map />
            </Pressable>

            {/* <Text style={[appStyles.h3, { marginBottom: 20 }]}>List view</Text> */}

            <SessionList navigation={navigation} />
          </View>

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