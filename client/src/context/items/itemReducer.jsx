import {
    GET_ITEMS,
    SEARCH_ITEM
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                ...action.payload,
                items: action.payload?.items,
                error: false
            }
        case SEARCH_ITEM:
            return {
                ...state,
                ...action.payload,
                item: action.payload?.item,
                error: false
            }
        default:
            return state
    }
}