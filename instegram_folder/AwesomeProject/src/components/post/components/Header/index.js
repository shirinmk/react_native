import React from "react";
import { Text, View } from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Entypo'

const Header = ({imageUri,name}) => {
  // Use the return statement to return JSX
  return (
  <View style={styles.container}>
    <View style={styles.left}>
  <ProfilePicture uri={imageUri} size={40} />
  <Text style={styles.name}>{name}</Text>
  </View>
  <View>
  <Icon style={styles.right} name="dots-three-vertical" size={30} />
  </View>
  </View>
  );
};

export default Header;
