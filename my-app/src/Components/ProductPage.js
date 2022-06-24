import React, { useState, useEffect } from "react";
import '../App.css';
import ProductCard from "./ProductCard";

function ProductPage() {

    const [productsArray, setProductsArray] = useState([])
    const [selectCategory, setSelectCategory] = useState("")

//fetching data from api and setting equal to productsArray
    useEffect(() =>{
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?limit=50')
            .then(response => response.json())
            .then(invData => setProductsArray(invData));
    }, []) 


    // const productsFilteredByCategory = productsArray.filter(prod=>{ 
    //     return prod.category.includes(selectCategory)}
    // )

    function handleChange(event){
      setSelectCategory(event.target.value);
    }

    return (
        <div className="list">
            <h1>Products Page</h1>
            <div className="filter">
                <select name="Filter" onChange={handleChange} >
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
            {productsArray.filter(p => p.product_type === selectCategory.toLowerCase()).map(item => {
                 return <ProductCard key={item.id} item={item}/>
            })}
            </div>
        </div>
    )
}

export default ProductPage;