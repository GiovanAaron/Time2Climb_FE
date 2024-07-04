import ClimbList from '../ClimbList'
import SessionInfo from '../SessionInfo'
import { View, ScrollView } from "react-native";
import styles from "../../style-sheets/session-style"

export default function SessionScreen({ navigation }) {

  return (
    <ScrollView>

      <View style={styles.screenContainer}>
       
        <SessionInfo />
        <ClimbList />
        
      </View>
    </ScrollView >

  )
}