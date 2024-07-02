import React from "react";
import { Button, View, Text } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>

      <Button
        title="Stats"
        onPress={() => navigation.navigate('Stats')}
      />
    </View>
  );
}