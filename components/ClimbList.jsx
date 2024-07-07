import { climbList, climbTypeList, outcomesList, gradesList } from './screens/screenSessionData'
import { Modal, Alert, View, Text, Pressable, ActivityIndicator } from "react-native";
import { useState } from 'react';
import _ from 'lodash';
import ButtonAction from './ButtonAction';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "../style-sheets/session-style"
import appStyles from "../style-sheets/app-style"

import SelectorWrapper from './SelectorWrapper'

export default function ClimbList({ editSession }) {

    const [climbType, setClimbType] = useState(null);
    const [climbGrade, setClimbGrade] = useState(null);
    const [climbOutcome, setClimbOutcome] = useState(null);
    const [climbListLocal, setClimbListLocal] = useState(climbList);

    const [newClimb, setNewClimb] = useState({})
    const [savingClimb, setSavingClimb] = useState(false)
    const [addClimbOpen, setAddClimbOpen] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const [deleteClimbId, setDeleteClimbId] = useState(null);

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
            <MaterialCommunityIcons name="carabiner" size={32} color="grey" />
            <Text style={styles.climbItem}>Type</Text>
            <Ionicons name="caret-down-outline" size={15} color="black" />
        </View>

    if (climbType) {
        climbTypeBox =
            <View style={[styles.climbIconBox, { borderColor: 'red' }]}>
                <Text style={[styles.climbItem, { color: 'red', fontWeight: 'bold' }]}>{climbType.label}</Text>
                <Ionicons name="caret-down-outline" size={15} color="black" />
            </View>
    }

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
        } else {
            Alert.alert('Missing data', 'Please complete all fields before saving')
        }
    }

    const handlePressDeleteClimbButton = (climb_id) => {
        setDeleteModalVisible(true)
        setDeleteClimbId(climb_id)
    }

    const handleConfirmDelete = () => {
        Alert.alert('Climb deleted!', '')
        setDeleteModalVisible(false);
    }

    const handleToggleAddClimb = () => {
        setAddClimbOpen(!addClimbOpen);
    }


    const handleSelectClimbType = (type, climb_id) => {
        if (climb_id) {
            const climbListLocalCopy = _.cloneDeep(climbListLocal);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.climb_id === climb_id
            })
            selectedClimb.climb_type_label = type.label
            selectedClimb.climb_type_id = type.value

            setClimbListLocal(climbListLocalCopy)

        } else {
            setClimbType(type)
            setNewClimb({ ...newClimb, climb_type_id: type.value })
        }
    }

    const handleSelectClimbGrade = (grade, climb_id) => {
        if (climb_id) {
            const climbListLocalCopy = _.cloneDeep(climbListLocal);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.climb_id === climb_id
            })
            selectedClimb.grade_label = grade.label
            selectedClimb.grade_id = grade.value

            setClimbListLocal(climbListLocalCopy)

        } else {
            setClimbGrade(grade.label)
            setNewClimb({ ...newClimb, grade_id: grade.value })
        }
    }

    const handleSelectClimbOutcome = (outcome, climb_id) => {
        if (climb_id) {
            const climbListLocalCopy = _.cloneDeep(climbListLocal);
            const selectedClimb = climbListLocalCopy.find(climbItem => {
                return climbItem.climb_id === climb_id
            })
            selectedClimb.climb_outcome_label = outcome.label
            selectedClimb.climb_outcome_id = outcome.value

            setClimbListLocal(climbListLocalCopy)

        } else {
            setClimbOutcome(outcome.label)
            setNewClimb({ ...newClimb, climb_outcome_id: outcome.value })
        }

    }

    return (

        <View style={styles.sectionContainer}>

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
                                <Text>Add climb</Text>
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

                {climbListLocal.map((climb) => (

                    <View key={climb.climb_id}>

                        <View style={styles.climbContainer}>

                            <View style={[styles.climbIconBox, { borderColor: 'red' }]}>
                                <SelectorWrapper data={climbTypeData} disabled={!editSession} handler={(type) => handleSelectClimbType(type, climb.climb_id)}>
                                    <Text style={styles.climbItem}>{climb.climb_type_label}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>

                            <View style={[styles.climbIconBox, { borderColor: 'orange' }]}>
                                <SelectorWrapper data={climbGradesData} disabled={!editSession} handler={(grade) => handleSelectClimbGrade(grade, climb.climb_id)}>
                                    <Text style={styles.climbItem}>{climb.grade_label}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>

                            <View style={[styles.climbIconBox, { borderColor: 'green' }]}>
                                <SelectorWrapper data={climbOutcomesData} disabled={!editSession} handler={(outcome) => handleSelectClimbOutcome(outcome, climb.climb_id)}>
                                    <Text style={styles.climbItem}>{climbOutcomeShortLabelLookup[climb.climb_outcome_label]}</Text>
                                </SelectorWrapper>
                                {editSession && <Ionicons name="caret-down-outline" size={15} color="black" />}
                            </View>
                    

                            <Modal
                                animationType="slide"
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
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 5}}>
                        {editSession &&
                                <ButtonAction
                                    icon={<Ionicons name="trash-sharp" size={24} color="red" />}
                                    onPress={() => handlePressDeleteClimbButton(climb.climb_id)}
                                />
                            }
                        </View>
                    </View>

                ))}
            </View>
        </View>
    )

}