import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to='/' className="logo">
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
                  <Link to='/' className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="books">Browse</Link>
                </li>
                <li>
                  <a href="details.html">Details</a>
                </li>
                <li>
                  <a href="streams.html">Streams</a>
                </li>
                <li>
                  <a href="profile.html">
                    Profile{" "}
                    <img src="assets/images/profile-header.jpg" alt="" />
                  </a>
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
