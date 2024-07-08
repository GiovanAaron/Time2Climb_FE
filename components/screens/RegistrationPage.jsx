import landingStyles from "../../style-sheets/landing-style"
import { TextInput, ImageBackground, ScrollView, View, Text, Pressable } from "react-native";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const image = require('../../assets/images/bady-abbas-VmYZe_yqxL0-unsplash.jpg')



export default function RegistrationScreen({ navigation }) {

    return (

        <View>
            <ImageBackground source={image} resizeMode="cover" style={landingStyles.image}>

        </View>


    )
}