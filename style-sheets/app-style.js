import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 0,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '85%',
    borderRadius: 20,
    marginBottom: 40,
    marginTop: 90,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginVertical: 20,
    textAlign: 'center'
  },
  h2: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  h3: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'darkblue'
  },
  standardFont: {
    color: 'darkblue'
  },
  backgroundStyle: {
    flex: 1
  },
  backgroundImg: {
    opacity: 0.45
  }
});

export default appStyles;