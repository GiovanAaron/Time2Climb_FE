import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 0,
        marginVertical: 30
    },
    mapContainer: {
        width: '75%',
        height: 200,
        marginBottom: 20,
        padding: 0,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 30,
        elevation: 5,
        overflow: 'hidden'
    },
    keyStatsContainer: {
        width: '75%',
        borderColor: 'orange',
        borderWidth: 2,
        marginBottom: 15,
        marginTop: 15,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 5,
    },
    stat: {
        paddingVertical: 5,
        fontSize: 16,
    },
    dashboardContainer: {
        width: '75%',
        height: 200,
        marginBottom: 20,
        padding: 0,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default styles;