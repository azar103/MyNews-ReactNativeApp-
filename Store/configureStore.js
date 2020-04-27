import { createStore } from "redux";
import getCountry from "./Reducers/countryReducer";
import toggleFavorite from './Reducers/toggleFavoriteReducer'
import {  persistCombineReducers } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {getCountry,toggleFavorite}))