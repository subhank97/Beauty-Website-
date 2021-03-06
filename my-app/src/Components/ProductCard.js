import React from "react";

function ProductCard({ item }) {
    return (
        <div className="card">
            <div className="img_box">
                <img src={item.image_link} alt="makeup items" />
            </div>
            <div className="details">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>Product Type: {item.product_type}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;