import React, { useState } from 'react'

import { books } from "../constants/mockData"
import BookCard from './BookCard';
import SideCard from './SideCard';
import styles from './Books.module.css'

import SearchBox from './SearchBox';
function Books() {
  const [liked, setLiked] = useState([])
  const handekLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id)
      setLiked(newLikedList)
    } else {
      setLiked((liked) => [...liked, book])
    }
  }
  return (
    <>
    <SearchBox />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map(book => (
            <BookCard key={book.id} data={book} handekLikedList={handekLikedList} />
          ))}
        </div>
        <div className={styles.favorite}>
          <h4>Favorite</h4>
          {!!liked.length && (
            liked.map(book => <SideCard key={book.id} data={book} />)
          )}
        </div>
      </div>
    </>
  )
}

export default Books