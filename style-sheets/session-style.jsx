import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
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
        borderColor: 'pink',
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
    },
    sessionInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: 'white',
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
    climbItem: {
        padding: 5,
        fontSize: 12,
    },
    saveButton: {
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
    }
});

export default styles;