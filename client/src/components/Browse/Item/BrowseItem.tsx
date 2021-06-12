import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {BrowseItemType} from "../../../models/browseItem";
import Config from "../../../config/Config";
import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer";

type BrowseItemParams = {
    item: BrowseItemType
}

const BrowseItem = ({item: {_id, date, path, percent}}: BrowseItemParams) => {
    const [isShowingPhotoModal, setShowPhotoModal] = useState<boolean>(false)

    const type = percent > 0.5 ? `Pneumonia ${(percent * 100).toFixed(2)}%` : 'Normal'
    const uri = Config.imageUrl + path

    return (
        <View style={styles.container}>

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
                    imageUrls={[{url: uri}]}
                    index={0}
                />

            </Modal>

            <View style={styles.flexRow}>
                <View style={styles.flexContainer}>
                    <TouchableOpacity onPress={() => setShowPhotoModal(true)}>
                        <Image source={{uri}} style={styles.imageContainer}/>
                    </TouchableOpacity>
                </View>

                <View style={{...styles.flexContainer, ...styles.infoContainer}}>
                    <Text style={styles.text}>{new Date(date).toDateString()}</Text>
                    <Text style={{...styles.text, ...styles.typeContainer}}>{type}</Text>
                </View>
            </View>

        </View>
    )
}

export default BrowseItem
