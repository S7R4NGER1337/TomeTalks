import { DeleteComment } from '../../services/bookService'


export default function Comment({commentData, getCommentText}){
    
    const userID = JSON.parse(localStorage.getItem('auth'))._id
    
    return(
        <li className='coment'>
            <textarea className='commentTextArea' id="" cols="40" rows="4">{commentData.commentToPost}</textarea> 

            {commentData._ownerId == userID  &&
                <>
                    <button id="editComment" onClick={() => {
                        getCommentText(commentData.commentToPost)
                        DeleteComment(commentData._id)
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    }}>Edit</button>

                    <button id="deleteComment" onClick={() => {
                        DeleteComment(commentData._id)
                        window.location.reload()
                    }}>Delete</button>
                </>
            }
        </li>
    )
}