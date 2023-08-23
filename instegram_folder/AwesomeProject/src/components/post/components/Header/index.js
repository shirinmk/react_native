import React from "react";
import { Text, View } from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";

const Header = ({imageUri,name}) => {
  // Use the return statement to return JSX
  return (
  <View style={styles.container}>
  <ProfilePicture uri={imageUri} size={40} />
  <Text style={styles.name}>{name}</Text>
  </View>
  );
};

export default Header;
