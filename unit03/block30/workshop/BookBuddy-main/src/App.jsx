import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import AllBooks from "./components/AllBooks";
import BookDetails from "./components/BookDetails";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Registration from "./components/Register"

export default function App() {

  return (
    <>
      <nav>
        <Link to ="/">View All Books</Link>
        <Link to ="/users/me">View your reservations</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Create a new Account</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/books/:bookid" element={<BookDetails />} />
        <Route path="users/me" element ={<Profile/>}/>
        <Route path="login" element ={<Login/>}/>
        <Route path="register" element ={<Registration/>}/>
      </Routes>
    </>
  );
}
