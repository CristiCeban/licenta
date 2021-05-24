import {User} from "../../models/user";
import {ServerErrorType} from "../../models/errors";
import {Dispatch} from "react";
import ApiService from "../../services/ApiService";
import AuthStorage from "../../services/Auth-storage";

export interface IAuthSetLoading {
    readonly type: 'AUTH/SET_LOADING',
    payload: boolean,
}

export interface IAuthLoginAction {
    readonly type: 'AUTH/ON_LOGIN',
    payload: {
        token: string,
        user: User
    },
}

export interface IAuthLogout {
    readonly type: 'AUTH/LOGOUT',
    payload: undefined,
}

export interface ISetToken {
    readonly type: 'AUTH/SET_TOKEN',
    payload: string | undefined,
}

export interface IGetProfile {
    readonly type: 'AUTH/GET_PROFILE',
    payload: User
}

export interface ISetRegister {
    readonly type: 'AUTH/SET_REGISTER',
    payload: boolean
}

export interface ISetErrorsRegister {
    readonly type: 'AUTH/SET_ERRORS_REGISTER',
    payload: Array<ServerErrorType>
}

export interface ISetErrorsLogin {
    readonly type: 'AUTH/SET_ERRORS_LOGIN',
    payload: Array<ServerErrorType>
}

export type AuthAction =
    | IAuthLoginAction
    | IAuthSetLoading
    | IAuthLogout
    | ISetToken
    | IGetProfile
    | ISetRegister
    | ISetErrorsRegister
    | ISetErrorsLogin


export const authLoginAction = (body: any) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: 'AUTH/SET_LOADING', payload: true})
            const response = await ApiService.post('auth/login', body)
            console.log(response)
            //because of interceptors used in apiServices.
            const {token} = (response as any)
            await AuthStorage.setToken(token)
            dispatch({type: 'AUTH/ON_LOGIN', payload: (response as any)})
        } catch (e) {
            console.warn(e)
            dispatch({type: 'AUTH/SET_ERRORS_LOGIN', payload: e.response.data.errors})

        } finally {
            dispatch({type: 'AUTH/SET_LOADING', payload: false})
        }
    }
}

export const onLogoutAction = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            await AuthStorage.removeToken()
            dispatch({type: 'AUTH/LOGOUT', payload: undefined})
        } catch (e) {
            console.warn(e)
        }
    }
}

export const setTokenAction = (token: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: 'AUTH/SET_TOKEN', payload: token})
        } catch (e) {
            console.warn(e)
        }
    }
}