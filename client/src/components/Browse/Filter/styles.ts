import {Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {},
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    },
    flex1: {
        display: 'flex',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    filterText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        alignSelf: 'center',
    }
})
