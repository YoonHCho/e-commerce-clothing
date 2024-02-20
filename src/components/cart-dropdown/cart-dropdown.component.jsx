import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
)