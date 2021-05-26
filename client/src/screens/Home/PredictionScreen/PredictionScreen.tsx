import React, {useRef, useState} from "react";
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import Modal from 'react-native-modal';
import {styles} from "./styles";
import TakePhoto from "../../../components/general/TakePhoto/TakePhoto";
import {TakePhotoType} from "../../../models/Image";
import SelectPhoto from "../../../components/general/SelectPhoto/SelectPhoto";
import {useDispatch} from "react-redux";
import Colors from "../../../constants/Colors";
import Utils from "../../../services/Utils";
import ApiService from "../../../services/ApiService";
import ImageViewer from "react-native-image-zoom-viewer";
import {PredictType} from "../../../models/predict";


const PredictionScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [prediction, setPrediction] = useState<PredictType>()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const formikRef = useRef<any>(null)
    const [isShowingPhotoModal, setShowPhotoModal] = useState<boolean>(false)
    const [isShowingTakePhoto, setShowingTakePhoto] = useState<boolean>(false)
    const [isShowingSelectPhoto, setShowingSelectPhoto] = useState<boolean>(false)

    const showingPhotoSuccess = (image: TakePhotoType) => {
        formikRef?.current?.setFieldValue('image', image)
        setShowingTakePhoto(false)
    }

    const initFormValue = {
        image: {
            cancelled: false,
            height: 0,
            type: '',
            uri: '',
            width: 0
        }
    }

    const selectPhotoSuccess = (image: TakePhotoType) => {
        formikRef?.current?.setFieldValue('image', image)
        setShowingSelectPhoto(false)
    }
    const showingPhotoCancel = () => setShowingTakePhoto(false)
    const selectPhotoCancel = () => setShowingSelectPhoto(false)
    const onDelete = () => formikRef?.current?.resetForm()
    const onSubmit = async (values: any) => {
        try {
            setIsLoading(true)
            const formData = Utils.createForm(values)
            const response = await ApiService.postFormData('nn/predict', formData)
            setPrediction((response as unknown as PredictType))
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textInfo}>
                Take a image with camera or select one from existing in media library,Please pay attention what image
                should be the actual image of a x-ray because NN works only with x-ray,otherwise it would be garbage
                input -{">"} garbage output
            </Text>

            <View style={styles.flexRow}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowingTakePhoto(true)}>
                    <MaterialIcons name="photo-camera" size={20} color={Colors.primaryText} style={styles.icon}/>
                    <Text style={styles.textInfo}>Take a photo</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowingSelectPhoto(true)}>
                    <MaterialIcons name="perm-media" size={20} color={Colors.primaryText} style={styles.icon}/>
                    <Text style={styles.textInfo}>Media Library</Text>
                </TouchableOpacity>
            </View>


            <TakePhoto isShowing={isShowingTakePhoto} callbackSuccess={showingPhotoSuccess}
                       callbackCancel={showingPhotoCancel}/>

            <SelectPhoto callbackCancel={selectPhotoCancel} callbackSuccess={selectPhotoSuccess}
                         isShowing={isShowingSelectPhoto}/>

            {prediction ?
            <Text style={styles.textInfo}>
                {`${(100 * prediction.percent).toFixed(2)}%`}
            </Text> : null}

            <Formik
                innerRef={formikRef}
                initialValues={initFormValue}
                onSubmit={onSubmit}
            >{({
                   values,
                   handleSubmit
               }) => (
                <View style={styles.containerImageAndButton}>

                    <Modal
                        isVisible={isShowingPhotoModal}
                        backdropColor={'black'}
                        backdropOpacity={1}
                        onBackButtonPress={() => setShowPhotoModal(false)}
                        onBackdropPress={() => setShowPhotoModal(false)}
                    >
                        <ImageViewer
                            enableImageZoom={true}
                            enableSwipeDown={true}
                            onSwipeDown={() => setShowPhotoModal(false)}
                            imageUrls={[{url: values.image.uri}]}
                            index={0}
                        />

                    </Modal>
                    {values.image.uri ?
                        <View style={styles.imageContainer}>
                            <TouchableOpacity style={{flex: 1}} onPress={() => setShowPhotoModal(true)}>
                                <Image source={{uri: values.image.uri}} style={styles.image}/>
                            </TouchableOpacity>

                            <View style={styles.flexRow}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
                                    {isLoading ?
                                        <ActivityIndicator color={Colors.main1} size={'small'}/>
                                        :
                                        <>
                                            <MaterialIcons name="send" size={20} color={Colors.primaryText}
                                                           style={styles.icon}/>
                                            <Text style={styles.textInfo}>Send</Text>
                                        </>
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonContainer} onPress={onDelete}>
                                    <MaterialIcons name="delete" size={20} color={Colors.primaryText}
                                                   style={styles.icon}/>
                                    <Text style={styles.textInfo}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View> : null}
                </View>
            )}
            </Formik>

        </View>
    )
}

export default PredictionScreen