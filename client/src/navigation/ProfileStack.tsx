import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ProfileStackParamList} from "../../types";
import Colors from "../constants/Colors";
import ProfileScreen from "../screens/Profile/ProfileScreen/ProfileScreen";
import {LocalizationContext} from "../contexts/LocalizationContext";

const Stack = createStackNavigator<ProfileStackParamList>()

const ProfileStack = () => {
    const {t} = useContext(LocalizationContext)

    return (
        <Stack.Navigator
            initialRouteName={'Profile'}
            screenOptions={{
                headerTintColor:Colors.background1,
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
                options={{
                    title: t('screenHeaders.profile.profile'),
                    headerTitleStyle: {color:'white',alignSelf:'center'}
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack