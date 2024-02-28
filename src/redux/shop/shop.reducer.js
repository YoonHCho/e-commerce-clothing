import { SHOP_DATA } from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export const shopReducerSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
