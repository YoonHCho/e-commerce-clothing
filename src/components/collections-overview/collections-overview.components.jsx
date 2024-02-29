import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionPreview } from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

export const CollectionsOverview = () => {
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollectionsForPreview
  }));
  console.log('collections: ', collections);

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