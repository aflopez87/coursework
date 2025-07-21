import { useContext, useEffect } from "react";
import { AuthContext } from "../UseContext";
import axios from "axios";

export default function Profile() {
    const {user, setUser, token} = useContext(AuthContext);

    useEffect(()=>{
        const getUser = async ()=>{
            try{
                const response = await axios('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me',{
                headers: {"Authorization":`Bearer ${token}`}
            })  
            setUser(response.data)
            }catch(err){
                console.error("Failed to fetch user:", err)
            }
        }
        getUser();
    },[token, setUser])
    
    const returnBook = async (bookId) =>{
        try{
            await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${bookId}`,{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
             const response = await axios('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
            headers: { "Authorization": `Bearer ${token}` }
        });
        setUser(response.data)
        }catch(err){

        };
    };

    if (!user) return <p>User not found</p>;

    return(
        <>{ user &&
            <>
            <section>
            <h2>Hi, {user.firstname} {user.lastname}!</h2>
            <p>{user.email}</p>
            <h3>Book reservations:</h3>
            </section>
            {/* create a button that take you to allbooks to sign out additional books */}
            {(user.reservations.length<=0) ? 
            (<p>You don't have any books checked out.</p>) : 
            (user.reservations.map(reservation=>
                <div key={reservation.id} className="reserved">
                    <h4>{reservation.title}</h4>
                    <img src={reservation.coverimage} alt={reservation.title}/>
                    <button onClick = {() => {returnBook(reservation.id)}} >Return Book</button>
                </div>))}
            </>
        }
    </>
    )
};