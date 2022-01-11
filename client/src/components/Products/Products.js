import React from 'react';
import '../../css/Products/Products.css';
function Products(props) {
  return (
    <div className='products-wrapper'>
      {props.products.map((product) => (
        <div className='product-item' key={product.id}>
          <img src={product.imageUrl}></img>
          <div className='product-desc'>
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button className='button'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default Products;
