import React, { useState, useEffect} from "react"
import Product from "./Product"

function ProductList(){

    const [inventory, setInventory]= useState([])
    const [addToCart, setAddToCart] = useState([])

useEffect(() =>{
    fetch('')
  .then(response => response.json())
  .then(invData => setInventory(invData));
}, [])

function handleAddItem(item){
    const foundIndex = addToCart.findIndex(inventoryItem => inventoryItem.id === item.id)
    if (foundIndex < 0){
        setAddToCart([...addToCart, item])
    } else {
        console.log('Item added')
    }
}
    return (
        <Product inventory={inventory} addItem={handleAddItem} />
    )
}

export default ProductList;