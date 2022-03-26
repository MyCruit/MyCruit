import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jobReducer } from "./reducers/jobReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loaderReducer } from "./reducers/loaderReducer";

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  loaderReducer: loaderReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
