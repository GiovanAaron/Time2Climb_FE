import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        marginVertical: 30,
    },
    headerInfoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 0,
        width: '100%',
        borderColor: 'white',
    },
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        width: '75%'
    },
    awardListContainer: {
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 20,
        flexWrap: 'wrap'
    },
    awardContainer: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50%',
    },
    trophyFrame: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        width: 120,
        height: 120,
        padding: 25,
        borderRadius: 70,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    awardFrame: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderWidth: 2,
        fontWeight: 'bold',
        fontSize: 18,
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none',
    }
})

export default styles;