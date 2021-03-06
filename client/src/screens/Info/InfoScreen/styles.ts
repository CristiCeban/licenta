import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
    },
    text: {
        color: 'white'
    },
    containerInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    containerInfo1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    modalize: {
        backgroundColor: Colors.bottomGradient,
        padding: 10,
    }
})
