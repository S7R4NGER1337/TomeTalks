import BrowseItem from "./BrowseItem"
import './Browse.css'
import { useEffect, useState } from "react"
import { GetAllBooks } from "../../services/bookService"

export default function Browse(){

    const [books, setBooks] = useState({})

    useEffect(() =>  {
        setBooks(GetAllBooks())
        console.log(books);
    },[])
    
    return(

        <div className="browseContainer">
            <BrowseItem />
            <BrowseItem />
            <BrowseItem />
            <BrowseItem />
            <BrowseItem />
        </div>
    )
}