import { combineReducers } from "redux";

import { userReducerSlice } from "./user/user.reducer";

export default combineReducers({
  user: userReducerSlice,
});
