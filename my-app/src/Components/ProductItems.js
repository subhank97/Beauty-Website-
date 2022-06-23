import React from "react";
import list from "../data";

function ProductItem({ item, addItemClick }) {
    return (
        <div className="cards">
            <div>
                <img id="image_box" src={item.image} alt="makeup items" />
            </div>
            <div className="details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>Product Type: {item.product_type}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;