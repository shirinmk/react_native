/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './components/post/components/Footer';
import Feather from 'react-native-vector-icons/Feather';

import {Image} from 'react-native';
import shirInstagram from './assets/images/shirInstagram.png'; // Import the image
// import shirInstagram from './assets/images/shirInstagram.png'
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function MyStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerStyle: {
            backgroundColor: 'red',
          },          
          headerTitleAlign: 'center', // Center-align the title
          headerLeft: () => (
            <Feather
              name="camera"
              size={25}
              color={'#000'}
              style={{marginLeft: 10}}
            />
          ),
          headerRight: () => (
            <FontAwesomeIcon
              name="send-o"
              size={30}
              color="#555"
              style={{marginRight: 10}}
            />
          ),
        
          // headerTitle: '', // Remove the header title
        }}
      />
    </HomeStack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <EntypoIcon name="home" color={color} size={size} />
            ),
            tabBarLabel: '', // Hide the label,
        
            
          }}
        />
        <Tab.Screen
          name="Discovery"
          component={DiscoveryScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="search" color={'red'} size={size} />
            ),
            tabBarLabel: '', // Hide the label
          }}
        />
        <Tab.Screen
          name="Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="plus-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcon name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <SafeAreaView>
      <HomeScreen />
      

    </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;
