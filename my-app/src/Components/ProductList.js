import React from "react";
import ProductItem from "./ProductItems"

function ProductList({ items }) {
    const itemCard = items.map(item => {
        return <ProductItem key={item.id} item={item} />
    })
    return (
        <div class="categories">
            <h2>Product List</h2>
            <div>{itemCard}</div>
        </div>
    )
}

export default ProductList;