import { useEffect, useState } from 'react'
import { GetBookById } from '../../services/bookService'
import './Details.css'

export default function Details(){

    const [book, setBook] = useState({})
    useEffect(() => {
        GetBookById("901fdb5d-cf99-42b8-b100-4ce73abe1cb3").then(res => {
            setBook(res[0])
        })
    },[])
return (
<section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a
            data-fslightbox="mygalley"
            className="rounded-4"
            target="_blank"
            data-type="image"
          >
            <img
              style={{ maxWidth: "100%", height: "60vh", margin: "auto", outline: 'none' }}
              className="rounded-4 fit"
              src={book.imageUrl}
            />
          </a>
        </div>
        {/* thumbs-wrap.// */}
        {/* gallery-wrap .end// */}
      </aside>


      <main className="col-lg-6" style={{border: '1px'}}>
        <div className="ps-lg-3">
          <h4 className="zaglavie">
            {book.bookName}
          </h4>
        </div>
        <p>
          {book.bookDetails}
        </p>
      </main>
        </div>
  </div>
</section>)
}
