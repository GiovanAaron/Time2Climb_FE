import React from "react";
import { ScrollView, View, Text } from "react-native";
import BarChartTypes from '../BarChartTypes';
import BarChartOutcomes from '../BarChartOutcomes';

import statStyles from '../../style-sheets/stats-style'
import appStyles from "../../style-sheets/app-style"

export default function StatsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={statStyles.screenContainer}>

        <View style={statStyles.headerInfoBox}>
          <Text style={appStyles.h2}>Stats</Text>
        </View>

        <View style={statStyles.statContainer}>
          <BarChartTypes />
        </View>

        <View style={statStyles.statContainer}>
          <BarChartOutcomes />
        </View>

        <View style={statStyles.statContainer}>
          <Text >Stat placeholder</Text>
        </View>

        <View style={statStyles.statContainer}>
          <Text >Stat placeholder</Text>
        </View>

      </View>
    </ScrollView>
  )
}