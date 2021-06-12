import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeStackParamList} from "../../types";
import Colors from "../constants/Colors";
import PredictionScreen from "../screens/Home/PredictionScreen/PredictionScreen";
import {LocalizationContext} from "../contexts/LocalizationContext";

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
    const {t} = useContext(LocalizationContext)

    return (
        <Stack.Navigator
            initialRouteName={'Prediction'}
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
                name={'Prediction'}
                component={PredictionScreen}
                options={{
                    title: t('screenHeaders.home.makePredict'),
                    headerTitleStyle: {color: 'white', alignSelf: 'center'}
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
