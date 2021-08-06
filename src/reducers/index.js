import { combineReducers } from "redux";
import placeDataReducer from "./placeDataReducer";
import placeReducer from "./placeRducer";


const rootReducer=combineReducers({
    place:placeReducer,
    placeData:placeDataReducer,
})

export default rootReducer