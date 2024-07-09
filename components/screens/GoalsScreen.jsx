import React from "react";
import { useRef } from 'react';
import { View, Text, Alert, Pressable } from "react-native";

import styles from '../../style-sheets/goals-style'
import appStyles from "../../style-sheets/app-style"

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stars, Balloons, Hearts } from 'react-native-fiesta';

import { useState } from 'react';

const AchievementAlertWrapper = ({ children, name, description }) => {

  return (
    <Pressable onPress={() => {
      Alert.alert(name, description,
        [{ text: 'OK' }])
    }}>
      {children}
    </Pressable>
  )
}

export default function Goals({ navigation }) {

  const [achievements, setAchievements] = useState({
    first_steps: true,
    traveller: true,
    jack_of_all_trades: false,
    globe_trotter: false,
    centurion: false,
    marathoner: false
  });

  return (
    <View style={styles.screenContainer}>
      {achievements.traveller &&
        <Stars />
      }
      <View style={styles.sectionContainer}>
        <View style={styles.headerInfoBox}>
          <Text style={appStyles.h2}>Goals</Text>
        </View>

        <View style={styles.awardListContainer}>

          <View style={styles.awardContainer}>
            <View style={[styles.trophyFrame, { borderColor: achievements.first_steps ? "orange" : "lightgrey" }]}>
              <Ionicons name="footsteps-outline"
                size={52}
                color={achievements.first_steps ? "orange" : "lightgrey"} />
            </View>
            <AchievementAlertWrapper name="First-steps" description="You logged your first climb">
              <Text style={[styles.awardFrame, { color: achievements.first_steps ? "orange" : "lightgrey" }]}>First steps</Text>
            </AchievementAlertWrapper>
          </View>

          <View style={styles.awardContainer}>
            <AchievementAlertWrapper name="Traveller" description="You visited 5 different climbing walls">
              <View style={[styles.trophyFrame, { borderColor: achievements.traveller ? "green" : "lightgrey" }]}>
                <FontAwesome name="ticket"
                  size={52}
                  color={achievements.traveller ? "green" : "lightgrey"} />
              </View>
              <Text style={[styles.awardFrame, { color: achievements.traveller ? "green" : "lightgrey" }]}>Traveller</Text>
            </AchievementAlertWrapper>
          </View>

          <View style={styles.awardContainer}>
            <View style={styles.trophyFrame}>
              <FontAwesome5 name="tools" size={52} color="lightgrey" />
            </View>
            <Text style={styles.awardFrame}>Jack of all trades</Text>
          </View>

          <View style={styles.awardContainer}>
            <View style={styles.trophyFrame}>
              <FontAwesome5 name="globe-americas" size={52} color="lightgrey" />
            </View>
            <Text style={styles.awardFrame}>Globe trotter</Text>
          </View>

          <View style={styles.awardContainer}>
            <View style={styles.trophyFrame}>
              <Text style={{ color: 'lightgrey', fontSize: 34, fontWeight: 'bold' }}>100</Text>
            </View>
            <Text style={styles.awardFrame}>Centurion</Text>
          </View>

          <View style={styles.awardContainer}>
            <View style={styles.trophyFrame}>
              <FontAwesome5 name="running" size={52} color="lightgrey" />
            </View>
            <Text style={styles.awardFrame}>Marathoner</Text>
          </View>

        </View>
      </View>
    </View >
  )
}