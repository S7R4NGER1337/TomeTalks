import './Header.css'

export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="/Screenshot_1-removebg-preview.png" alt="" />
              </a>
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
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="browse.html">Browse</a>
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
