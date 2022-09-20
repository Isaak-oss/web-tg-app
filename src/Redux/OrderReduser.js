import React from "react";
import MenuItemPhoto from "../Components/Image/MenuItemPhoto.png";



const SET_FINAL_ORDER = "./ORDER_REDUSER/SET_FINAL_ORDER"
const SET_FINAL_ORDER_INFORMATION = "./ORDER_REDUSER/SET_FINAL_ORDER_INFORMATION"

let initialState = {
    order: [],
    orderDeliveryInfo: [],
    orderDeliveryTime: "",
}

const OrderReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINAL_ORDER: {
            let newState={...state}
            newState.order = [...state.order, action.data];
            return(newState)
        }
        case SET_FINAL_ORDER_INFORMATION: {
            let newState={...state}
            newState.order = [...state.order, action.data];
            return(newState)
        }
        default:
            return state
    }
}

export const setFinalOrder = (data) => ({type: SET_FINAL_ORDER, data: data})
export const setFinalOrderInfo = (data) => ({type: SET_FINAL_ORDER_INFORMATION, data: data})

export default OrderReduser