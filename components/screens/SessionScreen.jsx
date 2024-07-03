import { useState } from 'react';

import { Button, Alert, View, Text, Pressable, StatusBar, ScrollView, Modal } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TimerPickerModal } from "react-native-timer-picker";
import ModalSelector from 'react-native-modal-selector'

import dayjs from 'dayjs';

import styles from "../../style-sheets/session-style"
import appStyles from "../../style-sheets/app-style"

let climbingWallIndex = 0;
const climbingWallData = [
  { key: climbingWallIndex++, section: true, label: 'Walls' },
  { key: climbingWallIndex++, label: 'Climbing Works' },
  { key: climbingWallIndex++, label: 'Sheffield Depot' },
  { key: climbingWallIndex++, label: 'Sheffield Hanger' },
  { key: climbingWallIndex++, label: 'Nottingham Depot' }
];

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

export default function SessionScreen({ navigation }) {

  const [sessionWall, setSessionWall] = useState('-')

  const [editSession, setEditSession] = useState(false);

  const [sessionDate, setSessionDate] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState("-");

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [durationPickerOpen, setDurationPickerOpen] = useState(false);

  let formattedDate, formattedTime;
  sessionDate ? formattedDate = dayjs(sessionDate).format('DD/MM/YYYY') : formattedDate = "-";
  sessionTime ? formattedTime = dayjs(sessionTime).format('HH:mm:ss') : formattedTime = "-";

  const [addClimbOpen, setAddClimbOpen] = useState(false);

  const handlePressEditButton = () => {
    setEditSession(!editSession)
  }

  const showDatePicker = () => {
    setDatePickerOpen(true);
  }

  const showTimePicker = () => {
    setTimePickerOpen(true);
  }

  const showDurationPicker = () => {
    setDurationPickerOpen(true);
  }

  const handleDateChange = (event, selectedDate) => {
    setDatePickerOpen(false);
    if (event.type === 'set') {
      setSessionDate(selectedDate);
    }
  }

  const handleTimeChange = (event, selectedTime) => {
    setTimePickerOpen(false);
    console.log(sessionTime)
    if (event.type === 'set') {
      console.log(selectedTime);
      setSessionTime(selectedTime);
    }
  }

  const formatTime = ({
    hours,
    minutes,
  }) => {
    let timeParts = "";

    if (hours !== undefined) {
      timeParts += (hours.toString() + " hrs ");
    }
    if (minutes !== undefined) {
      timeParts += (minutes.toString() + " mins");
    }
    return timeParts;
  };

  const handleDurationConfirmation = (pickedDuration) => {
    console.log(formatTime(pickedDuration))
    setSessionDuration(formatTime(pickedDuration));
    setDurationPickerOpen(false);
  }

  const handleWallChange = (wall) => {
    console.log(wall.label)
    console.log(sessionWall)
    setSessionWall(wall.label)
  }

  const handleSessionSave = () => {
    console.log("save the data!!!")
  }

  const handlePressAddClimb = () => {
    setAddClimbOpen(true);
  }

  const handleCloseAddClimb = () => {
    setAddClimbOpen(false);
  }

  return (
    <ScrollView>

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={addClimbOpen}
        onRequestClose={handleCloseAddClimb}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleCloseAddClimb(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}

      <View style={styles.screenContainer}>
        <StatusBar hidden={true} />

        <TimerPickerModal
          visible={durationPickerOpen}
          setIsVisible={setDurationPickerOpen}
          onConfirm={handleDurationConfirmation}
          modalTitle="Session duration"
          onCancel={() => setDurationPickerOpen(false)}
          closeOnOverlayPress
          hideSeconds={true}
        />

        {datePickerOpen && <
          RNDateTimePicker
          value={new Date()}
          onChange={handleDateChange}
        />}

        {timePickerOpen && <
          RNDateTimePicker
          mode="time"
          value={new Date()}
          onChange={handleTimeChange}
        />}

        <View style={styles.headerInfoBox}>
          <Text style={appStyles.h3}>Session Info</Text>
          {editSession ?
            <Pressable onPress={handlePressEditButton} hitSlop={100}>
              <MaterialCommunityIcons name="pencil-off-outline" size={24} color="black" />
            </Pressable> :
            <Pressable onPress={handlePressEditButton} hitSlop={100}>
              <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
            </Pressable>
          }
        </View>

        <View style={styles.sessionInfoContainer}>

          <View>

            <Text style={styles.sessionInfoLabel}>Climbing Wall</Text>
            <ModalSelector
              data={climbingWallData}
              disabled={!editSession}
              cancelText="Cancel"
              initValue="Climbing Works"
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={handleWallChange}
            >
              <View style={editSession ? styles.sessionInfoEditBox : styles.sessionInfoBox}>
                <Text style={styles.sessionInfoItem}>
                  {sessionWall}
                </Text>
                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
              </View>
            </ModalSelector>

            <Text style={styles.sessionInfoLabel}>Session date</Text>
            <Pressable onPress={showDatePicker} disabled={!editSession}>
              <View style={editSession ? styles.sessionInfoEditBox : styles.sessionInfoBox}>
                <Text style={styles.sessionInfoItem}>{formattedDate}</Text>
                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
              </View>
            </Pressable>

            <Text style={styles.sessionInfoLabel}>Session start time</Text>
            <Pressable onPress={showTimePicker} disabled={!editSession}>
              <View style={editSession ? styles.sessionInfoEditBox : styles.sessionInfoBox}>
                <Text style={styles.sessionInfoItem}>{formattedTime}</Text>
                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
              </View>
            </Pressable>

            <Text style={styles.sessionInfoLabel}>Session duration</Text>
            <Pressable onPress={showDurationPicker} disabled={!editSession}>
              <View style={editSession ? styles.sessionInfoEditBox : styles.sessionInfoBox}>
                <Text style={styles.sessionInfoItem}>{sessionDuration}</Text>
                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
              </View>
            </Pressable>


            <Text style={styles.sessionInfoLabel}>Number of climbs recorded</Text>
            <Text style={styles.sessionInfoItem}>{
              climbList.length > 1 ?
                climbList.length + ' climbs' :
                climbList.length + ' climb'}
            </Text>

            {editSession &&
              <Pressable onPress={handleSessionSave}>
                <View style={styles.saveButton}>
                  <Text style={styles.sessionInfoLabel}>Save changes</Text>
                </View>
              </Pressable>}

          </View>
        </View >

        <View style={styles.headerInfoBox}>
          <Text style={appStyles.h3}>Climbs</Text>
          <Pressable onPress={handlePressAddClimb} hitSlop={100}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </Pressable>
        </View>


        <View style={styles.climbListContainer}>

          <View style={styles.climbContainer}>
            <Text style={styles.climbItem}>Climb type</Text>
            <Text style={styles.climbItem}>Grade</Text>
            <Text style={styles.climbItem}>Outcome</Text>
          </View>

          {climbList.map((climb) => (
            <View style={styles.climbContainer} key={climb.climb_id}>
              <Text style={styles.climbItem}>{climb.climb_type_label}</Text>
              <Text style={styles.climbItem}>{climb.grade_label}</Text>
              <Text style={styles.climbItem}>{climb.climb_outcome_label}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>

  )
}