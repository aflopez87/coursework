import { useParams, useNavigate } from "react-router"
import { useState, useEffect, useContext } from "react"
import axios from "axios";
import { AuthContext } from "../UseContext";


export default function BookDetails() {
    const [book, setBook] = useState(null);
    const {bookid} = useParams();
    const {token} = useContext( AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const getBook = async () => {
                try{
                    const response = await axios.get(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookid}`);
                    setBook(response.data)
                }catch(err){
                    console.error("Failed to fetch book:", err);
                 }
                };
        getBook();
    }, [bookid]);

    const reserveBook = async (bookId)=>{
            try{
                await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
                    { bookId:bookId }, 
                    {
                        headers: { 
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }
            );
            // refetch book data to update interface
            const response = await axios.get(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookid}`)
            setBook(response.data);
            }catch(err){
                console.error("Failed to reserve book:", err)
            }
        };
    
    if (!book) return <p>Loading...</p>;

    return(
        <>
        <section>
             <h1>{book.title}</h1>
         <p>Author: {book.author}</p>
         <p>Available: {book.available ? "Yes":"No"}</p>
         <img className="details" src={book.coverimage} alt={book.title}/>
         <p className="description">Description: {book.description}</p>
         {token && (
            <>
                <button 
                    onClick={()=>reserveBook(book.id)} 
                    disabled={!book.available}
                >
                    {book.available? "Reserve this book" : "This book is reserved"}
                </button>
                <button onClick={()=>navigate("/")}>Return to list</button>
                </>
            )}
        </section>
        </>
    );
};