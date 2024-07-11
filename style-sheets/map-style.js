
import { StyleSheet} from "react-native";

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    userMarkerText: {
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20,
        paddingLeft: 7,
        paddingRight: 0,
        paddingVertical: 1
    },
    miniView: {
        width: '100%',
        height: '100%',
    },
    largeView: {
        width: '100%',
        height: '100%'
    },
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 0,
        marginTop: 30
    },
    mapContainer: {
        width: '85%',
        marginTop: 90,
        marginBottom: 40,
        padding: 0,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 30,
        elevation: 5,
        overflow: 'hidden'
    },
  });

  export default mapStyles;
  