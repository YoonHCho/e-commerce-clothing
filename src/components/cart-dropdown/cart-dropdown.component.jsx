import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useSelector(state => state.cart)

  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}