import { View, ScrollView, ImageBackground } from "react-native";
import styles from "../../style-sheets/session-style"
import { useState, useEffect } from 'react';
import appStyles from '../../style-sheets/app-style';
import { fetchUserWallSessions } from '../../utils/api';

export default function SessionScreen({ navigation }) {

  const [wallSessions, setWallSessions] = useState([]);

  useEffect(() => {
    fetchUserWallSessions()
      .then((response) => {
        setWallSessions(response);
      })
      .catch((err) => {
        // TODO: display error screen
      });
  }, []);
 
  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>
        <View style={[styles.screenContainer, styles.middleBackground]}>
            {wallSessions.map((sess) => {
                return <Session key={sess.session_id} sessionData={sess} navigation={navigation} />;
            })}
        </View>
      </ScrollView >
    </ImageBackground>
  )
}