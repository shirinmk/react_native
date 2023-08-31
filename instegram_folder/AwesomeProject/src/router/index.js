import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from '../router/home.routes'
const Tab = createBottomTabNavigator();
const Router = () => {
return(
    <Tab.Navigator 
    screenOptions={{ headerShown: false }}>
      
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
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
    
)
}

export default Router;