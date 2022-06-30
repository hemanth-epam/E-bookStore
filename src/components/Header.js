import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    //Fixed Header for all pages and used for navigating
    return (
        <>
            <nav className='topnav'>
                <b> &nbsp; Book Store Site </b>
                <span className='topnav-right'>
                    <Link to='/'>Home</Link>
                    <Link to='/Myorders'>My orders</Link>
                    <Link to='/Cart'>Cart</Link>
                </span>
            </nav>
        </>
    )
}

export default Header