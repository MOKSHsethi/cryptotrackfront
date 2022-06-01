import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

const middleware = [thunk];


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)