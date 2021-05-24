import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import {navigationRef} from "../services/RootNavigation";
import LocalizationContextProvider from "../contexts/LocalizationContext";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../store";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStorage from "../services/Auth-storage";
import {setTokenAction} from "../store/actions/authActions";

const Navigation = () => {
    const dispatch = useDispatch()
    const {token} = useSelector((state: ApplicationState) => state.authReducer)

    useEffect(() => {
        (async () => {
            const token = await AuthStorage.getToken()

            if (token)
                dispatch(setTokenAction(token))
        })()
    }, [])

    return (
        <LocalizationContextProvider>
            <NavigationContainer
                ref={navigationRef}
            >{token ?
                <BottomTabNavigator/>
                :
                <AuthStack/>
            }
            </NavigationContainer>
        </LocalizationContextProvider>
    )
}

export default Navigation