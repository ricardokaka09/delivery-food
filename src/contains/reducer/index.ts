import { combineReducers } from "redux";
import Authencation from "./auth";

const reducer = combineReducers({
  auth: Authencation,
});

export default reducer;
