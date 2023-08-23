// import React from "react";

// const Body = () => {
//     <Text>body</Text>
// }
// export default Body;
import React from "react";
import { Image, Text } from "react-native";
import styles from "./styles";

const Body = ({imageUri}) => {
  // Use the return statement to return JSX
  return( 
  <>
  <Text>Body</Text>
  <Image source={{uri:imageUri}} style={styles.image} />
  </>
  );
};

export default Body;
