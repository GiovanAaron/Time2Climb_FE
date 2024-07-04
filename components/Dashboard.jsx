import { View, StyleSheet } from "react-native";
import CustomButton from './Button';

export default function HomeScreen({ navigation }) {

    const btnData = [
        {
            key: 1,
            txt: 'Add Session',
            screen: 'Session Screen'
        },
        {
            key: 2,
            txt: 'Sessions',
            screen: 'Sessions Screen'
        },
        {
            key: 3,
            txt: 'Stats',
            screen: 'Stats Screen'
        },
        {
            key: 4,
            txt: 'Goals',
            screen: 'Goals Screen'
        },
        {
            key: 5,
            txt: 'Leaderboard',
            screen: 'Leaderboard Screen'
        },
        {
            key:6,
            txt: 'Map',
            screen: 'Map Screen'
        }
    ];

    return (
        <View style={styles.btnGrid}>
            {btnData.map((item) => {
                return (<CustomButton 
                    key={item.key}
                    navigation={navigation} 
                    screen={item.screen} 
                    btnText={item.txt}
                />);
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    btnGrid: {
        marginHorizontal: '"auto"',
        width: '90%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 15,
        height: 'auto',
        padding: 3
    },
    btn: {
        maxWidth: '33%',
        marginVertical: 80
    }
});
