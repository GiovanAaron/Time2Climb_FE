import { useState } from 'react';

import { Modal, Alert, View, Text, Pressable, ActivityIndicator } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ButtonAction from './ButtonAction';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TimerPickerModal } from "react-native-timer-picker";

import SelectorWrapper from './SelectorWrapper'

import dayjs from 'dayjs';

import styles from "../style-sheets/session-style"
import appStyles from "../style-sheets/app-style"


export default function SessionInfo({ editSession, setEditSession }) {

    const [sessionWall, setSessionWall] = useState(null)

    const [sessionDate, setSessionDate] = useState(null);
    const [sessionTime, setSessionTime] = useState(null);
    const [sessionDuration, setSessionDuration] = useState(null);

    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    const [durationPickerOpen, setDurationPickerOpen] = useState(false);

    const [savingSession, setSavingSession] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

    let formattedDate, formattedTime, formattedWall, formattedDuration;
    sessionDate ? formattedDate = dayjs(sessionDate).format('DD/MM/YYYY') : formattedDate = "-";
    sessionTime ? formattedTime = dayjs(sessionTime).format('HH:mm:ss') : formattedTime = "-";
    sessionWall ? formattedWall = sessionWall : formattedWall = "-";
    sessionDuration ? formattedDuration = sessionDuration : formattedDuration = "-";


    const handlePressEditButton = () => {
        setEditSession(!editSession)
    }

    const handlePressDeleteButton = () => {
        setDeleteModalVisible(true);
    }

    const handleConfirmDelete = () => {
        Alert.alert('Session deleted!', '')
        setDeleteModalVisible(false);
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
        if (event.type === 'set') {
            setSessionTime(selectedTime);
        }
    }

    const handleDurationConfirmation = (pickedDuration) => {
        setSessionDuration(formatTime(pickedDuration));
        setDurationPickerOpen(false);
    }

    const handleWallChange = (wall) => {
        setSessionWall(wall.label)
    }

    const handleSessionSave = () => {

        if (sessionWall && sessionDate && sessionTime && sessionDuration) {
            setSavingSession(true);
        } else {
            Alert.alert('Missing data', 'Please complete all fields before saving')
        }

    }

    let climbingWallIndex = 0;
    const climbingWallData = [
        { key: climbingWallIndex++, section: true, label: 'Walls' },
        { key: climbingWallIndex++, label: 'Climbing Works', value: 1 },
        { key: climbingWallIndex++, label: 'Sheffield Depot', value: 2 },
        { key: climbingWallIndex++, label: 'Sheffield Hanger', value: 3 },
        { key: climbingWallIndex++, label: 'Nottingham Depot', value: 4 }
    ];

    return (

        <View style={styles.sectionContainer}>

            <TimerPickerModal
                visible={durationPickerOpen}
                setIsVisible={setDurationPickerOpen}
                onConfirm={handleDurationConfirmation}
                modalTitle="Session duration"
                onCancel={() => setDurationPickerOpen(false)}
                closeOnOverlayPress
                hideSeconds={true}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisible}
                onRequestClose={() => setDeleteModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={[styles.modalText, { color: 'red', fontSize: 20 }]}>Confirm delete session?</Text>
                        <Text style={[styles.modalText, { fontSize: 16 }]}>This cannot be undone</Text>
                        <View style={styles.modalOptions}>
                            <Pressable onPress={() => setDeleteModalVisible(false)} hitSlop={50}>
                                <Text style={styles.modalOptionsText}>Cancel</Text>
                            </Pressable>
                            <Pressable onPress={handleConfirmDelete} hitSlop={50}>
                                <Text style={styles.modalOptionsText}>Confirm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </Modal>


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
                <Text style={appStyles.h2}>Session Info
                </Text>

                {editSession ?
                    <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                        <ButtonAction
                            icon={<Ionicons name="trash-sharp" size={24} color="red" />}
                            onPress={handlePressDeleteButton}
                        />
                        <ButtonAction
                            icon={<MaterialCommunityIcons name="pencil-off-outline" size={24} color="blue" />}
                            onPress={handlePressEditButton} />
                    </View>
                    :
                    <ButtonAction
                        icon={<MaterialCommunityIcons name="pencil-outline" size={24} color="blue" />}
                        onPress={handlePressEditButton}
                    />
                }
            </View>

            <View style={styles.sessionInfoContainer}>

                <Text style={styles.sessionInfoLabel}>Climbing Wall</Text>

                <SelectorWrapper data={climbingWallData} disabled={!editSession} handler={handleWallChange}>
                    <View style={editSession ? styles.sessionInfoBox : styles.sessionInfoBox}>
                        <Text style={styles.sessionInfoItem}>
                            {formattedWall}
                        </Text>
                        {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                    </View>
                </SelectorWrapper>

                <Text style={styles.sessionInfoLabel}>Session date</Text>
                <Pressable onPress={showDatePicker} disabled={!editSession}>
                    <View style={editSession ? styles.sessionInfoBox : styles.sessionInfoBox}>
                        <Text style={styles.sessionInfoItem}>
                            {formattedDate}
                        </Text>
                        {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                    </View>
                </Pressable>

                <Text style={styles.sessionInfoLabel}>Session start time</Text>
                <Pressable onPress={showTimePicker} disabled={!editSession}>
                    <View style={editSession ? styles.sessionInfoBox : styles.sessionInfoBox}>
                        <Text style={styles.sessionInfoItem}>
                            {formattedTime}
                        </Text>
                        {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                    </View>
                </Pressable>

                <Text style={styles.sessionInfoLabel}>Session duration</Text>
                <Pressable onPress={showDurationPicker} disabled={!editSession}>
                    <View style={editSession ? styles.sessionInfoBox : styles.sessionInfoBox}>
                        <Text style={styles.sessionInfoItem}>
                            {formattedDuration}
                        </Text>
                        {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                    </View>
                </Pressable>

                <Text style={styles.sessionInfoLabel}>Number of climbs recorded</Text>
                <Text style={styles.sessionInfoItem}>
                    2 Climbs
                    {/* {
                        climbList.length > 1 ?
                          climbList.length + ' climbs' :
                          climbList.length + ' climb'
                    } */}
                </Text>

                {editSession && savingSession &&
                    < ActivityIndicator size={"large"} color={"#007AFF"} style={{ marginVertical: 10 }} />}
                {editSession && !savingSession &&
                    < Pressable onPress={handleSessionSave}>
                        <Text
                            style={sessionWall && sessionDate && sessionTime && sessionDuration ?
                                styles.saveSessionButton :
                                [styles.saveSessionButton, styles.saveButtonNull]
                            }
                        >
                            Save session
                        </Text>
                    </Pressable>}


            </View >
        </View >

    )
}