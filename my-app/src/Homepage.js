import React from "react";
import ProductCollection from "./ProductCollection";
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";

const Homepage = () =>{
    return (
        <div>
            <ProductCollection />
            <ShoppingCart />
            <Search />
        </div>
    )
}

export default Homepage