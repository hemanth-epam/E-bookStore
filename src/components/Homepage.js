import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

//http://localhost:3000/books
function Homepage() {

  //To dispatch addToCart
  //const items = useSelector(state => state.cart)
  const dispatch = useDispatch()
  //console.log(items);

  const [books, setBooks] = useState([]);

  //**Renders twice bcs It's an intentional feature of the StrictMode. This only happens
  //in development and helps find accidental side effects put into the render phase. 
  useEffect(() => {
    fetch(`http://localhost:8080/books`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBooks(res);
        //  console.log(state);
        //alert("hello");
      })
  }, []);

  //Displaying all books with required buttons(Buy, AddToCart)
  return (
    <div>
      <div className='books'>
        {books.map((book) => (
          <figure key={book.id}>
            <Link to='/Bookdetails' state={{ from: { book } }}>
              <img className='imgs'
                src={book.image} alt='book'></img>
            </Link>
            <div>
              <b>{book.title} | {book.price}</b>
              <div className='buttons'>
                <Link to='/Checkout' state={{ from: { book } }}>
                  <button>Buy</button>
                </Link>
                <button onClick={() => {
                  alert("Adding item to cart");
                  dispatch(addToCart(JSON.stringify(book)))
                }}>
                  Add to Cart</button>
              </div>
            </div>
          </figure>
        ))}
      </div>

    </div>
  )
}

export default Homepage;