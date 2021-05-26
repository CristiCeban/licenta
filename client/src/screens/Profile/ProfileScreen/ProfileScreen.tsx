import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {onLogoutAction} from "../../../store/actions/authActions";
import {styles} from "./styles";

const ProfileScreen = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(onLogoutAction())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ProfileScreen
            </Text>
            <TouchableOpacity onPress={onLogout}>
                <Text style={styles.text}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen