import React from "react";
import ProductCard from "./ProductCard";

const ProductCollection = () =>{
    return (
        <div class="categories">
            <h2>Categories</h2>
            <button>Eyes</button>
            <br></br>
            <button>Lips</button>
            <br></br>
            <button>Face</button>
            <ProductCard />
        </div>
    )
}

export default ProductCollection