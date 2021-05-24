import React, {useContext} from "react";
import {LocalizationContext} from "../../../contexts/LocalizationContext";
import AuthStorage from "../../../services/Auth-storage";
import {Image, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

const LanguagePicker = () => {
    const {locale, setLocale} = useContext(LocalizationContext)

    const changeLanguage = (language: string) => {
        if (locale === language)
            return

        AuthStorage.setLanguage(language).then(() => {
            setLocale(language)
        })
    }

    return (
        <View style={styles.languageContainer}>
            <TouchableOpacity style={styles.flagContainer} onPress={()=>changeLanguage('en')}>
                <Image source={require('../../../../assets/flags/united-kingdom.png')} style={styles.flagImage}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.flagContainer} onPress={()=>changeLanguage('ro')}>
                <Image source={require('../../../../assets/flags/romania.png')} style={styles.flagImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default LanguagePicker