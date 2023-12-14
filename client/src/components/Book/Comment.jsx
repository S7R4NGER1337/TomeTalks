export default function Comment({commentText}){

    return(
        <li className='coment'>
            <textarea className='commentTextArea' id="" cols="40" rows="4">{commentText}</textarea>
        </li>
    )
}