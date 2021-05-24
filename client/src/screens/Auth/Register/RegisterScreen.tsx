import React, {useContext, useRef} from "react";
import {ActivityIndicator, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {Formik} from "formik";
import {ApplicationState} from "../../../store";
import {styles} from "./styles";
import Colors from "../../../constants/Colors";
import {LocalizationContext} from "../../../contexts/LocalizationContext";
import {Entypo, FontAwesome5} from "@expo/vector-icons";

const RegisterScreen = () => {
    const {t} = useContext(LocalizationContext)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const formikRef = useRef<any>(null)
    const {isRegistering, registerErrors} = useSelector((state: ApplicationState) => state.authReducer)

    const validationSchema = yup.object().shape({
        email: yup.string().required(t('auth.errors.pleaseEnterYourEmail'))
            .min(4, t('auth.errors.email4char'))
            .email(t('auth.errors.pleaseEnterValidEmail')),
        password: yup.string().required(t('auth.errors.pleaseEnterYourPassword'))
            .min(6, t('auth.errors.password6char')),
        confirm_password: yup.string().required(t('auth.errors.pleaseRepeatYourPassword'))
            .min(6, t('auth.errors.password6char'))
            .oneOf([yup.ref('password'), undefined], t('auth.errors.passwordMustMatch')),
    })

    const initValues = {
        email: '',
        password: '',
        confirm_password: ''
    }

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <View style={styles.container}>
            <Formik
                innerRef={formikRef}
                initialValues={initValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <View style={styles.containerFormik}>

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
                            {registerErrors.length && registerErrors.find((error) => error.param === 'email') ?
                                <Text
                                    style={styles.textError}>{registerErrors.find((error) => error.param === 'email')?.msg || ''}</Text> : null}
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
                            {registerErrors.length && registerErrors.find((error) => error.param === 'password') ?
                                <Text
                                    style={styles.textError}>{registerErrors.find((error) => error.param === 'password')?.msg || ''}</Text> : null}
                        </View>

                        <View style={styles.textContainer}>
                            <TextInput
                                placeholder={t('auth.passwordConfirmation')}
                                value={values.confirm_password}
                                placeholderTextColor={Colors.secondaryText}
                                style={styles.textInput}
                                returnKeyType={'send'}
                                onChangeText={handleChange('confirm_password')}
                                onBlur={handleBlur('confirm_password')}
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.center}>
                            {touched.password && errors.password ?
                                <Text style={styles.textError}>{errors.confirm_password}</Text> : null}
                        </View>

                        <View style={styles.center}>
                            {registerErrors.length && registerErrors.find((error) => error.param === 'confirm_password') ?
                                <Text
                                    style={styles.textError}>{registerErrors.find((error) => error.param === 'confirm_password')?.msg || ''}</Text> : null}
                        </View>

                        <TouchableOpacity style={styles.buttonContainer}>
                            {isRegistering ?
                                <View style={styles.center}>
                                    <ActivityIndicator color={Colors.main1} size={'large'}/>
                                </View>
                                :
                                <View style={styles.flexRow}>
                                    <Entypo name="login" style={styles.icon} size={24} color={'white'}/>
                                    <Text style={styles.text}>{t('auth.register')}</Text>
                                </View>
                            }
                        </TouchableOpacity>

                    </View>
                )}

            </Formik>
        </View>
    )
}

export default RegisterScreen