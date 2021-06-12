import {BrowseItemType} from "../../models/browseItem";
import {Dispatch} from "react";
import ApiService from "../../services/ApiService";

type BrowseData = {
    predictions: Array<BrowseItemType>,
    totalPages: number,
    currentPage: number,
}

export interface IBrowseGetPredictions {
    readonly type: 'BROWSE/GET_PREDICTIONS',
    payload: {
        data: BrowseData,
        initialLoading: boolean
    }
}

export interface IBrowseSetLoading {
    readonly type: 'BROWSE/SET_LOADING',
    payload: boolean,
}

export interface IBrowseSetLoadingMore {
    readonly type: 'BROWSE/SET_LOADING_MORE',
    payload: boolean,
}

export type BrowseActions =
    | IBrowseGetPredictions
    | IBrowseSetLoading
    | IBrowseSetLoadingMore

export const onGetPredictions = (params: any = {}, initialLoading: boolean = true) => {
    const param = {page: 1, limit: 10}
    params = Object.assign(param, params)
    const userRequest = params?.user ? '/user' : ''
    return async (dispatch: Dispatch<BrowseActions>) => {
        const loadingType = initialLoading ? 'BROWSE/SET_LOADING' : 'BROWSE/SET_LOADING_MORE'
        try {
            dispatch({type: loadingType, payload: true})
            const response = await ApiService.get(`browse${userRequest}`, params)
            dispatch({
                type: 'BROWSE/GET_PREDICTIONS',
                payload: {
                    data: (response as unknown as BrowseData),
                    initialLoading
                }
            })
        } catch (e) {
            console.warn(e)
        } finally {
            dispatch({type: loadingType, payload: false})
        }
    }
}
