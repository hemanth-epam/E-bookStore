import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Checkout() {

  //getting data of books which choosen for checkout
  const location = useLocation();
  const { from } = location.state;
  const tax = 'Rs.20', shipcharge = 'Rs.40', extra = 60;

  //checkout book details and payment info
  return (
    <div>
      <h3 id='subtitle'> Checkout </h3>
      <div className='info'>
        <img className='imgs2' src={from.book.image} alt='book'></img>
        <div className='details'>
          Selected Book: &nbsp; <b>{from.book.title}</b> <br></br>
          Price: &nbsp; {from.book.price} <br></br>
          Quantity: &nbsp; 1 <br></br>
          <br></br>
          {/* =========================================================== */}
          Payment Info: <br></br>
          <table>
            <tbody>
              <tr>
                <th>Service</th>
                <th>Charge</th>
              </tr>
              <tr>
                <td>Item Price</td>
                <td>{from.book.price}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>{tax}</td>
              </tr>
              <tr>
                <td>Shipping Charge:</td>
                <td>{shipcharge}</td>
              </tr>
              <tr>
                <td><b>Total Charge:</b></td>
                <td><b>{'Rs.' + Number(Number(from.book.price.substring(3)) + extra)}</b></td>
              </tr>
            </tbody>
          </table>
          {/* ==================================================================== */}
          <div className='chkoutbuttons'>
            <Link to='/'>
              <button onClick={() => { alert("Thanks for your order") }}>Checkout</button>
            </Link>
            <Link to='/'>
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Checkout