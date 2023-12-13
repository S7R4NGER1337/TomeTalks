import useForm from "../../hooks/useForm";
import { CreateBooks } from "../../services/bookService";
import { useNavigate } from "react-router-dom";
import "./CreateBook.css";

export default function CreateBook() {

  const navigate = useNavigate()

    async function createSubmitHandler(values){
        await CreateBooks(values)

        navigate('/')
    }

    const {values, onChange, onSubmit} = useForm(createSubmitHandler,{bookName: '', imageUrl: '', description: ''})

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Create Book </h2>
        <div className="fadeIn first">
          {/* <img src="/Silver grains_Pori.jpg" id="icon" alt="User Icon" /> */}
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="bookName"
            placeholder="bookName"
            onChange={onChange}
            value={values.bookName}
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="imageUrl"
            placeholder="imageUrl"
            onChange={onChange}
            value={values.imageUrl}
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="description"
            placeholder="description"
            onChange={onChange}
            value={values.description}
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
