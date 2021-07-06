import React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";

type ModalParams = {
    t: (string: string) => string
}

const PneumoniaModal = ({t}: ModalParams) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {t('aboutApp.info.pneumonia')}
            </Text>
        </View>
    )
}

export default PneumoniaModal
