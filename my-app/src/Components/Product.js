import React from "react";
import '../App.css';
import ProductItem from "./ProductItems";
import list from "../data";

function Product() {
    const itemCard = list.map(item => {
        return <ProductItem key={item.id} item={item}/>
    })
    return (
        <div className="list">
            <h1>List of Products</h1>
            <br></br>
            {itemCard}
        </div>
    )
}

export default Product;