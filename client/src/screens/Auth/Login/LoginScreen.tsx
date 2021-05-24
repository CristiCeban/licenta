import React, {useContext, useRef} from "react";
import {ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {Formik} from "formik";
import * as yup from 'yup';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import {Entypo, FontAwesome5} from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./styles";
import {LocalizationContext} from "../../../contexts/LocalizationContext";
import Colors from "../../../constants/Colors";
import {ApplicationState} from "../../../store";
import {authLoginAction, onFacebookLogin, onGoogleLogin} from "../../../store/actions/authActions";
import LanguagePicker from "../../../components/general/LanguagePicker/LanguagePicker";

const LoginScreen = () => {
    const {t} = useContext(LocalizationContext)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const {isLoading, loginErrors} = useSelector((state: ApplicationState) => state.authReducer)
    const formikRef = useRef<any>(null)


    const validationSchema = yup.object().shape({
        email: yup.string().required(t('auth.errors.pleaseEnterYourEmail'))
            .min(4, t('auth.errors.email4char'))
            .email(t('auth.errors.pleaseEnterValidEmail')),
        password: yup.string().required(t('auth.errors.pleaseEnterYourPassword'))
            .min(6, t('auth.errors.password6char'))
    })

    const initFormValue = {
        email: '',
        password: '',
    }

    const onSubmit = async (values: any) => {
        dispatch(authLoginAction(values))
    }

    const onFacebook = async () => {
        try {
            await Facebook.initializeAsync({appId: '1124900348023360', appName: 'x-ray'})
            // @ts-ignore
            const {token, type} = await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email']
                },
            );
            if (type === 'success') {
                console.log(token)
                dispatch(onFacebookLogin(token))
            }
        } catch (e) {
            console.warn(e)
            alert(`Facebook Login Error: ${e.message}`);
        }
    }

    const onGoogle = async () => {
        try {
            //TODO CHANGE CLIENT ID
            // @ts-ignore
            const {type, accessToken, user} = await Google.logInAsync({
                androidClientId: '861519663334-rc4ta1tvoi3voep835n0m2sofkcmqjl3.apps.googleusercontent.com',
                // androidClientId: '428182619341-opj71gjrto7420o6078f4ls3lua9f9jo.apps.googleusercontent.com',
                // iosClientId: '861519663334-ekns07bj4dpad21pd31ob6dadhj2md44.apps.googleusercontent.com',
                iosClientId: '428182619341-hkp28a77s5p56latavu3pj2qiiajv96v.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (type === 'success')
                dispatch(onGoogleLogin(accessToken, user))
        } catch (e) {
            console.warn(e)
            alert(`Google Login Error: ${e.message}`);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Formik
                innerRef={formikRef}
                initialValues={initFormValue}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      touched,
                      errors,
                  }) => (
                    <View style={styles.containerFormik}>

                        <View style={styles.flexEnd}>
                            <LanguagePicker/>
                        </View>

                        <View style={{...styles.center, marginVertical: 30}}>
                            <FontAwesome5 name="x-ray" size={60} color={Colors.background2}/>
                        </View>

                        <View style={styles.textContainer}>
                            <TextInput
                                placeholder={t('auth.email')}
                                placeholderTextColor={Colors.secondaryText}
                                value={values.email}
                                style={styles.textInput}
                                returnKeyType={'next'}
                                autoCompleteType={'email'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                autoCapitalize={'none'}
                            />
                        </View>
                        <View style={styles.center}>
                            {touched.email && errors.email ?
                                <Text style={styles.textError}>{errors.email}</Text> : null}
                        </View>

                        <View style={styles.center}>
                            {loginErrors.length && loginErrors.find((error) => error.param === 'email') ?
                                <Text
                                    style={styles.textError}>{loginErrors.find((error) => error.param === 'email')?.msg || ''}</Text> : null}
                        </View>

                        <View style={styles.textContainer}>
                            <TextInput
                                placeholder={t('auth.password')}
                                value={values.password}
                                placeholderTextColor={Colors.secondaryText}
                                style={styles.textInput}
                                returnKeyType={'send'}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.center}>
                            {touched.password && errors.password ?
                                <Text style={styles.textError}>{errors.password}</Text> : null}
                        </View>

                        <View style={styles.center}>
                            {loginErrors.length && loginErrors.find((error) => error.param === 'password') ?
                                <Text
                                    style={styles.textError}>{loginErrors.find((error) => error.param === 'password')?.msg || ''}</Text> : null}
                        </View>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
                            {isLoading ?
                                <View style={styles.center}>
                                    <ActivityIndicator color={Colors.main1} size={'large'}/>
                                </View>
                                :
                                <View style={styles.flexRow}>
                                    <Entypo name="login" style={styles.icon} size={24} color={'white'}/>
                                    <Text style={styles.text}>{t('auth.login')}</Text>
                                </View>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.facebookContainer} onPress={onFacebook}
                                          disabled={isLoading}>
                            {isLoading ?
                                <View style={styles.center}>
                                    <ActivityIndicator color={Colors.main1} size={'large'}/>
                                </View>
                                :
                                <View style={styles.flexRow}>
                                    <FontAwesome5 name={'facebook'} style={styles.icon} color={'white'} size={24}/>
                                    <Text style={styles.text}>{t('auth.loginWithFacebook')}</Text>
                                </View>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.googleContainer} disabled={isLoading}
                                          onPress={onGoogle}>
                            {isLoading ?
                                <View style={styles.center}>
                                    <ActivityIndicator color={Colors.main1} size={'large'}/>
                                </View>
                                :
                                <View style={styles.flexRow}>
                                    <FontAwesome5 name={'google'} style={styles.icon} color={Colors.topGradient}
                                                  size={24}/>
                                    <Text style={styles.textGoogle}>{t('auth.loginWithGoogle')}</Text>
                                </View>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.center} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.text}>{t('auth.dontHaveAnAccountYet')}</Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default LoginScreen