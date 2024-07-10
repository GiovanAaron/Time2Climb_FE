
import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
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
        borderWidth: 1,
        backgroundColor: 'white',
        width: '85%',
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 40,
        marginTop: 90,
        paddingVertical: 20,
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
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: '#93C572',
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        lineHeight: 22,
        elevation: 2,
        width: '90%'
    },
    profileStat: {
        fontSize: 18,
        marginBottom: 10
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
        width: '90%'
    },
    profileStatLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5
    },
    signOutButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        marginVertical: 30,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15
    },
    signOutButtonText: {
        fontSize: 16,
        color: 'white'
    },
});

export default profileStyles