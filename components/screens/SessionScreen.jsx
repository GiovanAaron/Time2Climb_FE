import ClimbList from '../ClimbList'
import SessionInfo from '../SessionInfo'
import { View, ScrollView } from "react-native";
import styles from "../../style-sheets/session-style"
import { useState } from 'react';

export default function SessionScreen({ navigation }) {

  const [editSession, setEditSession] = useState(false);

  return (
    <ScrollView>

      <View style={styles.screenContainer}>
       
        <SessionInfo editSession={editSession} setEditSession={setEditSession}/>
        <ClimbList editSession={editSession}/>
        
      </View>
    </ScrollView >

  )
}