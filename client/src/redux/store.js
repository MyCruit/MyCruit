import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jobReducer } from "./reducers/jobReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loaderReducer } from "./reducers/loaderReducer";
import { studentReducer } from "./reducers/studentReducer";

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  loaderReducer: loaderReducer,
  studentReducer: studentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
