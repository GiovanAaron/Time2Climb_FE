import React from "react";
import { View, Text, Alert, Pressable, ImageBackground } from "react-native";

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
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <View style={[appStyles.screenContainer]}>
        {achievements.traveller &&
          <Stars />
        }
        <View style={[appStyles.sectionContainer, {backgroundColor: 'rgba(255, 255, 255, 0.85)'}]}>
          <Text style={appStyles.h2}>Goals</Text>
          <View style={styles.awardListContainer}>

            <View style={styles.awardContainer}>
              <View style={[styles.trophyFrame, { borderColor: achievements.first_steps ? "#FFC759" : "lightgrey" }]}>
                <Ionicons name="footsteps-outline"
                  size={52}
                  color={achievements.first_steps ? "#FFC759" : "lightgrey"} />
              </View>
              <AchievementAlertWrapper name="First-steps" description="You logged your first climb">
                <Text style={[styles.awardFrame, { color: achievements.first_steps ? "#FFC759" : "lightgrey" }]}>First steps</Text>
              </AchievementAlertWrapper>
            </View>

            <View style={styles.awardContainer}>
              <AchievementAlertWrapper name="Traveller" description="You visited 5 different climbing walls">
                <View style={[styles.trophyFrame, { borderColor: achievements.traveller ? "#47A970" : "lightgrey" }]}>
                  <FontAwesome name="ticket"
                    size={52}
                    color={achievements.traveller ? "#47A970" : "lightgrey"} />
                </View>
                <Text style={[styles.awardFrame, { color: achievements.traveller ? "#47A970" : "lightgrey" }]}>Traveller</Text>
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
      </View>
    </ImageBackground>
  )
}