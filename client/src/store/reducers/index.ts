import {combineReducers} from 'redux'
import {AuthReducer} from "./authReducers";
import {BrowseReducer} from "./browseReducer";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    browseReducer: BrowseReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>
export {rootReducer}
