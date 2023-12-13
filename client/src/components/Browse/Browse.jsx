import BrowseItem from "./BrowseItem"
import './Browse.css'
import { useEffect, useState } from "react"
import { GetAllBooks } from "../../services/bookService"

export default function Browse(){

    const [books, setBooks] = useState([])

    useEffect(() =>  {
        GetAllBooks().then(result => { setBooks(result) })
    },[])
    
    if(books.length > 0){
        return(
            <div className="browseContainer">
                {books.map((book) => (
                    <BrowseItem key={book._id} book={book}/>
                ))}
            </div>
        )
    } else {
        return(
        <div className="browseContainer">
                <h1>There are no books</h1>
        </div>
        )
    }
    
}