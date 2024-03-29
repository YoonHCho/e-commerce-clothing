import { useNavigate, useLocation } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${pathname}${linkUrl}`)}>
    {/* adding the image to below div b/c don't want the image to be bigger than the menu-item div */}
    <div
      className="background-image"
      style={{
      backgroundImage: `url(${imageUrl})`}}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
  )
}