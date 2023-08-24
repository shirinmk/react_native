// // import React from "react";

// // const Footer = () => {
// //     return
// //     <Text>footer</Text>
// // }
// // export default Footer;

// import React,{useState, useEffect} from "react";
// import { Text, View, TouchableWithoutFeedback } from "react-native";
// import styles from "./styles";
// // import Icon from 'react-native-vector-icons/Entypo'
// // import Icon from 'react-native-vector-icons/Fontisto'
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';


// const Footer = ({likesCount: likesCountProp, caption,postedAt}) => {
//   const [isLiked,setIsLike] = useState(false);
//   const [likesCount,setLikesCount] = useState(0)

//   // create function to check it is pressed 
//   const onLikePressed = () =>{
// // console.warn('it is clicked heart')
// const amount = isLiked ? -1 : 1
// setLikesCount(likesCount + amount)
// setIsLike(!isLiked)
//   }

//   useEffect(() => {
//     setLikesCount(likesCountProp)
//   },[likesCountProp])

  
//   // Use the return statement to return JSX
//   return (
//     <View style={styles.container}>
//       {/* create box of container for icons images  */}
//       <View style={styles.IconContainer}>
//       <View style={styles.leftIcon}>
//         <TouchableWithoutFeedback onPress={onLikePressed}>
//         {isLiked ? (
//   <EntypoIcon name="heart" size={35} color="red" />
// ) : (
//   <EntypoIcon name="heart-outlined" size={35} color="red" />
// )}

     
//       </TouchableWithoutFeedback>
//       <FontistoIcon name="comment" size={30} color="#555" />
//       <FontAwsomeIcon name="send-o" size={30} color="#555" />
//     </View>

//     <View>
//     <FontAwsomeIcon name="bookmark-o" size={30} color="#555" />
//     </View>
//     </View>
    
//       <Text style={styles.likes}>{likesCount}</Text>
//       <Text style={styles.caption}>{caption}</Text>
//       <Text style={styles.postedAt}>{postedAt}</Text>
//     </View>
//   )
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Define the onLikePressed function outside of the return statement
  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, [likesCountProp]);

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <View style={styles.leftIcon}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <EntypoIcon name="heart" size={35} color="red" />
            ) : (
              <EntypoIcon name="heart-outlined" size={35} color="red" />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={30} color="#555" />
          <FontAwsomeIcon name="send-o" size={30} color="#555" />
        </View>
        <View>
          <FontAwsomeIcon name="bookmark-o" size={30} color="#555" />
        </View>
      </View>
      <Text style={styles.likes}>{likesCount}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
