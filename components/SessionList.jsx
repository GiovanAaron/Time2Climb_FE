import { View, Text, ScrollView, StyleSheet } from "react-native";
import Session from "./Session";

export default function SessionList () {

    // TODO: delete temporary hardcoded data until BE data is implemented
    const sessions = [
        {
            "session_id": 1,
            "user_id": 1,
            "climbing_wall_id": 1,
            "date": "2024-07-01",
            "duration_minutes": 90,
            "wall": "Neptune Gym",
            "climb_count": 3
        },
        {
            "session_id": 2,
            "user_id": 1,
            "climbing_wall_id": 2,
            "date": "2024-07-02",
            "duration_minutes": 75,
            "wall": "Jupiter Gym",
            "climb_count": 2
        },
        {
            "session_id": 3,
            "user_id": 1,
            "climbing_wall_id": 3,
            "date": "2024-07-03",
            "duration_minutes": 60,
            "wall": "Mars Gym",
            "climb_count": 6
        },
        {
            "session_id": 4,
            "user_id": 1,
            "climbing_wall_id": 4,
            "date": "2024-07-04",
            "duration_minutes": 120,
            "wall": "Pluto Gym",
            "climb_count": 4
        },
        {
            "session_id": 5,
            "user_id": 1,
            "climbing_wall_id": 5,
            "date": "2024-07-04",
            "duration_minutes": 45,
            "wall": "Uranus Gym",
            "climb_count": 3
        },
        {
            "session_id": 6,
            "user_id": 1,
            "climbing_wall_id": 3,
            "date": "2024-07-03",
            "duration_minutes": 60,
            "wall": "Mars Gym",
            "climb_count": 6
        }
    ];

    return (
        <View style={styles.container}>
            {sessions.map((sess) => {
                return <Session key={sess.session_id} sessionData={sess} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});