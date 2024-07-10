import { getClimbsBySessionId, postClimb, deleteClimb, climbTypeList, outcomesList, gradesList } from './screens/screenSessionData'
import { Modal, Alert, View, Text, Pressable, ActivityIndicator } from "react-native";
import { useEffect, useState } from 'react';
import _ from 'lodash';
import ButtonAction from './ButtonAction';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "../style-sheets/session-style"
import appStyles from "../style-sheets/app-style"

import SelectorWrapper from './SelectorWrapper'

export default function ClimbList({ editSession }) {

    const [sessionId, setSessionId] = useState(1);
    const [climbList, setClimbList] = useState([]);

    const [climbType, setClimbType] = useState(null);
    const [climbGrade, setClimbGrade] = useState(null);
    const [climbOutcome, setClimbOutcome] = useState(null);

    const [newClimb, setNewClimb] = useState({})
    const [savingClimb, setSavingClimb] = useState(false)
    const [addClimbOpen, setAddClimbOpen] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const [newClimbsPosted, setNewClimbsPosted] = useState(0);
    const [climbsDeleted, setClimbsDeleted] = useState(0);
    const [deleteClimbId, setDeleteClimbId] = useState(null);

    useEffect(() => {
        // console.log("useEffect activated")
        getClimbsBySessionId(sessionId)
            .then((data) => {
                setClimbList(data.climbs)
            })
            .catch((err) => {
                console.log("component err", err)
            })

        setNewClimb({ ...newClimb, session_id: sessionId })
    }, [newClimbsPosted, climbsDeleted])

    const climbOutcomeShortLabelLookup = {
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

    let filteredGradesList = gradesList;
    if (climbType) {
        filteredGradesList = gradesList.filter(grade => {
            return grade.category === climbTypeToGradeSystemLookup[climbType.value];
        })
    }

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
        <View style={[styles.climbIconBox, { borderColor: 'red' }]}>
            {climbType ?
                <Text style={[styles.climbItem, { color: 'red', fontWeight: 'bold' }]}>{climbType.label}</Text> :
                <View style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="carabiner" size={32} color="grey" />
                    <Text style={styles.climbItem}>Type</Text>
                </View>
            }
            <Ionicons name="caret-down-outline" size={15} color="black" />
        </View>

    let climbGradeBox =
        <View style={[styles.climbIconBox, { borderColor: 'orange' }]}>
            <MaterialCommunityIcons name="arm-flex-outline" size={32} color={climbType ? "orange" : 'lightgrey'} />
            <Text style={[styles.climbItem, { color: climbType ? "black" : 'lightgrey' }]}>Grade</Text>
            <Ionicons name="caret-down-outline" size={15} color={climbType ? "black" : 'lightgrey'} />
        </View>

    if (climbGrade) {
        climbGradeBox =
            <View style={[styles.climbIconBox, { borderColor: 'orange' }]}>
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
                <Text style={[styles.climbItem, { color: 'green', fontWeight: 'bold' }]}>{climbOutcomeShortLabelLookup[climbOutcome]}</Text>
                <Ionicons name="caret-down-outline" size={15} color="black" />
            </View>
    }

    const handleClimbSave = () => {
        if (climbType && climbGrade && climbOutcome) {
            setSavingClimb(true);
            postClimb(newClimb)
                .then((response) => {
                    setSavingClimb(false);
                    setNewClimbsPosted(newClimbsPosted + 1)

                    setClimbType(null);
                    setClimbGrade(null);
                    setClimbOutcome(null);

                    Alert.alert('Success!', 'Your new climb has been added')

                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Alert.alert('Missing data', 'Please complete all fields before saving')
        }
    }

    const handlePressDeleteClimbButton = (id) => {
        setDeleteModalVisible(true)
        setDeleteClimbId(id)
    }

    const handleConfirmDelete = () => {
        Alert.alert('Climb deleted!', '')
        setDeleteModalVisible(false);
        console.log(deleteClimbId)
        deleteClimb(deleteClimbId)
            .then(() => {
                console.log("climb deleted")
                setClimbsDeleted(climbsDeleted + 1)
            })
    }

    const handleToggleAddClimb = () => {
        setAddClimbOpen(!addClimbOpen);
    }


    const handleSelectClimbType = (type, id) => {
        if (id) {
            const climbListLocalCopy = _.cloneDeep(climbList);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.id === id
            })
            selectedClimb.type_label = type.label
            selectedClimb.type_id = type.value

            setClimbList(climbListLocalCopy)

        } else {
            setClimbType(type)
            setNewClimb({ ...newClimb, type_id: type.value, type_label: type.label })
        }
    }

    const handleSelectClimbGrade = (grade, id) => {
        if (id) {
            const climbListLocalCopy = _.cloneDeep(climbList);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.id === id
            })
            selectedClimb.grade_label = grade.label
            selectedClimb.grade_id = grade.value

            setClimbList(climbListLocalCopy)

        } else {
            setClimbGrade(grade.label)
            setNewClimb({ ...newClimb, grade_id: grade.value, grade_label: grade.label })
        }
    }

    const handleSelectClimbOutcome = (outcome, id) => {
        if (id) {
            const climbListLocalCopy = _.cloneDeep(climbList);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.id === id
            })
            selectedClimb.outcome_label = outcome.label
            selectedClimb.climb_outcome_id = outcome.value

            setClimbList(climbListLocalCopy)

        } else {
            setClimbOutcome(outcome.label)
            setNewClimb({ ...newClimb, climb_outcome_id: outcome.value, outcome_label: outcome.label })
        }

    }

    return (
        <View style={styles.sectionContainer}>

            <View style={styles.climbCountContainer}>
                <Text style={styles.sessionInfoLabel}>Number of climbs recorded</Text>
                <Text style={styles.sessionInfoItem}>
                    {
                        climbList.length > 1 ?
                            climbList.length + ' climbs' :
                            climbList.length + ' climb'
                    }
                </Text>
            </View>

            <View style={styles.headerInfoBox}>
                <Text style={appStyles.h2}>Climbs</Text>
                {editSession &&
                    <View>
                        {addClimbOpen ?
                            <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                                <Text>Hide</Text>
                                <ButtonAction
                                    icon={<Ionicons name="remove-circle-outline" size={24} color="black" />}
                                    onPress={handleToggleAddClimb}
                                />
                            </View> :
                            <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                                <Text>Save climb</Text>
                                <ButtonAction
                                    icon={<Ionicons name="add-circle-outline" size={24} color="black" />}
                                    onPress={handleToggleAddClimb}
                                />
                            </View>
                        }
                    </View>
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
                                <Text
                                    style={climbType && climbOutcome && climbGrade ?
                                        styles.saveClimbButton :
                                        [styles.saveClimbButton, styles.saveButtonNull]
                                    }
                                >
                                    Add climb
                                </Text>
                            </Pressable>
                        }


                    </View>
                }

                {climbList.map((climb) => (

                    <View key={climb.id}>

                        <View style={styles.climbContainer}>

                            <View style={[styles.climbIconBox, { borderColor: 'red' }]}>
                                <SelectorWrapper data={climbTypeData} disabled={!editSession} handler={(type) => handleSelectClimbType(type, climb.id)}>
                                    <Text style={styles.climbItem}>{climb.type_label}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>

                            <View style={[styles.climbIconBox, { borderColor: 'orange' }]}>
                                <SelectorWrapper data={climbGradesData} disabled={!editSession} handler={(grade) => handleSelectClimbGrade(grade, climb.id)}>
                                    <Text style={styles.climbItem}>{climb.grade_label}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>

                            <View style={[styles.climbIconBox, { borderColor: 'green' }]}>
                                <SelectorWrapper data={climbOutcomesData} disabled={!editSession} handler={(outcome) => handleSelectClimbOutcome(outcome, climb.id)}>
                                    <Text style={styles.climbItem}>{climbOutcomeShortLabelLookup[climb.outcome_label]}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>

                            <Modal
                                animationType="none"
                                transparent={true}
                                visible={deleteModalVisible}
                                onRequestClose={() => setDeleteModalVisible(false)}
                            >
                                <View style={styles.modalOverlay}>
                                    <View style={styles.modalContainer}>
                                        <Text style={[styles.modalText, { color: 'red', fontSize: 20 }]}>Confirm delete climb?</Text>
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
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5 }}>
                            {editSession &&
                                <ButtonAction
                                    icon={<Ionicons name="trash-sharp" size={24} color="red" />}
                                    onPress={() => handlePressDeleteClimbButton(climb.id)}
                                />
                            }
                        </View>
                    </View>

                ))}
            </View>
        </View>
    )

}