import { combineReducers } from "redux";

import { userReducerSlice } from "./user/user.reducer";
import { cartReducerSlice } from "./cart/cart.reducer";
import { directoryReducerSlice } from "./directory/directory.reducer";
import { shopReducerSlice } from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
// storage will get the localStorage object
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducerSlice,
  cart: cartReducerSlice,
  directory: directoryReducerSlice,
  shop: shopReducerSlice,
});

export default persistReducer(persistConfig, rootReducer);
