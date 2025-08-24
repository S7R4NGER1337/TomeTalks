import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { GetBookById, PostComment, getComments, DeleteBook } from '../../services/bookService'
import Comment from './Comment';
import './Details.css'
import AuthContext from '../../contexts/authContext';

export default function Details(){

    const [comments, setComments] = useState([])
    const [book, setBook] = useState({})
    const [commentText, setCommentText] = useState('')
    
    const auth = useContext(AuthContext)
    const ownerId = JSON.parse(localStorage.getItem('auth'))
    const navigate = useNavigate()
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

    function getCommentText(text){
      setCommentText(...commentText, text)
      console.log(commentText);
      
      console.log(text);
      document.querySelector('.commentInput').value = text
    }

    async function postComment(e){
       e.preventDefault()
       try{
         const commentToPost = document.querySelector('.commentInput').value
         document.querySelector('.commentInput').value = ''
         const comment = await(PostComment({commentToPost, location}))
         setComments(state => ([...state, comment]))
         window.location.reload()

       } catch (error) {
        alert(error)
       }
    }

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
          <p>
            {book.description}
          </p>
        </div>

        {auth.isAuthenticated && ownerId._id != book._ownerId &&
              <div className='formDiv'>
                <form onSubmit={postComment}>
                  <textarea type="text" name='comment' required className='commentInput' rows="5"/>
                  <button>post comment</button>
                </form>
              </div>
        }

        { ownerId._id == book._ownerId &&
               <div className='editAndDelete'>
                  <button onClick={() => navigate(`/books/edit/${location}`)}>Edit</button>

                  <button onClick={() => {
                    DeleteBook(location)
                    navigate('/')
                    }}>Delete</button>
               </div>
        }


      </main>
        </div>
  </div>
</section>

<section style={{margin: '0px'}}>
  <div className='comments'>
    <ul>
      {comments.map((comment) => (
                    <Comment key={comment._id} commentData={comment} bookOwner={book._ownerId} getCommentText={getCommentText}/>
                  ))}
    </ul>
  </div>
</section>
</>
)
}
