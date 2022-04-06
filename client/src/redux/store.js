import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jobReducer } from "./reducers/jobReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loaderReducer } from "./reducers/loaderReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  loaderReducer: loaderReducer,
  userReducer: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
