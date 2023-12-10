import useForm from "../../hooks/useForm";
import { CreateBooks } from "../../services/bookService";
import "./CreateBook.css";

export default function CreateBook() {

    
    async function createSubmitHandler(values){
        const data = await CreateBooks(values)

        console.log(data);
    }

    const {values, onChange, onSubmit} = useForm(createSubmitHandler,{bookName: '', imageUrl: ''})

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
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"
          />
        </form>
      </div>
    </div>
  );
}