import React, { useState, useEffect } from 'react';
import '../../css/Products/Products.css';
import ProductModal from './ProductModal';
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/products';

function Products(props) {
  const [product, setproduct] = useState('');
  const openModal = (product) => {
    setproduct(product);
  };
  const closeModal = () => {
    setproduct(false);
  };

  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <Bounce left cascade>
      <div className='products-wrapper'>
        {props.products && props.products.length
          ? props.products.map((product) => (
              <div className='product-item' key={product.id}>
                <a href='#' onClick={() => openModal(product)}>
                  <img src={product.imageUrl} alt='hi man'></img>
                </a>
                <div className='product-desc'>
                  <p>{product.title}</p>
                  <span>{product.price}$</span>
                </div>
                <button
                  className='button'
                  onClick={() => props.addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          : 'Loading'}
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}
export default connect(
  (state) => {
    return {
      products: state.products.products,
    };
  },
  { fetchProducts }
)(Products);
