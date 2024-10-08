import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 0,
    },
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        borderWidth: 0,
        backgroundColor: 'white',
        width: '85%',
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 40,
        marginTop: 90,
        paddingVertical: 20,
    },
    mapContainer: {
        width: '85%',
        height: 200,
        marginBottom: 20,
        padding: 0,
        borderWidth: 2,
        borderColor: '#47A970',
        borderRadius: 30,
        elevation: 5,
        overflow: 'hidden'
    },
    keyStatsContainer: {
        width: '85%',
        borderColor: '#FFC759',
        borderWidth: 2,
        marginBottom: 5,
        marginTop: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 5,
    },
    stat: {
        paddingVertical: 5,
        fontSize: 16,
        color: 'darkblue'
    },
    dashboardContainer: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        padding: 0,
        borderWidth: 1,
        borderColor: 'black'
    },
    logoContainer: {
        width: '85%',
        height: 170,
        borderColor: 'red',
        borderWidth: 0,
        marginBottom: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 15,
        borderRadius: 20,
    },
    logo: {
        width: '100%',
        height: '100%',
    }
})

export default styles;