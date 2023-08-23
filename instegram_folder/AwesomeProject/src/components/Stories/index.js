import React from "react";
import Story from "../Story";
import { Text, View , FlatList} from "react-native";

// Create an array of objects
const data = [
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'lucus',
  },
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'vadim',
  },
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'Alex',
  },
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'lucus4',
  },
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'vadim2',
  },
  {
    imageUri: 'https://m.media-amazon.com/images/I/5177-nTvY7L._AC_SX679_.jpg',
    name: 'Alex6',
  },
];

// const Stories = () => {
//   // Use the return statement to return JSX
//   return (
//     // <View>
//     //   <Story imageUri={data[0].imageUri} name={data[0].name} />
//     //   <Story imageUri={data[1].imageUri} name={data[1].name} />
//     //   <Story imageUri={data[2].imageUri} name={data[2].name} />
//     //   <Text>hello form stories</Text>
//     // </View>
//     <FlatList
//     data={data}
//     keyExtractor={({name}) => name}
//     horizontal
//     renderItem={({item}) => imageUri={item.imageUri} name={item.name}}
//      />
//   );
// };
const Stories = () => {
    return (
      <FlatList
        data={data}
        keyExtractor={({ name }) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
      />
    );
  };
export default Stories;
