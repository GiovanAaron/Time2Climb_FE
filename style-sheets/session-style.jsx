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
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        width: '75%'
    },
    headerInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: 'white',
    },
    sessionInfoContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        borderColor: 'white',
        borderWidth: 1,
        width: '100%',
    },
    climbListContainer: {
        alignItems: 'start',
        justifyContent: 'start',
        borderColor: 'white',
        borderWidth: 1,
    },
    climbContainer: {
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        columnGap: 15
    },
    climbIconBox: {
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        flexBasis: 90,
        minWidth: 90,
        minHeight: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 5,
    },
    climbItem: {
        padding: 5,
        fontSize: 18,
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
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
        paddingHorizontal: 15
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
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderColor: 'white',
        borderWidth: 1,
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