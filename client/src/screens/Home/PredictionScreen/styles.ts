import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

const width = Dimensions.get('window').width - 20

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
        paddingHorizontal: 10,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    textInfo: {
        fontSize: 14,
        color: Colors.primaryText,
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        // margin: 40,
        borderRadius: 10,
        backgroundColor: Colors.topGradient,
    },
    containerImageAndButton: {
        display: 'flex',
        flex: 1,
    },
    imageContainer: {
        display: 'flex',
        flex: 1,
    },
    image: {
        flex: 1,
        width,
        height: undefined,
    },
    sendButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        // margin: 40,
        borderRadius: 10,
        backgroundColor: Colors.topGradient,
    },
    icon: {
        marginRight: 5,
    }
})