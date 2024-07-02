import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
    },
    sessionInfoContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        width: '75%',
        borderColor: 'blue',
        borderWidth: 1,
    },
    climbListContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        width: '75%',
        borderColor: 'green',
        borderWidth: 1,
    },
    datePickerContainer: {
        width: '75%',
        borderColor: 'green',
        borderWidth: 1,
    },
    climbContainer: {
        borderColor: 'pink',
        borderWidth: 1,
    },
    sessionInfoItem: {
        padding: 10,
        fontSize: 18,
    },
    climbItem: {
        padding: 5,
        fontSize: 12,
    },
});

export default styles;