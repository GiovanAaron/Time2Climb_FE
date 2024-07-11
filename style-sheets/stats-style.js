import { StyleSheet } from "react-native";

const statStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 0,
        marginVertical: 30,
    },
    headerInfoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 0,
        width: '75%',
        borderColor: 'white',
        textAlign: 'center',
    },
    statContainer: {
        backgroundColor: 'white',
        borderColor: '#0083A7',
        borderWidth: 1,
        width: '75%',
        minHeight: 150,
        borderRadius: 20,
        marginBottom: 30,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})

export default statStyles;