import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/user';

const initialState = {
    isAuth: false,
    loading: false,
    error: null,
    message: null,
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null,
                isAuth: false
            }

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isAuth: true,
                loading: false,
                error: null
            }

        case LOGIN_FAIL:
        case SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                user: null,
                loading: false,
                error: null,
                message: null
            }

        default:
            return state
    }
}