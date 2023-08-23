// import React from "react";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import { View } from "react-native";

// const Post = () => {
//     <View>
//         <Header />
//         <Body />
//         <Footer />
//     </View>
// }
// export default Post
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { View } from "react-native";

const Post = ({post}) => {
  // Use the return statement to return JSX
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer 
      likesCount={post.likesCount}
      caption={post.caption}
      postedAt ={post.postedAt}
      />
    </View>
  );
};

export default Post;
