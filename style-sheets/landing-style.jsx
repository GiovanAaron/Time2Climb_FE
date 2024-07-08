import { StyleSheet } from "react-native";

const landingStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 0,
    },
    image: {
        flex: 1,
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        width: '100%',
        height: '100%',
    },
    logInSection: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'red',
        width: '75%',
    },
    registerSection: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
    },
    textInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15,
        borderRadius: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        marginBottom: 20,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    loginPrompt: {
        color: 'white',
        marginVertical: 20,
        fontSize: 18,
        textAlign: 'center',
        maxWidth: '75%'
    },
    signUpPrompt: {
        color: 'white',
        marginBottom: 30,
        fontSize: 18,
    },
    registerError: {
        color: 'red',
        fontSize: 18,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logInError: {
        color: 'red',
        fontSize: 18,
        backgroundColor: 'lightgrey',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 20,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default landingStyles;