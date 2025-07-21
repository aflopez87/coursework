import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

export default function AllBooks() {
    const [books, setBooks]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const getBooks = async ()=>{
            const response= await axios("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
            console.log(response.data)
            setBooks(response.data)
        }
        getBooks()
    }, [])

    return (
    <>
    <div className="allbooks">
        {books.map(book=><div className="book"  key={book.id} onClick={()=>navigate(`/books/${book.id}`)}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title}/>
        </div>)}
    </div>
    </>
    )
};