import { Link } from "react-router-dom";

export default function MostPopularBook({book}) {
  return (
    <>
    <Link to={`/books/${book._id}`}> <div className="item">
      <img src={book.imageUrl} className="testSnimka" alt="" />
      <h4 className="centerItInBox">
        {book.bookName}
        <br />
      </h4>

    </div> 
    </Link>
    </>
  );
}
