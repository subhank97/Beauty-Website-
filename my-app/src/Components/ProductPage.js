import React from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import '../App.css';

function ProductPage() {
    return (
        <div>
            <ProductList />
            <ShoppingCart />
                <div class="product-categories">
                    <h2>Product Type</h2>
                        <button id="button">Lipstick</button>
                        <br></br>
                        <button id="button">Foundation</button>
                        <br></br>
                        <button id="button">EyeLiner</button>
                        <br></br>
                        <button id="button">EyeShadow</button>
                        <br></br>
                        <button id="button">Blush</button>
                        <br></br>
                        <button id="button">Bronzer</button>
                        <br></br>
                        <button id="button">Mascara</button>
                        <br></br>
                        <button id="button">Eyebrow</button>
                </div>
        </div>
    )
}

export default ProductPage;