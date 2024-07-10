import ClimbList from '../ClimbList'
import SessionInfo from '../SessionInfo'
import { View, ScrollView, ImageBackground } from "react-native";
import styles from "../../style-sheets/session-style"
import { useState, useEffect } from 'react';
import appStyles from '../../style-sheets/app-style';
import { useRoute } from '@react-navigation/native';

export default function SessionScreen({ navigation }) {

  const route = useRoute();
  let sessionData = {}
  if(route.params) sessionData = route.params.sessionData

  const [editSession, setEditSession] = useState(false);
  const [sessionId, setSessionId] = useState(sessionData ? sessionData.session_id : null);
  
  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>
        <View style={styles.screenContainer}>

          <View style={styles.middleBackground}> 
        
          <SessionInfo editSession={editSession} setEditSession={setEditSession} sessionData={sessionData} setSessionId={setSessionId}/>
          <ClimbList editSession={editSession} sessionId={sessionId}/>

          </View>
          
        </View>
      </ScrollView >
    </ImageBackground>
  )
}