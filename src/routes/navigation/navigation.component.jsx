import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navigation.style.scss";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />

      <ToastContainer />
    </Fragment>
  );
};
export default Navigation;
