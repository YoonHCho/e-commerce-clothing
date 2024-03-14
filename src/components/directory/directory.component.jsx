import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";

export const Directory = () => {
  const { sections } = useSelector(createStructuredSelector({
    sections: selectDirectorySections
  }));

  return (
    <div className="directory-menu">
      {
        // ...otherProps, making it simpler since the property and parameter are the same name
        sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))
      }
    </div>
  )
}