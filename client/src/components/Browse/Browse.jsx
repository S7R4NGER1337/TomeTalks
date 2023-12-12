import BrowseItem from "./BrowseItem"
import './Browse.css'
import { useEffect, useState } from "react"
import { GetAllBooks } from "../../services/bookService"

export default function Browse(){

    const [books, setBooks] = useState([])

    useEffect(() =>  {
        GetAllBooks().then(result => { setBooks(result) })
        console.log(books);
    },[])
    
    return(

        <div className="browseContainer">
            {books.map((book) => (
                <BrowseItem key={book._id} book/>
            ))}
        </div>
    )
}