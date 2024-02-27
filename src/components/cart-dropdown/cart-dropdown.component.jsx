import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";


export const CartDropdown = () => {
  // const { cartItems } = useSelector(state => state.cart)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { cartItems } = useSelector(createStructuredSelector({
    cartItems: selectCartItems
  }));

  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        { cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your Cart is Empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        navigate("/checkout");
        dispatch(toggleCartHidden());
      }}
      >CHECKOUT</CustomButton>
    </div>
  )
}