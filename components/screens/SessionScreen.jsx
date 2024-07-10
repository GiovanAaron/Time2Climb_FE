import ClimbList from '../ClimbList'
import SessionInfo from '../SessionInfo'
import { View, ScrollView, ImageBackground } from "react-native";
import styles from "../../style-sheets/session-style"
import { useState } from 'react';
import appStyles from '../../style-sheets/app-style';

export default function SessionScreen({ navigation }) {

  const [editSession, setEditSession] = useState(false);



  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>
        <View style={styles.screenContainer}>

          <View style={styles.middleBackground}> 
        
          <SessionInfo editSession={editSession} setEditSession={setEditSession}/>
          <ClimbList editSession={editSession}/>

          </View>
          
        </View>
      </ScrollView >
    </ImageBackground>
  )
}