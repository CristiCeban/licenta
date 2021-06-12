import React, {useContext, useRef} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./styles";
import PneumoniaModal from "../../../components/Modals/InfoModal/PneumoniaModal/PneumoniaModal";
import AboutAppModal from "../../../components/Modals/InfoModal/aboutApp/AboutAppModal";
import {LocalizationContext} from "../../../contexts/LocalizationContext";

const InfoScreen = () => {
    const {t} = useContext(LocalizationContext)
    const pneumoniaModalize = useRef<Modalize>()
    const aboutAppModalize = useRef<Modalize>()

    const onOpenPneumoniaModalize = () => pneumoniaModalize?.current?.open()

    const onOpenAboutAppModalize = () => aboutAppModalize?.current?.open()

    return (
        <View style={styles.container}>
            <Portal>
                <Modalize
                    ref={pneumoniaModalize}
                    modalStyle={styles.modalize}
                >
                    <PneumoniaModal t={t}/>
                </Modalize>

                <Modalize
                    ref={aboutAppModalize}
                    modalStyle={styles.modalize}
                >
                    <AboutAppModal t={t}/>
                </Modalize>
            </Portal>

            <View style={styles.containerInfo}>
                <TouchableOpacity style={styles.containerInfo1} onPress={onOpenPneumoniaModalize}>
                    <Ionicons name="information-circle" size={24} color="white"/>
                    <Text style={styles.text}>{t('aboutApp.aboutPneumonia')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerInfo1} onPress={onOpenAboutAppModalize}>
                    <Ionicons name="information-circle-outline" size={24} color="white"/>
                    <Text style={styles.text}>{t('aboutApp.aboutApp')}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default InfoScreen
