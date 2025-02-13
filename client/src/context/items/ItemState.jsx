import React, { useReducer } from 'react'
import axios from 'axios'
import ItemContext from './itemContext'
import itemReducer from './itemReducer'
import {
    GET_ITEMS
} from '../../types'

const ItemState = props => {
    const initialState = {
        items: null,
        item: null,
    };

    const [state, dispatch] = useReducer(itemReducer, initialState)

    axios.defaults.withCredentials = true;


    //? get items
    const getItems = async () => {
        try {

            //? api call
            const result = await axios.get(`/api/items`)

            //? dispatch to reducer
            dispatch({
                type: GET_ITEMS,
                payload: result?.data
            })

        } catch (error) {
            console.log(error)
            //? dispatch to reducer
            //TODO error goes here
        }
    }



    //? search item
    const searchItem = async formData => {
        try {

            //? api call
            const result = await axios.post(`/api/items/search`)

            //? dispatch to reducer
            dispatch({
                type: SEARCH_ITEM,
                payload: result?.data
            })


        } catch (error) {
            console.log(error)
            //? dispatch error to reducer
        }
    }




    return (
        <ItemContext.Provider
            value={{
                items: state.items,
                item: state.item,
                getItems,
                searchItem
            }}
        >
            {props.children}
        </ItemContext.Provider>
    )
}


export default ItemState