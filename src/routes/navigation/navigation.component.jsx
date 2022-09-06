import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/user.context";
import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>

      <Outlet />

      <ToastContainer />
    </Fragment>
  );
};
export default Navigation;
