import React from "react";
import { Button, View, Text } from "react-native";

export default function SessionListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Session List Screen</Text>
      <Button
        title="Map"
        onPress={() => navigation.navigate('Map Screen')}
      />
      <Button
        title="Session"
        onPress={() => navigation.navigate('Session Screen')}
      />

    </View>


  )
}