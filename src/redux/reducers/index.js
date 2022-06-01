import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './userReducer';
import { RESET } from "../constants/user";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
}

const appReducer = combineReducers({
    userReducer
})

const rootReducer = (state, action) => {
    if (action.type === RESET) {
        //reset state
        state = undefined
        //reset local storage
        localStorage.clear()
    }
    return appReducer(state, action)

}


export default persistReducer(persistConfig, rootReducer)