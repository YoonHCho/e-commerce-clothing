import { Component } from "react";
import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";


export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'hats'
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'jackets'
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'sneakers'
        },
        {
          id: 4,
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          linkUrl: 'mens'
        },
        {
          id: 5,
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: 'womens'
        },
      ]
    }

  }

  render() {
    return (
      <div className="directory-menu">
        {
          // ...otherProps, making it simpler since the property and parameter are the same name
          this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}