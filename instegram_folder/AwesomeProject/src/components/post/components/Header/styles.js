const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between'
    },
    left:{
        flexDirection:'row', 
        alignItems:'center', 
    },
    name:{
        fontWeight:'bold',
        color: '#444'
    },
    right:{
        marginRight: 10
    }
})
export default styles;