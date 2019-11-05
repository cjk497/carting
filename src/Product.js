import React from 'react';

function Product(props) {
    return(
      <div className="product">
        <img src={props.image}/>
        <p className="product-title">{props.item}</p>
        <p className="product-description">{props.description}</p>
        <p className="product-price">{props.price}</p>
      </div>
    )
  }

  export default Product;