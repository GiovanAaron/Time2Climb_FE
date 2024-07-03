import React from "react";
import { Button, View, Text, StyleSheet} from "react-native";
import MapView, { Marker } from 'react-native-maps';

const locations = [
  { id: 1, latitude: 37.78825, longitude: -122.4324, number: 1 },
  { id: 2, latitude: 37.78925, longitude: -122.4314, number: 2 },
  { id: 3, latitude: 37.79025, longitude: -122.4304, number: 3 },
];

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={`Location ${location.number}`}
            description={`This is location number ${location.number}`}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>{location.number}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});