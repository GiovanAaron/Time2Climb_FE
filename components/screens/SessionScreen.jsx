import { useState } from 'react';

import { Button, View, Text, FlatList, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from 'react-native-ui-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from 'dayjs';

import styles from "../../style-sheets/session-style"
import appStyles from "../../style-sheets/app-style"

const climbList = [
  {
    climb_id: 1,
    session_id: 1,
    grade_id: 51,
    grade_label: '6b+',
    grade_system_id: 3,
    grade_system_label: 'Font',
    climb_type_id: 2,
    climb_type_label: 'Boulder (font)',
    climb_outcome_id: 1,
    climb_outcome_label: 'Onsight (first attempt - no beta)'
  },
  {
    climb_id: 2,
    session_id: 1,
    grade_id: 34,
    grade_label: 'V6',
    grade_system_id: 2,
    grade_system_label: 'V',
    climb_type_id: 1,
    climb_type_label: 'Boulder (V)',
    climb_outcome_id: 2,
    climb_outcome_label: 'Flash (first attempt - with beta)'
  }
]

const ClimbItem = ({ climb_type_label, grade_label, climb_outcome_label }) => {
  return (
    <View style={styles.climbContainer}>
      <Text style={styles.climbItem}>{climb_type_label}</Text>
      <Text style={styles.climbItem}>{grade_label}</Text>
      <Text style={styles.climbItem}>{climb_outcome_label}</Text>
    </View>
  )
}

const renderClimbItem = ({ item }) => (
  <ClimbItem
    climb_type_label={item.climb_type_label}
    grade_label={item.grade_label}
    climb_outcome_label={item.climb_outcome_label}
  />
)

const climbingWallList = ["Climbing Works", "Sheffield Depot", "Sheffield Hanger"]

export default function SessionScreen({ navigation }) {

  const [sessionWall, setSessionWall] = useState('Climbing Wall')

  const [sessionDate, setSessionDate] = useState(dayjs());
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [editSession, setEditSession] = useState(false);

  const handlePressEditButton = () => {
    setEditSession(!editSession)
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };


  const formattedDate = sessionDate.format('DD/MM/YYYY')

  const handleWallChange = (wall) => {
    setSessionWall(wall);
  }

  const handleDateChange = (newDate) => {
    setSessionDate(newDate.date);
  }

  const SessionInfoContainer = () => {
    return (
      <View style={styles.sessionInfoContainer}>
        <Text style={appStyles.h3}>Session Info</Text>
        <View>
          <Text style={styles.sessionInfoItem}>{sessionWall}</Text>
          <Text style={styles.sessionInfoItem}>{formattedDate}</Text>
          <Text style={styles.sessionInfoItem}>{'2 hours'}</Text>
          <Text style={styles.sessionInfoItem}>{
            climbList.length > 1 ?
              climbList.length + ' climbs' :
              climbList.length + ' climb'}
          </Text>
        </View>
      </View>
    )
  }

  const SessionInfoContainerForm = () => {
    return (
      <View style={styles.sessionInfoContainer}>
        <Text style={appStyles.h3}>Session Info</Text>
        <View>
          <Picker
            selectedValue={sessionWall}
            onValueChange={handleWallChange}
          >
            {climbingWallList.map(wall => {
              return <Picker.Item key={wall} label={wall} value={wall} />
            })}
          </Picker>
          {editSession ?
            <Button title="Show Date Picker" onPress={showDatePicker} /> :
            // <Button title={formattedDate} onPress={() => setDatePickerOpen(true)} /> :
            <Text style={styles.sessionInfoItem}>{formattedDate}</Text>
          }

          <Text style={styles.sessionInfoItem}>{'2 hours'}</Text>
          <Text style={styles.sessionInfoItem}>{
            climbList.length > 1 ?
              climbList.length + ' climbs' :
              climbList.length + ' climb'}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screenContainer}>

      <Button title="Edit session" onPress={handlePressEditButton} />

        <View style={styles.datePickerContainer}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          {/* <DateTimePicker
            mode="single"
            date={sessionDate}
            onChange={handleDateChange}
          /> */}
        </View>

      {editSession ? <SessionInfoContainerForm /> : <SessionInfoContainer />}

      <View style={styles.climbListContainer}>
        <Text style={appStyles.h3}>Climbs</Text>
        <FlatList
          data={climbList}
          renderItem={renderClimbItem}
          keyExtractor={(item) => item.climb_id}
        />
      </View>
    </View>
  )
}