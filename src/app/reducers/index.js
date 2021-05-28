import { combineReducers } from "redux";
import showAbout from './showAbout';
import showProducts from "./showProducts";
import showContact from "./showContact";
import showNavMenu from "./showNavMenu";

export default combineReducers({
    showAbout,
    showProducts,
    showContact,
    showNavMenu
})