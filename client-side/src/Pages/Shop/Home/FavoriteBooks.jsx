/* eslint-disable no-unused-vars */
import { useEffect,useState} from "react";
import BookCard from "./BookCard";

function FavoriteBooks() {
 const[books,setBooks]=useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3000/books")
    .then(res =>res.json())
    .then(data=> setBooks(data))
  },[]

  )
  return (
    <div>
      <BookCard books={books} headLine="best saller books"/>
    </div>
  )
}

export default FavoriteBooks
