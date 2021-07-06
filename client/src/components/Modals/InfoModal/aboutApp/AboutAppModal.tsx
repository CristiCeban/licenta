import React from "react";
import {Linking, Text, View} from "react-native";
import {styles} from "./styles";
import Config from "../../../../config/Config";

type ModalParams = {
    t: (string: string) => string
}

const AboutAppModal = ({t}: ModalParams) => {
    const onPress = () => {
        Linking.openURL(`mailto:${Config.author}`)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {t('aboutApp.info.app')}
            </Text>
            <Text style={styles.text}>
                {t('aboutApp.info.mail')}
            </Text>
            <Text style={styles.textMail} onPress={onPress}>
                {Config.author}
            </Text>
        </View>
    )
}

export default AboutAppModal
