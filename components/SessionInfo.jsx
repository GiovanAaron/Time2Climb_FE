import { useState, useEffect } from 'react';

import { getSession } from './screens/screenSessionData'

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

    const [sessionId, setSessionId] = useState(1);
    const [sessionDuration, setSessionDuration] = useState(null);

    const [sessionInfo, setSessionInfo] = useState({})

    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    const [durationPickerOpen, setDurationPickerOpen] = useState(false);

    const [savingSession, setSavingSession] = useState(false)
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    useEffect(() => {
        getSession(1)
            .then((userSession) => {
                setSessionInfo({
                    ...sessionInfo,
                    wall_id: userSession.wall_id,
                    wall_name: "Climbing Works",
                    date: userSession.date,
                    duration_minutes: userSession.duration_minutes
                })
            })
            .catch((err) => {
                console.log("component err", err)
            })
    }, [])

    const formatTime = (minutes) => {

        if (minutes === 1) return "1 minute"
        if (minutes < 60) return minutes + " minutes"
     
        const hours = Math.floor(minutes / 60)
        let hoursText = hours + " hours"
        if (hours === 1) hoursText = hours + " hour"

        const extraMins = minutes % 60
        let minutesText = extraMins + " minutes"
        if (extraMins === 1) minutesText = extraMins + " minute"

        return `${hoursText} and ${minutesText}`

    };

    let formattedDate, formattedTime, formattedWall, formattedDuration;
    sessionInfo.date ? formattedDate = dayjs(sessionInfo.date).format('DD/MM/YYYY') : formattedDate = "-";
    sessionInfo.date ? formattedTime = dayjs(sessionInfo.date).format('HH:mm:ss') : formattedTime = "-";
    sessionInfo.wall_name ? formattedWall = sessionInfo.wall_name : formattedWall = "-";
    sessionInfo.duration_minutes ? formattedDuration = formatTime(sessionInfo.duration_minutes) : formattedDuration = "-";

    const handlePressEditButton = () => {
        setEditSession(!editSession)
    }

    const handlePressDeleteButton = () => {
        setDeleteModalVisible(true);
    }

    const handleConfirmDelete = () => {
        Alert.alert('Session deleted!', '')
        setDeleteModalVisible(false);
        deleteClimb()
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
            
            const year = dayjs(selectedDate).year()
            const month = dayjs(selectedDate).month()
            const date = dayjs(selectedDate).date()
            console.log("here", year, month, date);
            
            const newDate = dayjs(sessionInfo.date)
            .year(year)
            .month(month)
            .date(date)
            
            setSessionInfo( {...sessionInfo, date: newDate} );
        }
    }

    const handleTimeChange = (event, selectedTime) => {
        setTimePickerOpen(false);
        if (event.type === 'set') {

            const hours = dayjs(selectedTime).hour()
            const minutes = dayjs(selectedTime).minute()
            const newDate = dayjs(sessionInfo.date)
                .hour(hours)
                .minute(minutes)

            setSessionInfo( {...sessionInfo, date: newDate} );
        }
    }

    const handleDurationConfirmation = (pickedDuration) => {

        const minutes = (pickedDuration.hours * 60) + pickedDuration.minutes

        setSessionInfo({...sessionInfo, duration_minutes: minutes});
        setDurationPickerOpen(false);
    }

    const handleWallChange = (wall) => {
        setSessionInfo({ ...sessionInfo, wall_name: wall.label })
    }

    const handleSessionSave = () => {

        if (sessionInfo.wall_name && sessionInfo.date && sessionDuration) {
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

                {editSession && savingSession &&
                    < ActivityIndicator size={"large"} color={"#007AFF"} style={{ marginVertical: 10 }} />}
                {editSession && !savingSession &&
                    < Pressable onPress={handleSessionSave}>
                        <Text
                            style={sessionInfo.wall_name && sessionInfo.date && sessionInfo.duration_minutes ?
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