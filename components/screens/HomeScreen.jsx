import React from "react";
import { ScrollView, View, Text, Pressable, ImageBackground } from "react-native";
import Map from '../Map';
import Dashboard from '../Dashboard';
import styles from '../../style-sheets/home-style';
import appStyles from "../../style-sheets/app-style";
import { useMapData } from '../../contexts/map-context';

export default function HomeScreen({ navigation }) {

    const { mapData } = useMapData();

    mapData.navigation = navigation;
    mapData.zoomed = true;
    mapData.miniView = true;

    return (
        <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
            <ScrollView>
                <View style={appStyles.screenContainer}>

                    <View style={appStyles.sectionContainer}>

                        <Text style={appStyles.h1}>(Time To Climb Logo)</Text>

                        <Pressable style={styles.mapContainer} onPress={() => navigation.navigate('Map Screen')}>
                            <Map />
                        </Pressable>

                        <Dashboard navigation={navigation} />

                        <View style={styles.keyStatsContainer}>
                            <Text style={[appStyles.h3, appStyles.lightModeFont, { marginBottom: 10 }]}>Latest Session</Text>
                            <Text style={styles.stat}>
                                <Text style={{ fontWeight: 'bold' }}>6/7/2024</Text> - 2 hours and 15 minutes</Text>
                            <Text style={styles.stat}>At
                                <Text style={{ fontWeight: 'bold' }}> The Climbing Works</Text>
                            </Text>
                            <Text style={styles.stat}>You climbed
                                <Text style={{ fontWeight: 'bold' }}> 3 boulders </Text>
                                and
                                <Text style={{ fontWeight: 'bold' }}> 6 routes</Text>
                            </Text>
                        </View>

                        <View style={styles.keyStatsContainer}>
                            <Text style={[appStyles.h3, appStyles.lightModeFont, { marginBottom: 10 }]}>My Key Stats</Text>
                            <Text style={styles.stat}>
                                <Text style={{ fontWeight: 'bold' }}>Your most visited wall:{"\n"}</Text>
                                The Climbing Works
                            </Text>
                            <Text style={styles.stat}>
                                <Text style={{ fontWeight: 'bold' }}>Your longest session:{"\n"}</Text>
                                200 minutes
                            </Text>
                            <Text style={styles.stat}>
                                <Text style={{ fontWeight: 'bold' }}>Total climbs:{"\n"}</Text>
                                27
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}