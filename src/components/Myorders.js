import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../redux/bookSlice'

function Myorders() {

  //getting dummy ordered books data from store
  const book = useSelector((state) => state.book)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks());
  }, [])
  //console.log(book);
  //displaying ordered items which are static from JSON server
  //as no complete payment and order features not included in this task
  return (
    <div>
      <h3 id='subtitle'> My Orders </h3>
      {/* {book.loading && <div>Loading...</div>}
      {!book.loading && book.error ? <div>Error: {book.error}</div> : null} */}
      {!book.loading && book.books.length ? (
        // <p>{book.books.length}</p>
        book.books.map((book) => (
          <div className='ordersInfo' key={book.id}>
            <img className='imgs' src={book.image} alt='book'></img>
            <div className='details'>
              Order Placed: &nbsp; {book.date} &emsp; &emsp;
              Status: &nbsp; {book.status} <br></br>
              Title: &nbsp; <b>{book.title}</b> <br></br>
              Author Name: &nbsp; {book.author} <br></br>
              Price: &nbsp; {book.price} <br></br>
            </div>
          </div>
        ))
      ) : null}
    </div>
  )
}

export default Myorders