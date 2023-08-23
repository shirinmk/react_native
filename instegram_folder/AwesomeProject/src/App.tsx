/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

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
import ProfilePicture from './components/ProfilePicture';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen />
      
     
      {/* <ProfilePicture uri={'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg'}/>
      <ProfilePicture uri={'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg'}/>
      <ProfilePicture uri={'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg'}/>
      <ProfilePicture uri={'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg'}/> */}
      {/* <Stories /> didn't work  */}
    </SafeAreaView>
  );
}

export default App;
