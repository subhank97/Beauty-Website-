import React from "react";

function AddRequest() {

    function handleSubmit(e) {

        e.preventDefault();

        //how to add a port: 
        
        //added port for db.json file 
        fetch('http://localhost:4000/item', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(({
        name: e.target.name.value,
            brand: e.target.brand.value,
            productType: e.target.productType.value,
          }))
        })
      };

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="brand" placeholder="brand" />
        <input type="text" name="productType" placeholder="product type" />
        <hr></hr>
        <input
          type="submit"
          name="submit"
          value="Add requested product"
          className="submit"
        />
      </form>
    </div>
    )
}

export default AddRequest;