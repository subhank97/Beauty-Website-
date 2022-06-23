import React from "react";
import '../App.css';
import ProductItem from "./ProductItems";
import list from "../data";

function Product() {
    return (
        <div className="list">
            <h1>List of Products</h1>
            <div className="Filter">
                <select name="filter">
                <option value="All">Filter by category</option>
                <option value="lipstick">Lipstick</option>
                <option value="eyeshadow">EyeShadow</option>
                <option value="eyeliner">Eyeliner</option>
                <option value="eyebrow">Eyebrow</option>
                <option value="foundation">Foundation</option>
                <option value="blush">blush</option>
                <option value="bronzer">bronzer</option>
                </select>
            </div>
            <br></br>
            <div className="card-list">
            {list.map(item => {
                 return <ProductItem key={item.id} item={item}/>
    })}
            </div>
        </div>
    )
}

export default Product;