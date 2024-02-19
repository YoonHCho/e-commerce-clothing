import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/yhcLogo.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import "./header.styles.scss";

export const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  )
}