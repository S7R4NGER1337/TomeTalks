import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { GetBookById, PostComment, getComments, DeleteBook } from '../../services/bookService'
import Comment from './Comment';
import './Details.css'

export default function Details(){

    const [comments, setComments] = useState([])
    const [book, setBook] = useState({})
    const ownerId = localStorage.getItem('auth')

    let location = useLocation();
    location = location.pathname.split('/')[2]

    useEffect(() => {
        GetBookById(location).then(res => {
            setBook(res)
        })
    },[])

    useEffect(() => {
      getComments(location).then(res => {
        setComments(res)
      })
    },[])

    async function postComment(e){
       e.preventDefault()
       const commentToPost = document.querySelector('.commentInput').value
       const comment = await(PostComment({commentToPost, location}))
       setComments(state => ([...state, comment]))

    }

    // async function deleteBook(){
    //   console.log(1);
    // }

return (
<>
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
          {book.description}
        </p>

        {ownerId._id != book.ownerId &&
                <form onSubmit={postComment}>
                <textarea type="text" name='comment' className='commentInput' rows="5" />
                <button>post comment</button>
              </form>
        }
        {ownerId._id === book.ownerId &&
               <div className='editAndDelete'>
                  <button>Edit</button>

                  <button onClick={() => DeleteBook(location)}>Delete</button>
               </div>
        }


      </main>
        </div>
  </div>
</section>

<section>
  <div className='comments'>
    <ul>
      {comments.map((comment) => (
                    <Comment key={comment._id} commentText={comment.commentToPost}/>
                  ))}
    </ul>
  </div>
</section>
</>
)
}
