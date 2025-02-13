import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
    LOGIN
} from '../../types'

const AuthState = props => {
    const initialState = {
        user: null,
        token: null,
        isAuthenticated: false,
        msg: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState)

    axios.defaults.withCredentials = true;


    //? login
    const login = async formData => {
        try {

            //? api call
            const result = await axios.post(`/api/auth/login`, formData)

            const data = {
                token: '',
                user: '',
                msg: {},
            }

            //? check error state
            if (!result?.data?.msg?.error) {
                //? extracting user from token
                data.user = JSON.parse(atob(result?.data?.token.split('.')[1])).user

                data.token = result?.data?.token
            }

            data.msg = result?.data?.msg

            //? dispatch to reducer
            dispatch({
                type: LOGIN,
                payload: data
            })

        } catch (error) {
            console.log(error)
            //? dispatch to reducer
            //TODO error goes here
        }
    }

    return (

        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                msg: state.msg,
                login
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthState