import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {onLogoutAction} from "../../../store/actions/authActions";

const ProfileScreen = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(onLogoutAction())
    }

    return (
        <View>
            <Text>
                ProfileScreen
            </Text>
            <TouchableOpacity onPress={onLogout}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen