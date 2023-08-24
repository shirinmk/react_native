import React from "react";
import { Image, Text } from "react-native";

import { FlatList } from "react-native";
import Post from "../post";
import Stories from "../Stories";

const data =  [{
    user:{
      imageUri:'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
      name:'shirin',
    },
    imageUri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
  ,caption: ' Beautifule city',
  likesCount :1234,
  postedAt:'6 minutes ago'
  },{
    user:{
      imageUri:'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
      name:'shirin',
    },
    imageUri: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=974&q=80'
  ,caption: ' Beautifule city',
  likesCount :1234,
  postedAt:'6 minutes ago'
  },
  {
    user:{
      imageUri:'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
      name:'shirin',
    },
    imageUri: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
  ,caption: ' Beautifule city',
  likesCount :1234,
  postedAt:'6 minutes ago'
  },
  
]

const Feed = () => {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    );
  }
  

export default Feed;