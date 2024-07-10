import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontAwesome } from '@expo/vector-icons';
import mapStyles from '../style-sheets/map-style';

export default function Map({ mapData }) {

    const centralUkLatitude = 54.473699;
    const centralUkLongitude = -3.326840;
    const zoomedDefaultLatitude = 53.380618;
    const zoomedDefaultLongitude = -1.472019;

    const userSessionWalls = mapData.walls.userSessionWalls;
    const filteredWalls = mapData.walls.filteredWalls;
    let mapCentreLatitude = mapData.mapCentreLatitude;
    let mapCentreLongitude = mapData.mapCentreLongitude;
    let latitudeDelta;
    let longitudeDelta;

    let largeView = { //TODO: change to const once all UK wall data exists in the DB
        latitudeDelta: 0.5,
        longitudeDelta: 11
    }
    // TODO: line below is temp code due to only having wall data for a small section of the UK
    largeView = {
        latitudeDelta: 0.5,
        longitudeDelta: 1.2
    } //TODO: delete this line once all UK wall data exists in the DB
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
            // Zoom to default location (Sheffield)
            mapCentreLatitude = zoomedDefaultLatitude;
            mapCentreLongitude = zoomedDefaultLongitude;
        }
        else {
            // Zoom out to display entire UK
            mapCentreLatitude = centralUkLatitude;
            mapCentreLongitude = centralUkLongitude;

            // TODO: below is temp code due to only having wall data for a small section of the UK
            mapCentreLatitude = zoomedDefaultLatitude; //TODO: delete this line once all UK wall data exists in the DB
            mapCentreLongitude = zoomedDefaultLongitude; //TODO: delete this line once all UK wall data exists in the DB
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

    const onSessionMarkerPress = (id) => {
        // TODO: redirect to list of sessions for this wall
    };

    const onWallMarkerPress = (id) => {
        // TODO: redirect to add session to this wall
    };

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
                {userSessionWalls.map(location => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: Number(location.lat), longitude: Number(location.long) }}
                        title={location.name}
                        description={`Number of sessions at this location: ${location.session_count}`}
                        onPress={(e) => onSessionMarkerPress(location.id)}
                    >
                        <View style={mapStyles.userMarker}>
                            <Text style={mapStyles.userMarkerText}>{location.session_count}</Text>
                        </View>
                        <FontAwesome6 name="person-falling" color={'blue'} size={24} />
                    </Marker>
                ))}
                {filteredWalls.map(location => (
                    <Marker
                        key={location.id}
                        coordinate={{ latitude: Number(location.lat), longitude: Number(location.long) }}
                        title={location.name}
                        onPress={(e) => onWallMarkerPress(location.id)}
                    >
                        <FontAwesome name="map-marker" size={30} color="red" />
                    </Marker>
                ))}
            </MapView>
    );
}
