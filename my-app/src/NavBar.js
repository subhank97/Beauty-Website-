import React from "react";
import ShoppingCart from "./ShoppingCart";
import './App.css';

const NavBar = () =>{
    return (
        <div>
            <header class="nav-header">
                <h1 id="title">Beauty Store</h1>
                    <div class="cart-logo">
                        <img id="logo" alt="logo" src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE=" />
                        <span>Cart: 0</span>
                    </div>
            </header>
            <ShoppingCart />
        </div>
    )
}

export default NavBar