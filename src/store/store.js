import { createStore } from "redux";
import todoReducer from "./reducers/reducer";

const store = createStore(todoReducer)

export default store;