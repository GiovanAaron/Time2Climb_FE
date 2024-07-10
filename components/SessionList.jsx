import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Session from "./Session";
import { fetchUserSessions } from "@/utils/api";

export default function SessionList({ navigation }) {

    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        fetchUserSessions(1) // TODO: temporarily hardcoded user ID until users are fully implemented
            .then((response) => {
                if (response && response.userSessions) {
                    setSessionData(response.userSessions);
                } else {
                    setSessionData([]);
                }
            })
            .catch((err) => {
                console.log(err, '--Error fetching user session data--');
                // TODO: display error message to user
            })
    }, []);

    // // TODO: delete temporary hardcoded data until BE data is implemented
    // const sessions_OLD = [
    //     {
    //         "session_id": 1,
    //         "user_id": 1,
    //         "climbing_wall_id": 1,
    //         "date": "2024-07-01",
    //         "duration_minutes": 90,
    //         "wall": "Neptune Gym",
    //         "climb_count": 3
    //     },
    //     {
    //         "session_id": 2,
    //         "user_id": 1,
    //         "climbing_wall_id": 2,
    //         "date": "2024-07-02",
    //         "duration_minutes": 75,
    //         "wall": "Jupiter Gym",
    //         "climb_count": 2
    //     },
    //     {
    //         "session_id": 3,
    //         "user_id": 1,
    //         "climbing_wall_id": 3,
    //         "date": "2024-07-03",
    //         "duration_minutes": 60,
    //         "wall": "Mars Gym",
    //         "climb_count": 6
    //     },
    //     {
    //         "session_id": 4,
    //         "user_id": 1,
    //         "climbing_wall_id": 4,
    //         "date": "2024-07-04",
    //         "duration_minutes": 120,
    //         "wall": "Pluto Gym",
    //         "climb_count": 4
    //     },
    //     {
    //         "session_id": 5,
    //         "user_id": 1,
    //         "climbing_wall_id": 5,
    //         "date": "2024-07-04",
    //         "duration_minutes": 45,
    //         "wall": "Uranus Gym",
    //         "climb_count": 3
    //     },
    //     {
    //         "session_id": 6,
    //         "user_id": 1,
    //         "climbing_wall_id": 3,
    //         "date": "2024-07-03",
    //         "duration_minutes": 60,
    //         "wall": "Mars Gym",
    //         "climb_count": 6
    //     }
    // ];
    // return (<Text>sess data: {JSON.stringify(sessionData)}</Text>)

    return (
        <View style={styles.container}>
            {sessionData.map((sess) => {
                return <Session key={sess.session_id} sessionData={sess} navigation={navigation} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});