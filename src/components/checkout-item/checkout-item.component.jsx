import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cart/cart.actions"
import { addItem } from "../../redux/cart/cart.actions"
import { removeItem } from "../../redux/cart/cart.actions"


import "./checkout-item.styles.scss"

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))} >&#10094;&nbsp;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&nbsp;&#10095;</div>
      </span>
      <span className="price">{price}</span>

      <div className="remove-button" onClick={() => dispatch(removeItemFromCart(cartItem))}>&#10005;</div>
    </div>
  )
}