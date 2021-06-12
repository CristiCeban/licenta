import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {BrowseStackParamList} from "../../types";
import Colors from "../constants/Colors";
import BrowseScreen from "../screens/Browse/BrowseScreen/BrowseScreen";
import {LocalizationContext} from "../contexts/LocalizationContext";

const Stack = createStackNavigator<BrowseStackParamList>()

const BrowseStack = () => {
    const {t} = useContext(LocalizationContext)

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
                options={{
                    title: t('screenHeaders.browse.browseScreen'),
                    headerTitleStyle: {color: 'white', alignSelf: 'center'}
                }}
            />
        </Stack.Navigator>
    )
}

export default BrowseStack
