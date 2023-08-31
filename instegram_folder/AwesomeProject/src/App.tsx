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
<<<<<<< HEAD

//going to each tab screen so bring theri location
=======
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

>>>>>>> 7c03167e4b506ec66dc21d248e1272c0071d02d5
import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
<<<<<<< HEAD

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


import {Image} from 'react-native';
import shirInstagram from './assets/images/shirInstagram.png'; // Import the image
// import shirInstagram from './assets/images/shirInstagram.png'
import StoryScreen from './screens/StoryScreen';

import Router from './router';
// const Tab = createBottomTabNavigator();

// const HomeStack = createStackNavigator();

// const HomeStackScreen = () => {
//   return (
//     // <HomeStack.Navigator>
//     //   <HomeStack.Screen
//     //     name="Home"
//     //     component={HomeScreen}
//     //     options={{
//     //       headerTitle: 'Instegram ', // Set the header title to "Instagram",
        
//     //       headerStyle: {
//     //         backgroundColor: 'red',
//     //       },
         
//     //       headerTitleAlign: 'center', // Center-align the title,
         
//     //       headerLeft: () => (
//     //         <Feather
//     //           name="camera"
//     //           size={25}
//     //           color={'#000'}
//     //           style={{marginLeft: 10}}
//     //         />
//     //       ),
//     //       headerRight: () => (
//     //         <FontAwesomeIcon
//     //           name="send-o"
//     //           size={30}
//     //           color="#555"
//     //           style={{marginRight: 10}}
//     //         />
//     //       ),

        
//     //     }}
//     //   />
//     // </HomeStack.Navigator>
//   );
// };
=======
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
>>>>>>> 7c03167e4b506ec66dc21d248e1272c0071d02d5

function App(): JSX.Element {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <EntypoIcon name="home" color={color} size={size} />;
            }
            if (route.name === 'Discovery') {
              return (
                <FontAwesomeIcon name="search" color={'red'} size={size} />
              );
            }
            if (route.name === 'Post') {
              return (
                <FontAwesomeIcon name="plus-square" color={color} size={size} />
              );
            }
            if (route.name === 'Notification') {
              return (
                <MaterialCommunityIcon name="bell" color={color} size={size} />
              );
            }
            if (route.name === 'Profile') {
              return <FontAwesomeIcon name="user" color={color} size={size} />;
            }
          },

          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel:''//hide lable of tabbar bottom
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}
=======
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
>>>>>>> 7c03167e4b506ec66dc21d248e1272c0071d02d5
      {/* <SafeAreaView>
      <HomeScreen />
      

    </SafeAreaView> */}
<<<<<<< HEAD
    <Router />
=======
>>>>>>> 7c03167e4b506ec66dc21d248e1272c0071d02d5
    </NavigationContainer>
  );
}

export default App;
