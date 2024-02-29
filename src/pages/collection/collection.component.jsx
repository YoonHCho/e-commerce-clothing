import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

export const CollectionPage = () => {
  const { collectionId } = useParams();
  const { collection: { title, items} } = useSelector(createStructuredSelector({
    collection: selectCollection(collectionId)
  }));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}