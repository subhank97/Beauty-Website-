import React from "react";
import ProductCollection from "./ProductCollection";
import Search from "./Search";
import NavBar from "./NavBar";
import './App.css';

const Homepage = () =>{
    return (
        <div>
            <NavBar />
            <ProductCollection />
            <Search />
            <div class="homepage">
                <h1>Welcome</h1>
                <img id="Makeup" src="https://st2.depositphotos.com/1891407/10272/v/950/depositphotos_102725536-stock-illustration-beauty-shop-background.jpg" alt="Makeup" />
            </div>
        </div>
    )
}

export default Homepage