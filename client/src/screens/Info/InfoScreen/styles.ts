import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:Colors.background1,
    },
    text:{
        color:'white'
    },
    modalize:{
        backgroundColor:Colors.bottomGradient,
        // marginHorizontal:5,
    }
})