import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CustomButton } from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

export const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>ADD TO CART</CustomButton>
    </div>
  );
}