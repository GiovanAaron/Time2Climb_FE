import { View, ScrollView, ImageBackground, Text, StyleSheet } from "react-native";
import styles from "../../style-sheets/session-style"
import { useState, useEffect } from 'react';
import appStyles from '../../style-sheets/app-style';
import { fetchUserWallSessions } from '../../utils/api';
import Session from '../Session';
import { center } from "@shopify/react-native-skia";

export default function WallSessionsScreen({ route, navigation }) {

  const { wall } = route.params;
  const [wallSessions, setWallSessions] = useState([]);
  console.log(wall,'--wall')

  useEffect(() => {
    fetchUserWallSessions(1, wall.id) // TODO: hardcoded user id until user functionality fully integrated
      .then(({userWallSessions}) => {
        console.log(userWallSessions, '--userWallSessions')
        setWallSessions(userWallSessions);
      })
      .catch((err) => {
        // TODO: display error screen
      });
  }, []);
 
  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <View style={wallScreensStyles.container}>
        <Text style={[appStyles.h2, wallScreensStyles.centerText]}>{wall.name}</Text>
        <ScrollView>
          <View style={[styles.screenContainer, styles.middleBackground]}>
              {wallSessions.map((sess) => {
                  return <Session key={sess.id} sessionData={sess} navigation={navigation} />;
              })}
          </View>
        </ScrollView >
      </View>
    </ImageBackground>
  )
}

const wallScreensStyles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginTop: 40
  },
  centerText: {
    // textAlign: 'center',
    // width: '100%'
  },
});