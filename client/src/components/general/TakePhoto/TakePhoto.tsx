import React, {useEffect} from "react";
import {Platform, View} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {TakePhotoType} from "../../../models/Image";

type TakePhotoParams = {
    isShowing: boolean,
    callbackSuccess: (image: TakePhotoType) => void,
    callbackCancel: () => void,
}

const TakePhoto = ({isShowing, callbackSuccess, callbackCancel}: TakePhotoParams) => {

    const requestPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const permissionResponse = await ImagePicker.requestCameraPermissionsAsync();
            console.log(permissionResponse)
            if (permissionResponse.status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                callbackCancel()
            } else if (permissionResponse.status === 'granted')
                await takePhoto()
        } else {
            callbackCancel()
        }
    }

    useEffect(() => {
        (async () => {
            if (isShowing) {
                if ((await ImagePicker.getCameraPermissionsAsync()).status === 'granted')
                    await takePhoto()
                else
                    await requestPermissionAsync()
            }

        })()
    }, [isShowing])

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.cancelled) {
            callbackSuccess((result as TakePhotoType))
        } else {
            callbackCancel()
        }
    };

    return (
        <View/>
    )
}

export default TakePhoto