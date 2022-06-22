import React from "react";
import '../App.css'

function HomePage() {
    return (
        <div className="homepage">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="Product">Product</a>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>
                </ul>
                    <a className="cart" href="Cart">Cart</a>
            </nav>
            <h1>Beauty Store</h1>
            <br></br>
            <h2>Product List</h2>
        </div>
    )
}

export default HomePage;
