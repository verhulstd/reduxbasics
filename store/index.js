import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
// in deze file worden alles reducers geimporteerd en de store aangemaakt
// de functies dat uitgevoerd moeten worden als de state wijzigt worden ook gekoppeld aan de store

import counterReducer from "./counter";
import friendsReducer from "./friends";
import todosReducer from "./todos";
import cocktailsReducer from "./cocktails";

// const myLogger = function (store) {
//   return function (next) {
//     return function (action) {
//       console.group("Previous State");
//       console.log(store.getState());
//       console.log("dispatched action " + JSON.stringify(action));
//       console.groupEnd("Previous State");
//       next(action);
//       console.group("Next State");
//       console.log(store.getState());
//       console.groupEnd("Next State");
//     };
//   };
// };

const rootReducer = combineReducers({
  counterState: counterReducer,
  friendsState: friendsReducer,
  todosState: todosReducer,
  cocktailsState: cocktailsReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunk, logger));

export default createStore(rootReducer, middleware);
