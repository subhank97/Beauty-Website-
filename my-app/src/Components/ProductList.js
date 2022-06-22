import React from "react";
import ProductItem from "./ProductItems"

function ProductList({ inventory }) {
    const itemCard = inventory.map(item => {
        return <ProductItem key={item.id} item={item} />
    })
    return (
        <div class="categories">
            <h2>Product List</h2>
            <br></br>
            <div>
                {itemCard}
            </div>
        </div>
    )
}

export default ProductList;