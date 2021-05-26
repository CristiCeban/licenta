import React, {useEffect} from "react";
import * as ImagePicker from "expo-image-picker";
import {Platform, View} from "react-native";
import {TakePhotoType} from "../../../models/Image";

type SelectPhotoParams = {
    isShowing: boolean,
    callbackSuccess: (image: TakePhotoType) => void,
    callbackCancel: () => void,
}

const SelectPhoto = ({isShowing, callbackSuccess, callbackCancel}: SelectPhotoParams) => {

    const requestPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const permissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResponse.status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                callbackCancel()
            } else if (permissionResponse.status === 'granted')
                await selectPhoto()
        } else {
            callbackCancel()
        }
    }

    const selectPhoto = async () => {
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            }
        );

        if (!pickerResult.cancelled) {
            callbackSuccess((pickerResult as TakePhotoType))
        } else {
            callbackCancel()
        }
    }

    useEffect(() => {
        (async () => {
            if (isShowing) {
                if ((await ImagePicker.getMediaLibraryPermissionsAsync()).status === 'granted')
                    await selectPhoto()
                else
                    await requestPermissionAsync()
            }
        })()
    }, [isShowing])

    return (
        <View/>
    )
}

export default SelectPhoto