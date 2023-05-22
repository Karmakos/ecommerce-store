import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./Topbar.css";
function Topbar() {
  return (
    <div>
      <header className="topbar-header">
        <div className="container topbar-container">
          <div className="row">
            <div className="col">
              <p className="topbar-msg">Welcome to Karmatt store. We value you!</p>
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
      </header>
    </div>
  );
}

export default Topbar;
