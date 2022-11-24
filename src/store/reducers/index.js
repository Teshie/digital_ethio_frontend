import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { userDataReducer } from "./userReducer";
import { userStatusReducer } from "./userStatusReducer";

export default combineReducers({
  token: tokenReducer,
  user: userDataReducer,
  user_status: userStatusReducer,
});
