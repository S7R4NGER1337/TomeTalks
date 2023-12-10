import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [getLocation, setLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, [location]);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="/Screenshot_1-removebg-preview.png" alt="" />
              </Link>
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                  <i className="fa fa-search" />
                </form>
              </div>
              <ul className="nav">
                <li>
                  <Link to="/" className={getLocation == "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="books"
                    className={getLocation == "/books" ? "active" : ""}
                  >
                    Browse
                  </Link>
                </li>
                {/* <li>
                  <a href="profile.html">
                    Profile
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </a>
                </li> */}
                <li>
                  <Link
                    to="user/login"
                    className={getLocation == "/user/login" ? "active" : ""}
                  >
                    Login
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
