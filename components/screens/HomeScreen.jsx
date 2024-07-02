import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>

            <Button
                title="Stats"
                onPress={() => navigation.navigate('Stats Screen')}
            />
            <Button
                title="Map"
                onPress={() => navigation.navigate('Map Screen')}
            />
            <Button
                title="Session"
                onPress={() => navigation.navigate('Session Screen')}
            />
            <Button
                title="Sessions"
                onPress={() => navigation.navigate('Sessions Screen')}
            />

        </View>
    );
}