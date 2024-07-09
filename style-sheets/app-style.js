import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 0,
    marginTop: 30
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold'
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