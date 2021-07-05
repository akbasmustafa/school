import studentReducer from "./students";
import stateReducer from "./states";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  students: studentReducer,
  states: stateReducer,
});

export default allReducers;
