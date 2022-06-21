import React from "react";

function ProductItem({ item }) {
    return (
        <div>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
            <p>Description: {item.description}</p>
            <h5>Product Type: {item.product.type}</h5>
        </div>
    )
}

export default ProductItem;