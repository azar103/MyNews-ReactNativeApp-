import { createStore } from "redux";
import getCountry from "./Reducers/countryReducer";


export default createStore(getCountry)