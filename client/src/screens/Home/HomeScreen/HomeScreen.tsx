import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Prediction')}>
                <Text style={styles.textButton}>
                    Start a new prediction
                </Text>
            </TouchableOpacity>
            <Text>
                HOME SCREEN
            </Text>
        </View>
    )
}

export default HomeScreen