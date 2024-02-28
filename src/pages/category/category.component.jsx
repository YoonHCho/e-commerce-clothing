import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

export const CategoryPage = () => {
  const location = useLocation();
  const { categoryId } = useParams();
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollections
  }));
  // const category = params.categoryId;

  console.log("collections: ", collections);

  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
      {
        collections.filter(collection => {
          console.log("collection: ", collection.routeName)
          console.log("categoryId: ", categoryId)
          if (collection.routeName === categoryId) return collection.items
        })
        .map(item => {
          console.log("item: ", item)
          console.log("item.id: ", item.id)
          return <CollectionItem key={item.id} item={item} />
        })
      }
    </div>
  )
}