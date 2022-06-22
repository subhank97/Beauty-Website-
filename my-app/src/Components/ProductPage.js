import React, { useState } from "react";
import '../App.css';
import ProductItem from "./ProductItems";

function ProductPage({ items }) {

    const [selectedCategory, setSelectedCategory] = useState("All")

  const newItems = items.filter((item) => {
    return selectedCategory === item.product_type || selectedCategory === "All"
  })

    return (
        <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="lipstick">Lipstick</option>
          <option value="foundation">Foundation</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeShadow">EyeShadow</option>
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="mascara">Mascara</option>
          <option value="eyebrow">Eyebrow</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <ProductItem key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
    )
}

export default ProductPage;