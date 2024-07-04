import { useState } from 'react';

import { View, Text, Pressable, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TimerPickerModal } from "react-native-timer-picker";

import SelectorWrapper from '../SelectorWrapper'

import dayjs from 'dayjs';

import styles from "../../style-sheets/session-style"
import appStyles from "../../style-sheets/app-style"

import { climbList, climbTypeList, outcomesList, gradesList } from './screenSessionData'

export default function SessionScreen({ navigation }) {

  const [sessionWall, setSessionWall] = useState('-')

  const [editSession, setEditSession] = useState(false);

  const [sessionDate, setSessionDate] = useState(null);
  const [sessionTime, setSessionTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState("-");

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [durationPickerOpen, setDurationPickerOpen] = useState(false);
  const [addClimbOpen, setAddClimbOpen] = useState(false);

  const [climbType, setClimbType] = useState(null);
  const [climbGrade, setClimbGrade] = useState(null);
  const [climbOutcome, setClimbOutcome] = useState(null);

  const [newClimb, setNewClimb] = useState({})

  const [savingSession, setSavingSession] = useState(false)
  const [savingClimb, setSavingClimb] = useState(false)

  const climbOutcomeLookup = {
    "Onsight (first attempt - no beta)": "Onsight",
    "Flash (first attempt - with beta)": "Flash",
    "Redpoint (multiple attempts)": "Redpoint",
    "Repeat ascent": "Repeat",
    "Still working on it": "Working"
  }

  const climbTypeToGradeSystemLookup = {
    1: 2,
    2: 3,
    3: 1,
    4: 1,
    5: 1
  }

  let formattedDate, formattedTime;
  sessionDate ? formattedDate = dayjs(sessionDate).format('DD/MM/YYYY') : formattedDate = "-";
  sessionTime ? formattedTime = dayjs(sessionTime).format('HH:mm:ss') : formattedTime = "-";

  let filteredGradesList = gradesList;
  if(climbType) {
    filteredGradesList = gradesList.filter(grade => {
      return grade.category === climbTypeToGradeSystemLookup[climbType.value];
    })
  }

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
    setSessionDuration(formatTime(pickedDuration));
    setDurationPickerOpen(false);
  }

  const handleWallChange = (wall) => {
    setSessionWall(wall.label)
  }

  const handleSessionSave = () => {
    setSavingSession(true);
  }

  const handleClimbSave = () => {
    setSavingClimb(true);
  }

  const handlePressAddClimb = () => {
    setAddClimbOpen(true);
  }

  const handleCloseAddClimb = () => {
    setAddClimbOpen(false);
  }

  const handleSelectClimbType = (type) => {
    setClimbType(type)
    setNewClimb({ ...newClimb, climb_id: type.value })
  }

  const handleSelectClimbGrade = (grade) => {
    setClimbGrade(grade.label)
    setNewClimb({ ...newClimb, grade_id: grade.value })
  }

  const handleSelectClimbOutcome = (outcome) => {
    setClimbOutcome(outcome.label)
    setNewClimb({ ...newClimb, climb_outcome_id: outcome.value })
  }

  let climbingWallIndex = 0;
  const climbingWallData = [
    { key: climbingWallIndex++, section: true, label: 'Walls' },
    { key: climbingWallIndex++, label: 'Climbing Works', value: 1 },
    { key: climbingWallIndex++, label: 'Sheffield Depot', value: 2 },
    { key: climbingWallIndex++, label: 'Sheffield Hanger', value: 3 },
    { key: climbingWallIndex++, label: 'Nottingham Depot', value: 4 }
  ];

  let climbTypeData = climbTypeList.map(climbType => {
    return { key: climbType.id, label: climbType.description, value: climbType.id }
  })
  climbTypeData.unshift({ key: 0, section: true, label: 'Type of climbing' })

  let climbGradesData = filteredGradesList.map(grade => {
    return { key: grade.id, label: grade.grade, value: grade.id }
  })
  climbGradesData.unshift({ key: 0, section: true, label: 'Grade' })

  let climbOutcomesData = outcomesList.map(outcome => {
    return { key: outcome.id, label: outcome.description, value: outcome.id }
  })
  climbOutcomesData.unshift({ key: 0, section: true, label: 'Outcome' })

  let climbTypeBox =
    <View style={styles.climbIconBox}>
      <MaterialCommunityIcons name="carabiner" size={32} color="grey" />
      <Text style={styles.climbItem}>Type</Text>
      <Ionicons name="caret-down-outline" size={15} color="black" />
    </View>

  if (climbType) {
    climbTypeBox =
      <View style={styles.climbIconBox}>
        <Text style={[styles.climbItem, { color: 'red', fontWeight: 'bold' }]}>{climbType.label}</Text>
        <Ionicons name="caret-down-outline" size={15} color="black" />
      </View>
  }

  let climbGradeBox =
    <View style={styles.climbIconBox}>
      <MaterialCommunityIcons name="arm-flex-outline" size={32} color={climbType ? "orange" : 'lightgrey'} />
      <Text style={[styles.climbItem, { color: climbType ? "black" : 'lightgrey' }]}>Grade</Text>
      <Ionicons name="caret-down-outline" size={15} color={climbType ? "black" : 'lightgrey'} />
    </View>

  if (climbGrade) {
    climbGradeBox =
      <View style={styles.climbIconBox}>
        <Text style={[styles.climbItem, { color: 'orange', fontWeight: 'bold' }]}>{climbGrade}</Text>
        <Ionicons name="caret-down-outline" size={15} color="black" />
      </View>
  }

  let climbOutcomeBox =
    <View style={styles.climbIconBox}>
      <MaterialCommunityIcons name="check-bold" size={32} color={climbType ? "green" : 'lightgrey'} />
      <Text style={[styles.climbItem, { color: climbType ? "black" : 'lightgrey' }]}>Outcome</Text>
      <Ionicons name="caret-down-outline" size={15} color={climbType ? "black" : 'lightgrey'} />
    </View>

  if (climbOutcome) {
    climbOutcomeBox =
      <View style={styles.climbIconBox}>
        <Text style={[styles.climbItem, { color: 'green', fontWeight: 'bold' }]}>{climbOutcomeLookup[climbOutcome]}</Text>
        <Ionicons name="caret-down-outline" size={15} color="black" />
      </View>
  }

  return (
    <ScrollView>

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

            <SelectorWrapper data={climbingWallData} disabled={!editSession} handler={handleWallChange}>
              <View style={editSession ? styles.sessionInfoEditBox : styles.sessionInfoBox}>
                <Text style={styles.sessionInfoItem}>
                  {sessionWall}
                </Text>
                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
              </View>
            </SelectorWrapper>

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
              savingSession ?
              <ActivityIndicator size={"large"} color={"#007AFF"} style={{ marginVertical: 10 }
              } /> :
              <Pressable onPress={handleSessionSave}>
                <View style={styles.saveSessionButton}>
                  <Text style={styles.sessionInfoLabel}>Save changes</Text>
                </View>
              </Pressable>
            }

          </View>
        </View >

        <View style={styles.headerInfoBox}>
          <Text style={appStyles.h3}>Climbs</Text>
          {addClimbOpen ?
            < Pressable onPress={handleCloseAddClimb} hitSlop={100}>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </Pressable> :
            < Pressable onPress={handlePressAddClimb} hitSlop={100}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </Pressable>
          }
        </View>

        <View style={styles.climbListContainer}>

          {addClimbOpen &&
            <View>
              <View style={styles.climbContainer}>

                <SelectorWrapper data={climbTypeData} disabled={false} handler={handleSelectClimbType}>
                  {climbTypeBox}
                </SelectorWrapper>

                <SelectorWrapper data={climbGradesData} disabled={!climbType} handler={handleSelectClimbGrade}>
                  {climbGradeBox}
                </SelectorWrapper>

                <SelectorWrapper data={climbOutcomesData} disabled={!climbType} handler={handleSelectClimbOutcome}>
                  {climbOutcomeBox}
                </SelectorWrapper>

              </View>

              {savingClimb ?
                <ActivityIndicator size={"large"} color={"#007AFF"} style={{ marginVertical: 10 }} /> :
                <Pressable onPress={handleClimbSave}>
                  <Text style={styles.saveClimbButton}>Save climb</Text>
                </Pressable>
              }


            </View>
          }

          {climbList.map((climb) => (
            <View style={styles.climbContainer} key={climb.climb_id}>
              <View style={styles.climbIconBox}>
                <Text style={styles.climbItem}>{climb.climb_type_label}</Text>
              </View>

              <View style={styles.climbIconBox}>
                <Text style={styles.climbItem}>{climb.grade_label}</Text>
              </View>

              <View style={styles.climbIconBox}>
                <Text style={styles.climbItem}>{climbOutcomeLookup[climb.climb_outcome_label]}</Text>
              </View>

            </View>
          ))}
        </View>
      </View>
    </ScrollView >

  )
}