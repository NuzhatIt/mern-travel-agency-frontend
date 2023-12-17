import { createStore } from "redux";
import testReducers from "./reducers/testReducers";

const store = createStore(testReducers);

export default store;