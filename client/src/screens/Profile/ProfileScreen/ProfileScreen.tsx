import React, {useContext} from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import {onLogoutAction} from "../../../store/actions/authActions";
import {styles} from "./styles";
import {ApplicationState} from "../../../store";
import Colors from "../../../constants/Colors";
import LanguagePicker from "../../../components/general/LanguagePicker/LanguagePicker";
import {LocalizationContext} from "../../../contexts/LocalizationContext";

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const {email, _id, facebookId} = useSelector((state: ApplicationState) => state.authReducer.user)
    const {t} = useContext(LocalizationContext)

    const onLogout = () => {
        dispatch(onLogoutAction())
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textInformation}>
                    {t('profile.profileInformation')}
                </Text>
                <Ionicons name="exit" size={24} color={Colors.main1} onPress={onLogout}/>
            </View>

            <View style={styles.line}/>

            <View style={styles.flexEnd}>
                <LanguagePicker/>
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.text}>{t('profile.id')}: {_id}</Text>
                <Text style={styles.text}>{t('auth.email')}: {email}</Text>
                {facebookId ? <Text style={styles.text}>{t('profile.facebookId')}: {facebookId}</Text> : null}
            </View>


        </View>
    )
}

export default ProfileScreen
