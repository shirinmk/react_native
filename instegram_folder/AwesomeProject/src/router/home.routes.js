import React from 'react';
 import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();

 const HomeRoutes = () => {
return(
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerStyle: {
            backgroundColor: '#fff',
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
)
 }

 export default HomeRoutes