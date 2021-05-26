import React, {useRef} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {styles} from "./styles";
import PneumoniaModal from "../../../components/Modals/InfoModal/PneumoniaModal/PneumoniaModal";
import AboutAppModal from "../../../components/Modals/InfoModal/aboutApp/AboutAppModal";

const InfoScreen = () => {
    const pneumoniaModalize = useRef<Modalize>()
    const aboutAppModalize = useRef<Modalize>()


    const onOpenPneumoniaModalize = () => pneumoniaModalize?.current?.open()

    const onOpenAboutAppModalize = () => aboutAppModalize?.current?.open()


    const onClosePneumoniaModalize = () => pneumoniaModalize?.current?.close()

    return (
        <View style={styles.container}>
            <Portal>
                <Modalize
                    ref={pneumoniaModalize}
                    // adjustToContentHeight
                    modalStyle={styles.modalize}
                >
                    <PneumoniaModal/>
                </Modalize>

                <Modalize
                    ref={aboutAppModalize}
                    // adjustToContentHeight
                    modalStyle={styles.modalize}
                >
                    <AboutAppModal/>
                </Modalize>
            </Portal>



            <TouchableOpacity onPress={onOpenPneumoniaModalize}>
                <Text style={styles.text}>ABOUT PNEUMONIA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpenAboutAppModalize}>
                <Text style={styles.text}>ABOUT APP</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                InfoScreen
            </Text>
        </View>
    )
}

export default InfoScreen