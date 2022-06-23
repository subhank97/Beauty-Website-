import React, { useState, useEffect } from "react";
import '../App.css';
import ProductItem from "./ProductItems";

function Product() {

    const [product, setProduct] = useState([])

    useEffect(() =>{
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?limit=20')
      .then(response => response.json())
      .then(invData => setProduct(invData));
    }, [])

    return (
        <div className="list">
            <h1>List of Products</h1>
            <div className="filter">
                <select name="Filter">
                <option value="All">Filter by category</option>
                <option value="blush">Blush</option>
                <option value="bronzer">Bronzer</option>
                <option value="eyebrow">Eyebrow</option>
                <option value="eyeliner">Eyeliner</option>
                <option value="eyeshadow">Eyeshadow</option>
                <option value="foundation">Foundation</option>
                <option value="lipstick">Lipstick</option>
                <option value="lip_liner">Lip Liner</option>
                <option value="mascara">Mascara</option>
                <option value="nail_polish">Nail Polish</option>
                </select>
            </div>
            <br></br>
            <div className="card-list">
            {product.map(item => {
                 return <ProductItem key={item.id} item={item}/>
    })}
            </div>
        </div>
    )
}

export default Product;