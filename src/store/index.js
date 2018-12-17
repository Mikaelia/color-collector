import { createStore, combineReducers } from "redux";
import { colors, palettes, visibility, alerts } from "./reducers";
import stateData from "../data/initialState";

const initialState = stateData;

// Combines reducers
const rootReducer = combineReducers({
  colors,
  palettes,
  visibility,
  alerts
});

// Connects store to reducers, initial state data, Redux devtools
const storeFactory = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default storeFactory;
