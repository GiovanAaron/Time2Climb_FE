
import { StyleSheet} from "react-native";

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 20
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
        width: '80%',
        height: '30%',
        marginVertical: 20
    },
    largeView: {
        width: '100%',
        height: '100%'
    }
  });

  export default mapStyles;
  