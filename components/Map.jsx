// import React from "react";
// import { Button, View, Text, StyleSheet} from "react-native";
// import MapView, { Marker } from 'react-native-maps';

// const largeView = {
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
// }

// const smallView = {
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
// }

// export default function Map({ mapData }) {

//     const userLocations = mapData.userLocations;
//     const gymLocations = mapData.gymLocations;
//     const mapCentreLatitude = mapData.mapCentreLatitude;
//     const mapCentreLongitude = mapData.mapCentreLongitude;

//     let latitudeDelta;
//     let longitudeDelta;
//     if (mapData.mapLarge) {
//         latitudeDelta = largeView.latitudeDelta;
//         longitudeDelta = largeView.longitudeDelta;
//     }
//     else {
//         latitudeDelta = smallView.latitudeDelta;
//         longitudeDelta = smallView.longitudeDelta;
//     }

//     return (
//         <View style={styles.container}>
//             <Text>sd test</Text>
//             {/* <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     mapCentreLatitude: mapCentreLatitude,
//                     mapCentreLongitude: mapCentreLongitude,
//                     latitudeDelta: latitudeDelta,
//                     longitudeDelta: longitudeDelta
//                 }}
//             >
//             {gymLocations.map(location => (
//                 <Marker
//                     key={location.id}
//                     coordinate={{ latitude: location.latitude, longitude: location.longitude }}
//                     title={`Location ${location.number}`}
//                     description={`This is location number ${location.number}`}
//                 >
//                     <View style={styles.marker}>
//                         <Text style={styles.markerText}>{location.number}</Text>
//                     </View>
//                 </Marker>
//             ))}
//             </MapView> */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
//   marker: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   markerText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
