import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
        paddingHorizontal: 20,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    flexEnd: {
        paddingTop: 10,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    line: {
        height: 1,
        borderBottomColor: Colors.bottomGradient,
        borderBottomWidth: 1,
    },
    text: {
        color: 'white',
        fontSize: 14,
    },
    textInformation: {
        color: 'white',
        fontSize: 16,
    },
    informationContainer: {
        marginTop: 10,
        display: 'flex',
        padding: 15,
        borderColor: Colors.bottomGradient,
        borderWidth: 1,
    }
})
