import { useEffect, useState } from "react";
import MostPopularBook from "../MostPopularBook/MostPopularBook";
import "./MostPopular.css";
import { GetAllBooks } from "../../../services/bookService";

export default function MostPopular() {

  const [FirstBooks, setFirstBooks] = useState([])
  const [SecondBooks, setSecondBooks] = useState([])

  
  useEffect(() => {
    GetAllBooks().then(res => {
      setFirstBooks(res.slice(0,2))
      setSecondBooks(res.slice(2,4));
    })
  },[])

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


              {FirstBooks.map((book) => (
                    <MostPopularBook key={book._id} book={book}/>
              ))}
              </div>
              <div className="rowItem">

              {SecondBooks.map((book) => (
                    <MostPopularBook key={book._id} book={book}/>
              ))}
                

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
