import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 0,
        marginVertical: 25
    },
    middleBackground: {
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 15,
        borderColor: 'white',
        borderWidth: 0,
        width: '80%',
    },
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 0,
    },
    climbCountContainer: {
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    headerInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 0,
        width: '100%',
        borderColor: 'white'
    },
    sessionInfoContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        borderColor: 'white',
        borderWidth: 0,
        width: '100%',
    },
    climbListContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        borderColor: 'white',
        borderWidth: 0,
    },
    climbContainer: {
        borderColor: 'white',
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        columnGap: 15
    },
    climbIconBox: {
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        flexBasis: 90,
        minWidth: 90,
        maxWidth: '35%',
        minHeight: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 5,
        elevation: 2,
    },
    climbItem: {
        padding: 5,
        fontSize: 17,
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 0,
        fontWeight: 'bold',
    },
    loadingMsg: {
        fontSize: 24,

    },
    sessionInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 15,
        elevation: 2,
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        elevation: 2,
        fontWeight: 'bold'
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
        elevation: 2,
        fontWeight: 'bold'
    },
    saveButtonNull: {
        backgroundColor: 'gainsboro',
        borderColor: 'lightgrey',
        color: 'silver'
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
    datePickerContainer: {
        borderColor: 'green',
        borderWidth: 1,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'white',
        borderWidth: 0,
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        padding: 35,
        width: 300,
    },
    modalText: {
        borderColor: 'white',
        borderWidth: 1,
    },
    modalOptionsText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalOptions: {
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 50,
    },
});

export default styles;