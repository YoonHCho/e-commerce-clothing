import { Component } from "react";

// Need to import BrowserRouter in the index.js first
import { Routes, Route, Navigate } from "react-router-dom";
// use connect (for class component) instead of useSelector, since useSelector is for functional component
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument, onSnapshot } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import "./App.css";

// Components/Pages
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndUpPage } from "./pages/sign-in-and-up/sign-in-and-up.component";
import { CheckoutPage } from "./pages/checkout/checkout.component";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // at this point, unsubscribeFromAuth holds a reference to the function returned by auth.onAuthStateChanged. By calling it as a function (this.unsubscribeFromAuth()), you invoke the cleanup functionality provided by Firebase, effectively unsubscribing from further authentication state changes.
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          {/* <Route path="/signin" element={<SignInAndUpPage />} /> */}

          <Route path="/signin" element={currentUser ? <Navigate to="/" replace /> : <SignInAndUpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
