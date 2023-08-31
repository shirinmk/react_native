// import React, {useEffect, useState} from 'react';
// import {
//   ImageBackground,Image,
//   SafeAreaView,
//   Text,
//   View,
//   ActivityIndicator,
// } from 'react-native';
// import {useRoute} from '@react-navigation/native';
// import storiesData from '../../data/stories';
// import styles from '../../components/ProfilePicture/styles';

// //define component
// const StoryScreen = () => {
//   //define state
//   const [userStories, setUserStories] = useState(null);
//   const [activeStoryIndex, setActiveStoryIndex] = useState(0);
//   const [activeStory, setActiveStory] = useState(null);

//   const route = useRoute();

//   useEffect(() => {
//     //   console.log(route);
//     const userId = route.params.userId;
//     const userStories = storiesData.find(
//       storyData => storyData.user.id === userId,
//     );
//     console.log(userStories);
//     setUserStories(userStories);
//     setActiveStoryIndex(0);
//   }, []);

//   useEffect(() => {
//     if(userStories && userStories.stories.length > activeStoryIndex){
//         setActiveStory(userStories.stories[activeStoryIndex]);
//     }
   
//   }, [activeStoryIndex]);

//   if (!activeStory) {
//     return (
//       <SafeAreaView>
//         <ActivityIndicator />
//       </SafeAreaView>
//     );
//   }
//   console.log('userStories');
//   console.log(userStories);

//   console.log("activey story")
//   console.log(activeStory)
//   try {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Image source={{uri: activeStory.imageUri}} style={styles.image} />
//       </SafeAreaView>
//     );
//   } catch (error) {
//     console.error('Error loading image:', error);
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Error loading image</Text>
//       </SafeAreaView>
//     );
//   }
  
// };

// export default StoryScreen;


import React, { useEffect, useState } from 'react';
import {
  ImageBackground, Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import storiesData from '../../data/stories';
import styles from './styles';

// Define component
const StoryScreen = () => {
  // Define state
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );
    console.log('Fetched user stories:', userStories);
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (userStories && userStories.stories.length > activeStoryIndex) {
      setActiveStory(userStories.stories[activeStoryIndex]);
    }
  }, [activeStoryIndex]);

  console.log('Render:', activeStoryIndex, activeStory);

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  try {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{uri: activeStory.imageUri}} style={styles.image} />
      </SafeAreaView>
    );
  } catch (error) {
    console.error('Error loading image:', error);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error loading image</Text>
      </SafeAreaView>
    );
  }
};

export default StoryScreen;
