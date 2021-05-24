import {StyleSheet} from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.background1,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexEnd:{
      display:'flex',
      alignItems:'flex-end',
      justifyContent:'center'
    },
    containerFormik: {
        display: 'flex',
        justifyContent:'center',
        flex: 1,
        marginHorizontal: 20,
    },
    textContainer: {
        backgroundColor: Colors.darkGrey1,
        marginTop: 20,
        marginBottom: 5,
        height: 40,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 100,
    },
    text: {
        color: Colors.text
    },
    textInput: {
        color: Colors.primaryText,
    },
    textError: {
        fontSize: 12,
        color: Colors.main1,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGrey1,
        height: 60,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
    },
    facebookContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.facebook,
        height: 60,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
    },
    googleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textGoogle:{
        color:Colors.background1,
    }
})