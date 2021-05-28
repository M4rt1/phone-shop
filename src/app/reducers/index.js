import { combineReducers } from "redux";
import showAbout from './showAbout';
import showProducts from "./showProducts";
import showContact from "./showContact";

export default combineReducers({
    showAbout,
    showProducts,
    showContact
})