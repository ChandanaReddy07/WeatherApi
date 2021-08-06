import { combineReducers } from "redux";
import placeDataReducer from "./placeDataReducer";
import placeReducer from "./placeRducer";
import themeReducer from "./themeReducer";


const rootReducer=combineReducers({
    place:placeReducer,
    placeData:placeDataReducer,
    theme:themeReducer
})

export default rootReducer