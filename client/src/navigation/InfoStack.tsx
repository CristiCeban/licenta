import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text} from 'react-native'
import {InfoStackParamList} from "../../types";
import Colors from "../constants/Colors";
import InfoScreen from "../screens/Info/InfoScreen/InfoScreen";
import {LocalizationContext} from "../contexts/LocalizationContext";

const Stack = createStackNavigator<InfoStackParamList>()

const InfoStack = () => {
    const {t} = useContext(LocalizationContext)
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
                options={{
                    title: t('screenHeaders.info.aboutApp'),
                    headerTitleStyle: {color:'white',alignSelf:'center'}
                }}
            />
        </Stack.Navigator>
    )
}

export default InfoStack