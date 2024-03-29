import "./cart-item.styles.scss";

export const CartItem = ({ item: {name, price, imageUrl, quantity}}) => {

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-detail">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  )
}