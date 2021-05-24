import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileStackParamList} from "../../types";
import Colors from "../constants/Colors";
import ProfileScreen from "../screens/Profile/ProfileScreen/ProfileScreen";

const Stack = createStackNavigator<ProfileStackParamList>()

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Profile'}
            screenOptions={{
                headerTintColor: Colors.background1,
                headerStyle: {
                    backgroundColor: Colors.background1,
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomWidth: 0,
                }
            }}
        >
            <Stack.Screen
                name={'Profile'}
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack