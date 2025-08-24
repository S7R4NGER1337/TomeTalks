import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const [getLocation, setLocation] = useState("");
  const [getMenuState, setMenuState] = useState(false)
  const location = useLocation();
  const {isAuthenticated} = useContext(AuthContext)

  useEffect(() => {
    setLocation(location.pathname);
  }, [location]);

  function changeMenuState() {
    setMenuState(!getMenuState)
  }

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="/Screenshot_1-removebg-preview.png" alt="" />
              </Link>
              <ul className="nav" hidden={getMenuState}>
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

                {isAuthenticated && <li>
                  <Link
                    to="books/create"
                    className={getLocation == "/books/create" ? "active" : ""}>
                    Create
                  </Link>
                </li>}

                {!isAuthenticated && 
                <>
                <li>
                  <Link
                    to="user/login"
                    className={getLocation == "/user/login" ? "active" : ""}
                    style={{'backgroundColor': '#27292a',
                      'padding': '8px 10px 8px 20px',
                      'borderRadius': '23px'}}
                  >
                    Login
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </Link>

                  
                </li>
                <li>
                  <Link
                    to="user/register"
                    className={getLocation == "/user/register" ? "active" : ""}
                  >
                    Register
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </Link>
                </li>
                </>
                }

                {isAuthenticated && <li>
                  <Link
                    to="user/logout"
                    className={getLocation == "/user/logout" ? "active" : ""}
                  >
                    Logut
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </Link>
                </li>}
              </ul>
              <a className="menu-trigger" onClick={changeMenuState} hidden = {false}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
