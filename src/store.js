import { createStore, combineReducers } from "redux";
import persons from "./reducers/persons.js";

const store = createStore(
  combineReducers({
    persons
  })
);

export default store;
