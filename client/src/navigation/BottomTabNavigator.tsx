import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabParamList} from "../../types";
import Colors from "../constants/Colors";
import HomeStack from "./HomeStack";
import {Ionicons} from "@expo/vector-icons";
import BrowseStack from "./BrowseStack";
import InfoStack from "./InfoStack";
import ProfileStack from "./ProfileStack";

const TabBarIcon = (props: { name: string, color: string }) => {
    return (
        <Ionicons name={name} size={30} style={{marginBottom: -3}} {...props}/>
    )
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            lazy={true}
            tabBarOptions={{
                activeTintColor: Colors.main1,
                inactiveTintColor: Colors.secondaryText,
                style: {
                    backgroundColor: Colors.menuBar,
                    shadowOpacity: 0,
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
        >

            <BottomTab.Screen
                name={'HomeTab'}
                component={HomeStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color}) => <TabBarIcon name={'ios-home'} color={color}/>
                }}
            />

            <BottomTab.Screen
                name={'BrowseTab'}
                component={BrowseStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color}) => <TabBarIcon name={'browsers-outline'} color={color}/>
                }}
            />

            <BottomTab.Screen
                name={'InfoTab'}
                component={InfoStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color}) => <TabBarIcon name={'md-information-circle-outline'} color={color}/>
                }}
            />

            <BottomTab.Screen
                name={'ProfileTab'}
                component={ProfileStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color}) => <TabBarIcon name={'person'} color={color}/>
                }}
            />

        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator