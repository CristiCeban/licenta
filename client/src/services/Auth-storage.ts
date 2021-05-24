import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from "../config/Config";

export default class AuthStorage {
    static async getToken() {
        const bodyString = await AsyncStorage.getItem(Config.tokenVariableName)
        const body = bodyString ? JSON.parse(bodyString) : null
        return body?.token || null
    }

    static async setToken(token: string) {
        const body = JSON.stringify({token})
        return await AsyncStorage.setItem(Config.tokenVariableName, body)
    }

    static async removeToken() {
        return await AsyncStorage.removeItem(Config.tokenVariableName)
    }

    static async setLanguage(language: string) {
        const body = JSON.stringify({language})
        return await AsyncStorage.setItem(Config.languageVariableName, body)
    }

    static async getLanguage() {
        const bodyString = await AsyncStorage.getItem(Config.languageVariableName)
        const body = bodyString ? JSON.parse(bodyString) : null
        return body?.language || 'en'
    }
}