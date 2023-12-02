import MostPopularBook from "../MostPopularBook/MostPopularBook";
import "./MostPopular.css";
export default function MostPopular() {
  return (
    <div className="most-popular">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>
              <em>Most Popular</em> Right Now
            </h4>
          </div>
          <div className="row">
            <div className="wrapRows">
              <div className="rowItem">
                
                <MostPopularBook />

                <MostPopularBook />

              </div>
              <div className="rowItem">
                
                <MostPopularBook />
                
                <MostPopularBook />

              </div>
            </div>

            <div className="col-lg-12">
              <div className="main-button">
                <a href="browse.html">Browse All Books</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
