import React from "react";
import '../App.css'

function Nav() {

    return (
        <div className="homepage">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="Home">Home</a>
                    </li>
                    <li>
                        <a href="ProductPage">Product</a>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>
                </ul>
                    <a className="cart" href="Cart">Cart</a>
            </nav>
        </div>
    )
}

export default Nav;
