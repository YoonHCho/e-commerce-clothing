import { useCallback } from "react";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg.svg";
// useSelector and useDispatch hooks replaces connect (of version 5)
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";
import { createStructuredSelector } from "reselect";

export const CartIcon = () => {
  const dispatch = useDispatch();
  // const { cartItems } = useSelector(state => state.cart);
  // const itemCount = cartItems.reduce((acc, curr) => {
  //   return acc + curr.quantity;
  // }, 0);



  // using the memoized selector.
  const { cartItemsCount } = useSelector(createStructuredSelector({
    cartItemsCount: selectCartItemsCount
  }));

  const handleToggle = useCallback(() => {
    dispatch(toggleCartHidden());
  }, [dispatch]);

  // const handleToggle = () => {
  //   dispatch(toggleCartHidden())
  // }

  return (
    <div className="cart-icon" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  )
}