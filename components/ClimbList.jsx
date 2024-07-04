import { climbList, climbTypeList, outcomesList, gradesList } from '../screenSessionData'
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useState } from 'react';

import { View, Text, Pressable, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TimerPickerModal } from "react-native-timer-picker";

import SelectorWrapper from '../SelectorWrapper'


export default function ClimbList({ }) {

    const [addClimbOpen, setAddClimbOpen] = useState(false);


    return (
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
    )





}