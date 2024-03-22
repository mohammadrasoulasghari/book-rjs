import React from 'react'
import {books} from "../constants/mockData"
import BookCard from './BookCard';
function Booka() {
    console.log(books);
  return (
    <div>   
             <div>
                {books.map(book =>(
                    <BookCard key={book.id} data={book}/>
                ))}
                </div>
             <div></div>
    </div>
  )
}

export default Booka