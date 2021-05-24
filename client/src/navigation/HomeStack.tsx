import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeStackParamList} from "../../types";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home/HomeScreen/HomeScreen";

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Home'}
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
                name={'Home'}
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeStack