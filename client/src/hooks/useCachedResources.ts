import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    ...Ionicons.font,
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setTimeout(() => {
                    setLoadingComplete(true);
                    SplashScreen.hideAsync();
                }, 1500)

            }
        })()
    }, []);

    return isLoadingComplete;
}