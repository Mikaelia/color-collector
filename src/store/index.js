import { createStore, combineReducers } from "redux";
import { colors, palettes, visibility } from "./reducers";
import stateData from "../data/initialState";

// const logger = store => next => action => {
//   let result;
//   console.groupCollapsed("dispatching", action.type);
//   console.log("prev state", store.getState());
//   console.log("action", action);
//   result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd();
//   return result;
// };

// const saver = store => next => action => {
//   let result = next(action);
//   localStorage["redux-store"] = JSON.stringify(store.getState());
//   return result;
// };

// const storeFactory = (initialState = stateData) =>
//   applyMiddleware(logger)(createStore)(
//     combineReducers({ colors, palettes }),
//     // localStorage["redux-store"]
//     //   ? JSON.parse(localStorage["redux-store"])
//     stateData
//   );

const initialState = stateData;
const rootReducer = combineReducers({
  colors,
  palettes,
  visibility
});

const storeFactory = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default storeFactory;
