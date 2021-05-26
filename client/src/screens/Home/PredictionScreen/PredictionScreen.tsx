import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import TakePhoto from "../../../components/general/TakePhoto/TakePhoto";
import {TakePhotoType} from "../../../models/Image";
import SelectPhoto from "../../../components/general/SelectPhoto/SelectPhoto";

const PredictionScreen = () => {
    const [isShowingTakePhoto, setShowingTakePhoto] = useState<boolean>(false)
    const [isShowingSelectPhoto, setShowingSelectPhoto] = useState<boolean>(false)

    const showingPhotoSuccess = (image: TakePhotoType) => {
        console.log(image)
    }

    const selectPhotoSuccess = (image: any) => {
        console.log(image)
    }

    const showingPhotoCancel = () => setShowingTakePhoto(false)
    const selectPhotoCancel = () => setShowingSelectPhoto(false)

    return (
        <View style={styles.container}>
            <Text style={styles.textInfo}>
                Take a image with camera or select one from existing in media library,Please pay attention what image
                should be the actual image of a x-ray because NN works only with x-ray,otherwise it would be garbage
                input -> garbage output
            </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowingTakePhoto(true)}>
                <Text style={styles.textInfo}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowingSelectPhoto(true)}>
                <Text style={styles.textInfo}>Select from camera</Text>
            </TouchableOpacity>

            <TakePhoto isShowing={isShowingTakePhoto} callbackSuccess={showingPhotoSuccess}
                       callbackCancel={showingPhotoCancel}/>

            <SelectPhoto callbackCancel={selectPhotoCancel} callbackSuccess={selectPhotoSuccess}
                         isShowing={isShowingSelectPhoto}/>

        </View>
    )
}

export default PredictionScreen