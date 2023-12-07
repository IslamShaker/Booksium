import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const OtherBooks = () => {
  const[books,setBooks]=useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3000/books")
    .then(res =>res.json())
    .then(data=> setBooks(data))
  },[]

  )
  return (
    <div>
      <BookCard books={books} headLine="Other Books"/>
    </div>
  )
}

export default OtherBooks
