import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
        paddingHorizontal: 10,
    },
    textInfo: {
        fontSize: 14,
        color: Colors.primaryText,
    },
    buttonContainer: {
        padding: 10,
        margin: 40,
        backgroundColor: Colors.background2,
    }
})