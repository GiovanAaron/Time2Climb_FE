import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import HomeScreen from '../components/screens/HomeScreen';
import LandingScreen from '../components/screens/LandingScreen';
import MapScreen from '../components/screens/MapScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import SessionListScreen from '../components/screens/SessionListScreen';
import SessionScreen from '../components/screens/SessionScreen';
import StatsScreen from '../components/screens/StatsScreen';
import GoalsScreen from '../components/screens/GoalsScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Map Screen" component={MapScreen} />
      <Stack.Screen name="Session Screen" component={SessionScreen} />
      <Stack.Screen name="Sessions Screen" component={SessionListScreen} />
      <Stack.Screen name="Stats Screen" component={StatsScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function SessionListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sessions Screen" component={SessionListScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Map Screen" component={MapScreen} />
      <Stack.Screen name="Session Screen" component={SessionScreen} />
      <Stack.Screen name="Stats Screen" component={StatsScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Map Screen" component={MapScreen} />
      <Stack.Screen name="Session Screen" component={SessionScreen} />
      <Stack.Screen name="Sessions Screen" component={SessionListScreen} />
      <Stack.Screen name="Stats Screen" component={StatsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={'red'} size={24} />
          )
        }} />
      <Tab.Screen
        name="Sessions"
        component={SessionListStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="person-falling" color={'orange'} size={24} />
          )
        }} />
      <Tab.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={'green'} size={24} />
          )
        }} />
     <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={'#007AFF'} size={24} />
          )
        }} />    
        </Tab.Navigator>
  );
}

function LandingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  )
}

function Index() {
  return (
    <LandingNavigator/>
  )
}

export default Index;