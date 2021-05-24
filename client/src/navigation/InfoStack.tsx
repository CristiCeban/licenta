import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {InfoStackParamList} from "../../types";
import Colors from "../constants/Colors";
import InfoScreen from "../screens/Info/InfoScreen/InfoScreen";

const Stack = createStackNavigator<InfoStackParamList>()

const InfoStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Info'}
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
                name={'Info'}
                component={InfoScreen}
            />
        </Stack.Navigator>
    )
}

export default InfoStack