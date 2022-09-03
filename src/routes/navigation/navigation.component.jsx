import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.style.scss";

const Navigation = () => {
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

          <Link className="nav-link" to={"/sign-in"}>
            Sign in
          </Link>
        </div>
      </div>

      <Outlet />

      <ToastContainer />
    </Fragment>
  );
};
export default Navigation;
