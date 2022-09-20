import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import MenuReduser from "./MenuReduser";
import { reducer as formReducer } from 'redux-form'
import TermsReduser from "./TermsReduser";
import UserProfileReduser from "./UserProfileReduser";
import AuthReduser from "./AuthReduser";
import OrderReduser from "./OrderReduser";


let ReduxCombine = combineReducers({
    MenuReduser: MenuReduser,
    TermsReduser: TermsReduser,
    UserProfileReduser: UserProfileReduser,
    AuthReduser: AuthReduser,
    OrderReduser: OrderReduser,
    form: formReducer
})

let Store = legacy_createStore(ReduxCombine, applyMiddleware(thunk))

window.store = Store;

export default Store