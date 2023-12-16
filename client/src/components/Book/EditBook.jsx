import { EditBook } from "../../services/bookService"
import { useNavigate, useLocation } from "react-router-dom"
import { GetBookById } from "../../services/bookService"
import { useEffect, useState } from "react"


export default function EditBookComponent(){
    const [book, setBook] = useState({
        bookName: '',
        imageUrl: '',
        description: ''
    })
    const navigate = useNavigate()
    

    const editBookSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            console.log();
            await EditBook(location, values);

            navigate(`/books/${location}`);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    let location = useLocation();
    location = location.pathname.split('/')[3]

    useEffect(() => {
        GetBookById(location).then(res => {
            setBook(res)
        })
    },[location])


  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Edit Book </h2>
        <div className="fadeIn first">
        </div>
        <form onSubmit={editBookSubmitHandler}>
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="bookName"
            placeholder="bookName"
            onChange={onChange}
            value={book.bookName}
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="imageUrl"
            placeholder="imageUrl"
            onChange={onChange}
            value={book.imageUrl}
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="description"
            placeholder="description"
            onChange={onChange}
            value={book.description}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"
          />
        </form>
      </div>
    </div>
  );
}