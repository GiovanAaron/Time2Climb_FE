import { View, StyleSheet, FlatList, Image } from "react-native";
import ButtonRedirect from './ButtonRedirect';

export default function HomeScreen({ navigation }) {

    const btnData = [
        {
            key: 1,
            txt: 'Sessions',
            screen: 'Sessions Screen'
        },
        {
            key: 2,
            txt: 'Add Session',
            screen: 'Session Screen'
        },
        // {
        //     key: 3,
        //     txt: 'Goals',
        //     screen: 'Goals Screen'
        // },
        {
            key: 4,
            txt: 'Stats',
            screen: 'Stats Screen'
        },
        // {
        //     key: 5,
        //     txt: 'Map',
        //     screen: 'Map Screen'
        // },
        {
            key:6,
            txt: 'Leaderboard',
            screen: 'Leaderboard Screen'
        }
    ];

    return (
        <View style={dashboardStyles.btnGrid}>
            {btnData.map((item) => {
                return (<ButtonRedirect 
                    key={item.key}
                    navigation={navigation} 
                    screen={item.screen} 
                    btnText={item.txt}
                />);
            })}
        </View>
    );
}

const dashboardStyles = StyleSheet.create({
    btnGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1,
        rowGap: 10,
        maxWidth: '70%',
    },
    btn: {
        maxWidth: '30%',
        alignItems: "center"
    }
});

// const borderStyles = StyleSheet.create({
//     btnGrid: {
//         marginHorizontal: '"auto"',
//         width: '90%',
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         borderColor: 'black',
//         borderWidth: 4,
//         borderRadius: 15,
//         height: 'auto',
//         padding: 3
//     },
//     btn: {
//         maxWidth: '33%',
//         // marginVertical: 80
//     }
// });
