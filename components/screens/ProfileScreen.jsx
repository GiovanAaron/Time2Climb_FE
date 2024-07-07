import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import profileStyles from '../../style-sheets/profile-style'
import appStyles from "../../style-sheets/app-style"

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={profileStyles.screenContainer}>

        <View style={profileStyles.sectionContainer}>

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
      </View>
    </ScrollView>
  );
}