import './MostPopular.css'
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
              <div className="firstTwo">
                <div className="rowItem">
                  <div className="item">
                    <img src="assets/images/popular-01.jpg" alt="" />
                    <h4>
                      Fortnite
                      <br />
                      <span>Sandbox</span>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-star" /> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download" /> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rowItem">
                  <div className="item">
                    <img src="assets/images/popular-02.jpg" alt="" />
                    <h4>
                      PubG
                      <br />
                      <span>Battle S</span>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-star" /> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download" /> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="secondTwo">
                <div className="rowItem">
                  <div className="item">
                    <img src="assets/images/popular-02.jpg" alt="" />
                    <h4>
                      PubG
                      <br />
                      <span>Battle S</span>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-star" /> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download" /> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rowItem">
                  <div className="item">
                    <img src="assets/images/popular-02.jpg" alt="" />
                    <h4>
                      PubG
                      <br />
                      <span>Battle S</span>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-star" /> 4.8
                      </li>
                      <li>
                        <i className="fa fa-download" /> 2.3M
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="main-button">
                <a href="browse.html">Discover Popular</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
