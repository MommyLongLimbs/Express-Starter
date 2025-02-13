import {
    LOGIN
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
                user: action.payload?.user,
                token: action.payload?.token,
                msg: action.payload?.msg,
                isAuthenticated: true,
                error: false
            }
        default:
            return state
    }
}