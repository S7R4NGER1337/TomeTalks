import MostPopular from "../MostPopular/MostPopular";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="main-banner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="header-text">
                    <h6>Welcome To TomeTalks</h6>
                    <h4>
                      <em>Browse</em> Books Reviews
                    </h4>
                    <div className="main-button">
                      <a href="browse.html">Browse Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <MostPopular />

          </div>
        </div>
      </div>
    </div>
  );
}
