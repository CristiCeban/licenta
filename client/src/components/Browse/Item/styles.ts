import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.topGradient,
        padding: 10,
        borderRadius: 15,
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexContainer: {
        display: 'flex',
        flex: 1,
    },
    infoContainer: {
        alignItems: 'center',
    },
    imageContainer: {
        width: 125,
        height: 100,
    },
    typeContainer: {
        paddingTop: 20,
    }
})
