// import React from "react";

// const Footer = () => {
//     return
//     <Text>footer</Text>
// }
// export default Footer;

import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Footer = ({likesCount, caption,postedAt}) => {
  // Use the return statement to return JSX
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  )
};

export default Footer;
