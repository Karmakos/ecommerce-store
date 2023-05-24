import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo/logo-250.png";
import "./Topbar.css";
function Topbar() {
  return (
    <div>
      <header className="header">
        <div className="topbar-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="topbar-msg">
                  Welcome to THYNK Unlimited. We value you!
                </p>
              </div>
              <div className="col">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faLocationDot} size="sm" />
                    <a className="topbar-navbar nav-link" href="#">
                      Store Locator
                    </a>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faTruckArrowRight} size="sm" />
                    <a className="topbar-navbar nav-link" href="#">
                      Track Your Order
                    </a>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faUser} size="sm" />
                    <a className="register topbar-navbar nav-link" href="#">
                      Register
                    </a>
                    <span>or</span>
                    <a className="sign-in topbar-navbar nav-link" href="#">
                      Sign in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row second-topbar">
              <div className="col col-lg-3">
                <img className="logo-image" src={logo} alt="Karmatt Logo" />
                <p className="topbar-msg">We have everything electronics</p>
              </div>
              <div className="col col-lg-5">
                <form className="d-flex">
                  <label className="search-label">Search</label>
                  <input
                    className="form-control search-products"
                    type="search"
                    placeholder="Search for products..."
                  />
                  <div>
                    <button
                      className="btn btn-outline-success search-btn"
                      type="submit"
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col col-lg-4">
                <ul className="second-nav nav">
                  <li className="nav-item">
                    <a className="nav-link topbar-navbar" href="">
                      <span>
                        <FontAwesomeIcon icon={faRepeat} /> Compare
                      </span>{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link topbar-navbar" href="">
                      {" "}
                      <span>
                        <FontAwesomeIcon icon={faHeart} /> Wishlist
                      </span>{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link topbar-navbar" href="">
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} /> Cart
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Topbar;
