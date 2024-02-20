import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/yhcLogo.svg";
import { auth } from "../../firebase/firebase.utils";
// useSelector and useDispatch hooks replaces connect (of version 5)
import { useSelector } from "react-redux";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";



import "./header.styles.scss";

export const Header = () => {
  const { currentUser } = useSelector(state => state.user);
  const { hidden } = useSelector(state => state.cart);

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
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}