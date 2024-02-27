// for memoization
import { createSelector } from "reselect";

// input selector (doesn't use createSelector), it is a function that takes naming structure of select, similar to useSelector?
const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  // first argument is a collection, an array, of input selectors
  [selectCartReducer],
  // second argument, function that will return the value we want out of the selector
  cart => cart.cartItems
);

export const selectCartHidden = createSelector([selectCartReducer], cart => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, curr) => acc + curr.quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0)
);
