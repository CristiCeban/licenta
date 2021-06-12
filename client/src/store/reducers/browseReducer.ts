import {BrowseItemType} from "../../models/browseItem";
import {BrowseActions} from "../actions/browseActions";

type BrowseReducerState = {
    isLoading: boolean,
    isLoadingMore: boolean,
    totalPages: number,
    nextPage: number,
    predictions: Array<BrowseItemType>
}

const initialState: BrowseReducerState = {
    isLoading: false,
    isLoadingMore: false,
    nextPage: 1,
    totalPages: 2,
    predictions: []
}

const BrowseReducer = (state: BrowseReducerState = initialState, action: BrowseActions) => {
    switch (action.type) {
        case "BROWSE/GET_PREDICTIONS":
            if (action.payload.initialLoading)
                return {
                    ...state,
                    predictions: action.payload.data.predictions,
                    nextPage: 2,
                    totalPages: action.payload.data.totalPages
                }
            else
                return {
                    ...state,
                    predictions: [...state.predictions, ...action.payload.data.predictions],
                    nextPage: state.nextPage + 1,
                    totalPages: action.payload.data.totalPages
                }
        case "BROWSE/SET_LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        case "BROWSE/SET_LOADING_MORE":
            return {
                ...state,
                isLoadingMore: action.payload
            }
        default:
            return state
    }
}

export {BrowseReducer}
