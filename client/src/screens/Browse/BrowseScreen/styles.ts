import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
        paddingHorizontal: 10,
    },
    containerFlatList: {
        marginVertical: 10,
    },
    separator: {
        height: 20,
    },
    listFooter: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        height: 60
    },
})
