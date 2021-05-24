import React, {createContext, useEffect, useMemo, useState} from "react";
import i18n from "i18n-js";

export const LocalizationContext = createContext<any>(null)

const LocalizationContextProvider = ({children}: any) => {
    const [locale, setLocale] = useState('en')
    const localizationContext = useMemo(
        () => ({
            t: (scope: any, options: any) => i18n.t(scope, {locale, ...options}),
            locale,
            setLocale,
        }),
        [locale]
    )

    useEffect(() => {
        (async () => {
            const language = 'en'
            setLocale(language)
        })()
    }, [])
    return (
        <LocalizationContext.Provider value={localizationContext}>
            {children}
        </LocalizationContext.Provider>
    )
}

export default LocalizationContextProvider