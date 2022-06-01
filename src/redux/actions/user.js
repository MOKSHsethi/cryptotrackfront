import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    LOGOUT_SUCCESS,
    RESET
} from '../constants/user';

import axios from 'axios';
import { persistor } from '../store'
import { API } from '../../Backend'


export const register = (user) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_REQUEST });

        const authAxios = axios.create({
            baseURL: API,
            headers: {
                "Content-type": 'application/json',
            },
            withCredentials: true
        });

        const { data } = await authAxios.post(
            `/api/user/signup`,
            user,
        );

        dispatch({ type: SIGNUP_SUCCESS, payload: data });

        return data
    } catch (error) {
        dispatch({ type: SIGNUP_FAIL, payload: error.response.data.message });
        return error.response.data
    }
}

export const login = (user) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const authAxios = axios.create({
            baseURL: API,
            headers: {
                "Content-type": 'application/json',
            },
            withCredentials: true
        });

        const { data } = await authAxios.post(
            `/api/user/login`,
            user,
        );

        dispatch({ type: LOGIN_SUCCESS, payload: data });
        return data
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
        return error.response.data;
    }
};

export const logout = () => async (dispatch) => {
    localStorage.clear();
    await persistor.purge();
    dispatch({ type: RESET })

    dispatch({ type: LOGOUT_SUCCESS })
}