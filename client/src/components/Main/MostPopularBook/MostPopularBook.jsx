export default function MostPopularBook({book}) {
  return (
    <div className="item">
      <img src={book.imageUrl} className="testSnimka" alt="" />
      <h4 className="centerItInBox">
        {book.bookName}
        <br />
      </h4>

    </div>
  );
}
