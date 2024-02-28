import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { CollectionPreview } from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

export const CollectionsOverview = () => {
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollections
  }));

  return (
    <div className="collections-overview">
      {
        collections.map(({id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  )
}