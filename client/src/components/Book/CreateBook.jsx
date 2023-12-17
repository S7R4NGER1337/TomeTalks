import useForm from "../../hooks/useForm";
import { CreateBooks } from "../../services/bookService";
import { useNavigate } from "react-router-dom";
import "./CreateBook.css";
import { useEffect, useState } from "react";

export default function CreateBook() {

  const navigate = useNavigate()

    async function createSubmitHandler(values){
        await CreateBooks(values)

        navigate('/books')
    }
    const {values, onChange, onSubmit} = useForm(createSubmitHandler,{bookName: '', imageUrl: '', description: ''})

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Create Book </h2>
        <div className="fadeIn first">
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
            required
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="imageUrl"
            placeholder="imageUrl"
            onChange={onChange}
            value={values.imageUrl}
            required
          />
          <input
            type="text"
            id="bookName"
            className="fadeIn second"
            name="description"
            placeholder="description"
            onChange={onChange}
            value={values.description}
            required
            />

          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"/>
        </form>
      </div>
    </div>
  );
}
