import React, {useContext} from "react";
import { ScrollView, Pressable, Image, View, Text, ImageBackground } from "react-native";
import profileStyles from '../../style-sheets/profile-style'
import appStyles from "../../style-sheets/app-style"

import { UserContext } from '../../app/authListener';

import { getAuth, signOut } from "firebase/auth";
import app from '../../firebaseConfig'

export default function ProfileScreen({ navigation }) {
  
  const auth = getAuth(app)

  const logOut = () => {
    console.log(user)
    signOut(auth)
      .then((result) => {
        navigation.navigate('Landing');
      })
      .catch((error) => {
        console.log(error.code, error.message)
      });
  };

  const { user } = useContext(UserContext)

  return (
    <ImageBackground source={global.backgroundImage} resizeMode="cover" style={appStyles.backgroundStyle} imageStyle={appStyles.backgroundImg}>
      <ScrollView>
        <View style={appStyles.screenContainer}>

          <View style={appStyles.sectionContainer}>

            <Text style={appStyles.h2}>Milo the Monkey</Text>

            <View style={profileStyles.photoFrame}>
              <Image
                style={profileStyles.profilePhoto}
                source={require('../../assets/images/milo.jpg')} />
            </View>

            {/* <Text style={profileStyles.profileBioHeading}>About me</Text> */}
            <Text style={profileStyles.profileBio}>Sheffield based climber. Mainly an indoor boulderer with a membership at the Climbing Works, but I also enjoy the occassional climb outside, whether sport, trad or bouldering. </Text>

            <View style={profileStyles.profileStatsContainer}>
              <Text style={profileStyles.profileStatLabel}>Age:</Text>
              <Text style={profileStyles.profileStat}>35</Text>
              <Text style={profileStyles.profileStatLabel}>Been climbing for: </Text>
              <Text style={profileStyles.profileStat}>17 years</Text>
              <Text style={profileStyles.profileStatLabel}>Climbing level:</Text>
              <Text style={profileStyles.profileStat}>Intermediate</Text>
              <Text style={profileStyles.profileStatLabel}>Climbing frequency:</Text>
              <Text style={profileStyles.profileStat}>Multiple times per week</Text>
              <Text style={profileStyles.profileStatLabel}>Favourite climbing wall:</Text>
              <Text style={profileStyles.profileStat}>The Climbing Works</Text>
            </View>

          </View>

          <Pressable style={profileStyles.signOutButton} onPress={logOut}>
            <Text style={profileStyles.signOutButtonText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}