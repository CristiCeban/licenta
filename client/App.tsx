import React from 'react';
import {Provider} from "react-redux";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from "native-base";
import {Host} from 'react-native-portalize';
import useCachedResources from "./src/hooks/useCachedResources";
import {store} from "./src/store";
import Navigation from "./src/navigation";
import {StatusBar} from "expo-status-bar";
import {EN} from "./translations/en";
import {RO} from "./translations/ro";
import i18n from "i18n-js";

const en = EN
const ro = RO

i18n.fallbacks = true
i18n.translations = {en, ro}

export default function App() {
    const isLoadingComplete = useCachedResources()

    if (!isLoadingComplete)
        return null

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Root>
                    <Host>
                        <Navigation/>
                        <StatusBar style={'light'}/>
                    </Host>
                </Root>
            </SafeAreaProvider>
        </Provider>
    );
}

