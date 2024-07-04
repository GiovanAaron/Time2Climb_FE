import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        marginVertical: 50
    },
    headerInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        width: '75%',
        borderWidth: 1,
        borderColor: 'white',
    },
    sessionInfoContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        width: '75%',
        borderColor: 'white',
        borderWidth: 1,
    },
    climbListContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        width: '75%',
        borderColor: 'white',
        borderWidth: 1,
    },
    datePickerContainer: {
        width: '75%',
        borderColor: 'green',
        borderWidth: 1,
    },
    climbContainer: {
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    climbIconBox: {
        borderColor: 'white',
        borderWidth: 1,
        width: 90,
        alignItems: 'center',
    },
    climbItem: {
        padding: 5,
        fontSize: 18,
        textAlign: 'center'
    },
    sessionInfoEditBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingVertical: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        paddingLeft: 15
    },
    sessionInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'lightgrey',
        paddingLeft: 15,
        // borderRadius: 20,
    },
    sessionInfoItem: {
        padding: 5,
        fontSize: 18,
    },
    sessionInfoLabel: {
        fontSize: 18,
        paddingTop: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    saveSessionButton: {
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
    },
    saveClimbButton: {
        paddingHorizontal: 10,
        marginTop: 15,
        marginBottom: 10,
        paddingVertical: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
    },
    optionContainerStyle: {
        backgroundColor: 'white',
        padding: 0,
    },
    optionTextStyle: {
        fontSize: 18,
        color: 'black',
        margin: 0,
        padding: 0,
    },
    sectionStyle: {
        padding: 10,
        backgroundColor: 'white',
    },
    sectionTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    cancelContainerStyle: {
        backgroundColor: 'white',
        borderRadius: 5
    },
    cancelTextStyle: {
        color: '#007AFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;