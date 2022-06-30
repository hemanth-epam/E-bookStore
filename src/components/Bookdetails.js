import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function Bookdetails() {

    // const items = useSelector(state => state.cart)
    const dispatch = useDispatch()  //for dispatch to addToCart
    // console.log(items);

    //getting data of book which is clicked
    const location = useLocation();
    const { from } = location.state;
    const book = from.book;
    // Displaying details of book clicked
    return (
        //Book details
        <>
            <div className='info'>
                <img className='imgs2' src={from.book.image} alt='book'></img>
                <div className='details'>
                    Title: &nbsp; <b>{from.book.title}</b> <br></br>
                    Price: &nbsp; {from.book.price} <br></br>
                    Author Name: &nbsp; {from.book.author} <br></br>
                    Page Count: &nbsp; {from.book.pageCount} <br></br>
                    Available Copies: &nbsp; {from.book.quantity}
                    <div className='buttons'>
                        <button onClick={() => {
                            alert("Adding item to cart");
                            dispatch(addToCart(JSON.stringify(book)))
                        }}>Add to Cart</button>
                        <Link to='/Checkout' state={{ from: { book } }}>
                            <button>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Description */}
            <nav className='description'>
                <b>Description : </b>
                <p>
                    {from.book.description}
                </p>
            </nav>
        </>
    )
}

export default Bookdetails