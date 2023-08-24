const { StyleSheet,Dimensions } = require("react-native");

const styles = StyleSheet.create({
    container:{
        margin:5
    },
likes:{
    fontWeight:'bold',
    margin:3
},
caption:{
    margin:3
},
postedAt:{
    color:'#8c8',
    margin:3,
},
IconContainer:{
    flexDirection:'row',
    justifyContent:'space-between', padding:5
}
,
leftIcon:{
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between'
}


    }
);

export default styles;