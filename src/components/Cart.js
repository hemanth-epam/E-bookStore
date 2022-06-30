import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import emptyCart from '../images/emptyCart.png'


function Cart() {

  //getting items(books added to cart) from store
  var items = useSelector(state => state.cart)
  // console.log(items);
  // var quantities = useSelector(state => state.ids)
  const tax = 'Rs.20', shipcharge = 'Rs.40', extra = 60;
  let itemsprice = 0;
  // items = items.json();
  //console.log(JSON.parse(items.cart[0]).id);
  const dispatch = useDispatch()

  //saving address(disabling editing)
  function save() {
    var ip = document.getElementsByTagName('input');
    for (var i = 0; i < ip.length; i++) {
      ip[i].setAttribute('readOnly', 'true');
    }
  }

  //editing address(enabling editing)
  function edit() {
    var ip = document.getElementsByTagName('input');
    for (var i = 0; i < ip.length; i++) {
      ip[i].removeAttribute('readOnly');
    }
  }

  //console.log('cart render');
  //displaying cart page(address and bag)
  return (
    // Address form
    <div className='cart'>
      <form action="/Cart">
        <div className="row">
          <div className="col-50">
            <br></br>
            <h3>Shipping Address</h3>
            <label><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="FirstName" />
            <label><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="email@gmail.com" />
            <label><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="RTC 5th Street" />
            <label><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="HYD" />

            <div className="row">
              <div className="col-50">
                <label>State</label>
                <input type="text" id="state" name="state" placeholder="TS" />
              </div>
              <div className="col-50">
                <label>Zip</label>
                <input type="text" id="zip" name="zip" placeholder="500054" />
              </div>
            </div>
            <input type="button" value="Save Address" className="btn" onClick={() => save()} />
            <input type="button" value="Edit Address" className="btn" onClick={() => edit()} />
          </div>
        </div>
      </form>

      {/* Shopping Bag */}
      {items.cart.length > 0 ?
        <div className="col-50">
          <br></br>
          <h3>Shopping Bag</h3>
          <div className='cartbooks'>
            {items.cart.map((book) => (
              <figure key={JSON.parse(book).id}>
                <img className='imgs3' src={JSON.parse(book).image} alt='book'></img>
                <div className='cartinfo'>
                  <b>{JSON.parse(book).title} | {JSON.parse(book).price} | </b>
                  <label> Quantity: &nbsp; </label>
                  {/* setQty() -- setting for all items *** */}
                  {items.ids.get(JSON.parse(book).id)}

                  <br></br>
                  Cumulative Price: {itemsprice += (items.ids.get(JSON.parse(book).id)) * Number((JSON.parse(book).price).substring(3))}
                  &nbsp; <button id='remove' onClick={() => dispatch(removeFromCart(book))}> Remove </button>
                </div>
              </figure>
            ))}
          </div>

          {/* Payment Info */}
          <div className='cartinfo'>
            Payment Info: <br></br>
            <table>
              <tbody>
                <tr>
                  <th>Service</th>
                  <th>Charge</th>
                </tr>
                <tr>
                  <td>Item(s) Price</td>
                  <td>Rs.{itemsprice}</td>
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
                  <td><b>{'Rs.' + Number(itemsprice + extra)}</b></td>
                </tr>
              </tbody>
            </table>
            <div className='chkoutbuttons'>
              <Link to='/'>
                <button onClick={() => { alert("Thanks for your order") }}>Checkout</button>
              </Link>
              <Link to='/'>
                <button>Cancel</button>
              </Link>
            </div>
          </div>
        </div> :
        <div className='col-50'>
          <br></br>
          <h3> Shopping Cart </h3> <br></br>
          <h5> Cart is Empty </h5>
          <img className='emptycart' src={emptyCart} alt='emptyCart'></img>
        </div>
      }

    </div>
  )
}

export default Cart