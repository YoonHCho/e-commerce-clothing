import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg.svg";
// useSelector and useDispatch hooks replaces connect (of version 5)
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCartHidden())
  }

  return (
    <div className="cart-icon" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}