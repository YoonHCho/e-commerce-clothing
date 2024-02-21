import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg.svg";
// useSelector and useDispatch hooks replaces connect (of version 5)
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  const itemCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleToggle = () => {
    dispatch(toggleCartHidden())
  }

  return (
    <div className="cart-icon" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}