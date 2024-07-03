import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontAwesome } from '@expo/vector-icons';
import mapStyles from '../style-sheets/map-style';

export default function Map({ mapData }) {

    const centralUkLatitude = 54.473699;
    const centralUkLongitude = -3.326840;
    const zoomedDefaultLatitude = 53.266789;
    const zoomedDefaultLongitude = -1.540730;

    const userLocations = mapData.userLocations;
    const gymLocations = mapData.gymLocations;
    let mapCentreLatitude = mapData.mapCentreLatitude;
    let mapCentreLongitude = mapData.mapCentreLongitude;
    let latitudeDelta;
    let longitudeDelta;

    const largeView = {
        latitudeDelta: 0.5,
        longitudeDelta: 11
    }
    const smallView = {
        latitudeDelta: 0.5,
        longitudeDelta: 0.04
    }

    if (mapData.zoomed) {
        latitudeDelta = smallView.latitudeDelta;
        longitudeDelta = smallView.longitudeDelta;
    }
    else {
        latitudeDelta = largeView.latitudeDelta;
        longitudeDelta = largeView.longitudeDelta;
    }

    if (mapData.mapCentreLatitude && mapData.mapCentreLongitude) {
        // Zoom to user's location
        mapCentreLatitude = mapData.mapCentreLatitude;
        mapCentreLongitude = mapData.mapCentreLongitude;
    }
    else {
        if (mapData.zoomed) {
            // Zoom to default location
            mapCentreLatitude = zoomedDefaultLatitude;
            mapCentreLongitude = zoomedDefaultLongitude;
        }
        else {
            // Zoom out to display UK
            mapCentreLatitude = centralUkLatitude;
            mapCentreLongitude = centralUkLongitude;
        }
    }

    function getView() {
        if (mapData.miniView) {
            return mapStyles.miniView;
        }
        else {
            return mapStyles.largeView;
        }
    }

    return (
        <MapView
            style={getView()}
            initialRegion={{
                latitude: mapCentreLatitude,
                longitude: mapCentreLongitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }}
        >
            {userLocations.map(location => (
                <Marker
                    key={location.id}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title={`User Session`}
                    description={`Number of sessions at this location: ${location.numOfSessions}`}
                >
                    <View style={mapStyles.userMarker}>
                        <Text style={mapStyles.userMarkerText}>{location.numOfSessions}</Text>
                    </View>
                    <FontAwesome6 name="person-falling" color={'blue'} size={24} />
                </Marker>
            ))}
            {gymLocations.map(location => (
                <Marker
                    key={location.id}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title={`Location ${location.number}`}
                    description={`This is location number ${location.text}`}
                >
                    <FontAwesome name="map-marker" size={26} color="red" />
                </Marker>
            ))}
        </MapView>
    );
}
