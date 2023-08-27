import { legacy_createStore } from "redux";
import rootReducer from "./Reducers/index";

const store = legacy_createStore(rootReducer);

export default store;