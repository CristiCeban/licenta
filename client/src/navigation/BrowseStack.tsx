import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {BrowseStackParamList} from "../../types";
import Colors from "../constants/Colors";
import BrowseScreen from "../screens/Browse/BrowseScreen/BrowseScreen";

const Stack = createStackNavigator<BrowseStackParamList>()

const BrowseStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Browse'}
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
                name={'Browse'}
                component={BrowseScreen}
            />
        </Stack.Navigator>
    )
}

export default BrowseStack