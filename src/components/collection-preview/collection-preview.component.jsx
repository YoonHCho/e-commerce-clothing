import { CollectionItem } from "../collection-item/collection-item.component";
import { useNavigate, useLocation } from "react-router-dom";

import "./collection-preview.styles.scss";

export const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`${pathname}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}