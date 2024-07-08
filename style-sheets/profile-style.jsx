
import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 0,
        marginVertical: 30,
    },
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'white',
        borderWidth: 0,
        width: '75%'
    },
    photoFrame: {
        width: 125,
        height: 125,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#007AFF',
        borderWidth: 3,
        overflow: 'hidden',
        borderRadius: 100,
    },
    profilePhoto: {
        width: 125,
        height: 200,
    },
    profileBio: {
        fontSize: 16,
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: '#93C572',
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        lineHeight: 22,
        elevation: 2,
    },
    profileStat: {
        fontSize: 18,
    },
    profileBioHeading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
    },
    profileStatsContainer: {
        borderColor: 'orange',
        borderWidth: 2,
        padding: 15,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 2,
    },
    profileStatLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5
    },
    signOutButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        marginVertical: 20,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signOutButtonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default profileStyles