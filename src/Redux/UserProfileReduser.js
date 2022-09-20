import React from "react";
import MasterCard from "../../src/Components/Image/MasterCard.svg"
import Visa from "../../src/Components/Image/Visa.svg"
import Visa_White from "../../src/Components/Image/Visa_white.svg"
import MasterCard_white from "../../src/Components/Image/MasterCard_white.svg"

const ADD_NEW_CARD = "/USER_PROFILE/ADD_NEW_CARD"
const ADD_NEW_LOCATION_ADDRESS = "/USER_PROFILE/ADD_NEW_LOCATION_ADDRESS"
const UPDATE_LOCATION_ADRESS = "/USER_PROFILE/UPDATE_LOCATION_ADRESS"
const ADD_ORDER = "/USER_PROFILE/ADD_ORDER"
const UPDATE_PROFILE_INFO = "/USER_PROFILE/UPDATE_PROFILE_INFO"
const DELETE_CARD = "/USER_PROFILE/DELETE_CARD"
const DELETE_LOCATION_ADDRESS = "/USER_PROFILE/DELETE_LOCATION_ADDRESS"
const CLEAR_CART = "/USER_PROFILE/CLEAR_CART"

let initialState = {
    //All Terms
    deposits: "27 580",
    creditCarts: [
        {
            id: 1,
            paymentSystem: MasterCard,
            paymentSystemWhite: MasterCard_white,
            cardNumber: "1111 2222 3333 4444",
            lastNumber: "4444",
            cardCVC: "231",
            cardDate: "01/22",
            userCardName: "Name",
        },
        {
            id: 2,
            paymentSystem: Visa,
            paymentSystemWhite: Visa_White,
            cardNumber: "2222 3333 4444 5555",
            lastNumber: "5555",
            cardCVC: "231",
            cardDate: "01/22",
            userCardName: "Name",
        }
    ],
    profileName: "",
    location: [
        {
            id: 1,
            addressName: 'Дом',
            tower: "Меркурий Сити Тауэр",
            entry: "Центральный",
            housefloor: "28",
            apartment: "62",
            security: "62",
            comment: "Оставляйте в лифте!"
        },
        {
            id: 2,
            addressName: 'Квартира',
            tower: "Меркурий Сити Тауэр",
            entry: "Центральный",
            housefloor: "28",
            apartment: "62",
            security: "62",
            comment: "Оставляйте в лифте!"
        }
    ],
    cart: JSON.parse(localStorage.getItem("AddedOrderInBasket")) || [],

}

const UserProfileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER: {
            let newOrder = {
                id: action.data.id,
                img: action.data.img,
                ItemTitle: action.data.ItemTitle,
                ItemText: action.data.ItemText,
                totalPrice: action.data.totalPrice,
                ItemPrice: action.data.ItemPrice,
                count: action.data.count,
                additionallyTitle: action.data.additionallyTitle,
                deliveryPrice: 0,
            };
            let newState = {...state}
            const orders = []
            orders.push(action.data)
            newState.cart = [...state.cart, newOrder];
            localStorage.setItem("AddedOrderInBasket", JSON.stringify(orders))
            return (newState)
        }
        case CLEAR_CART: {
            let newState = {...state}
            newState.cart = [...state.cart.filter(e => e.id === undefined)];
            localStorage.removeItem("AddedOrderInBasket")
            return (newState)
        }
        case ADD_NEW_LOCATION_ADDRESS: {
            let newLocation = {
                id: state.location.length + 1,
                addressName: action.data.newAddressName,
                tower: action.data.newTower,
                entry: action.data.newEntry,
                housefloor: action.data.newHousefloor,
                apartment: action.data.newApartment,
                security: action.data.newSecurity,
                comment: action.data.newComment
            };
            let newState = {...state}
            newState.location = [...state.location, newLocation]
            return (newState)
        }
        case DELETE_LOCATION_ADDRESS: {
            let newState = {...state}
            newState.location = [...state.location.filter(e => e.id !== action.id)];
            return (newState)
        }
        case UPDATE_PROFILE_INFO: {
            return {
                ...state, profileName: action.data.name
            }
        }
        case ADD_NEW_CARD: {
            let newCard = {
                id: state.creditCarts.length + 1,
                paymentSystem: Visa,
                cardNumber: action.data.cardNumber,
                cardDate: action.data.cardDate,
                cardCVC: action.data.cardCVC,
                userCardName: action.data.userCardName,
                lastNumber: action.data.cardNumber.substring(action.data.cardNumber.length - 4)
            };
            let newState = {...state}
            newState.creditCarts = [...state.creditCarts, newCard]
            return (newState)
        }
        case DELETE_CARD: {
            let newState = {...state}
            newState.creditCarts = [...state.creditCarts.filter(e => e.id !== action.id)];
            return (newState)

        }
        case UPDATE_LOCATION_ADRESS: {
            return {
                ...state,
                location: state.location.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, addressName: action.data.addressName,
                            tower: action.data.tower,
                            entry: action.data.entry, housefloor: action.data.housefloor,
                            apartment: action.data.apartment, security: action.data.security,
                            comment: action.data.comment
                        }
                    }
                    return u
                })
            }
        }

        default:
            return state
    }
}

export const updateLocationAdress = (data, id) => ({type: UPDATE_LOCATION_ADRESS, data: data, id: id})
export const addNewCard = (data) => ({type: ADD_NEW_CARD, data: data})
export const deleteCard = (id) => ({type: DELETE_CARD, id: id})
export const setOrder = (data) => ({type: ADD_ORDER, data: data})
export const setProfileInfo = (data) => ({type: UPDATE_PROFILE_INFO, data: data})
export const addNewLocationAdderess = (data) => ({type: ADD_NEW_LOCATION_ADDRESS, data: data})
export const deleteLocationAddress = (id) => ({type: DELETE_LOCATION_ADDRESS, id: id})
export const clearCart = () => ({type: CLEAR_CART})

export default UserProfileReduser