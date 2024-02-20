import { CartActionTypes } from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
};

export const cartReducerSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
