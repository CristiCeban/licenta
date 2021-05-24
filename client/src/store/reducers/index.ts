import {combineReducers} from 'redux'
import {AuthReducer} from "./authReducers";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>
export {rootReducer}