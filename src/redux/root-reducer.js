import { combineReducers } from "redux";

import { userReducerSlice } from "./user/user.reducer";
import { cartReducerSlice } from "./cart/cart.reducer";

export default combineReducers({
  user: userReducerSlice,
  cart: cartReducerSlice,
});
