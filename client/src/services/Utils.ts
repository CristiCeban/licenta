import {Platform} from "react-native";

export default {
    createForm: (values: any) => {
        const formData = new FormData();
        const imageUri = Platform.OS === 'android' ? values.image.uri : values.image.uri.replace('file://', '');
        const imageMime = imageUri.substr(imageUri.lastIndexOf('.') + 1);
        formData.append('image', {
            uri: imageUri,
            type: `image/${imageMime}`,
            name: `image.${imageMime}`
        } as any);
        return formData;
    },
}