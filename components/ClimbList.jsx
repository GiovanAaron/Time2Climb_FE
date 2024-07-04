import { climbList, climbTypeList, outcomesList, gradesList } from './screens/screenSessionData'
import { Alert, View, Text, Pressable, ActivityIndicator } from "react-native";
import { useState } from 'react';


import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "../style-sheets/session-style"
import appStyles from "../style-sheets/app-style"

import SelectorWrapper from './SelectorWrapper'

export default function ClimbList({ }) {

    const [climbType, setClimbType] = useState(null);
    const [climbGrade, setClimbGrade] = useState(null);
    const [climbOutcome, setClimbOutcome] = useState(null);

    const [newClimb, setNewClimb] = useState({})
    const [savingClimb, setSavingClimb] = useState(false)
    const [addClimbOpen, setAddClimbOpen] = useState(false);

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

    const handlePressAddClimb = () => {
        setAddClimbOpen(true);
    }

    const handleCloseAddClimb = () => {
        setAddClimbOpen(false);
    }

    const handleSelectClimbType = (type) => {
        setClimbType(type)
        setNewClimb({ ...newClimb, climb_type_id: type.value })
    }

    const handleSelectClimbGrade = (grade) => {
        setClimbGrade(grade.label)
        setNewClimb({ ...newClimb, grade_id: grade.value })
    }

    const handleSelectClimbOutcome = (outcome) => {
        setClimbOutcome(outcome.label)
        setNewClimb({ ...newClimb, climb_outcome_id: outcome.value })
    }

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.headerInfoBox}>
                <Text style={appStyles.h3}>Climbs</Text>
                {addClimbOpen ?
                    < Pressable onPress={handleCloseAddClimb} hitSlop={50}>
                        <Ionicons name="remove-circle-outline" size={24} color="black" />
                    </Pressable> :
                    < Pressable onPress={handlePressAddClimb} hitSlop={50}>
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
                                <Text
                                    style={climbType && climbOutcome && climbGrade ?
                                        styles.saveClimbButton :
                                        [styles.saveClimbButton, styles.saveButtonNull]
                                    }
                                >
                                    Save climb
                                </Text>
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
                            <Text style={styles.climbItem}>{climbOutcomeShortLabelLookup[climb.climb_outcome_label]}</Text>
                        </View>

                    </View>
                ))}
            </View>
        </View>
    )

}