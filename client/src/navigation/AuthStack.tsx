import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AuthStackParamList} from "../../types";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
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
                name={'Login'}
                component={LoginScreen}
                options={{
                    headerStatusBarHeight: 0
                }}
            />
            <Stack.Screen
                name={'Register'}
                component={RegisterScreen}
                options={{
                    headerStatusBarHeight: 0
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack