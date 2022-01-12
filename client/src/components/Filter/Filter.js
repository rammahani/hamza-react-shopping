import React from 'react';
import '../../css/Filter/Filter.css';
import ProductModal from '../Products/ProductModal';

import Products from '../Products/Products';
import Flip from 'react-reveal/Flip';
export default function Filter(props) {
  return (
    <Flip left>
      <div>
        <div className='filter-wrapper'>
          <h2 className='filter-title'>Filter</h2>
          <div className='num-of-products'>
            Quantity is {props.productsQuantity}
          </div>
          <div className='filer-by-size'>
            <span>Size </span>
            <select
              value={props.size}
              className='filter-select'
              onChange={props.handleFilterBySize}
            >
              <option value='ALL'>ALL</option>
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>
              <option value='XL'>XL</option>
            </select>
          </div>
          <div className='filer-by-order'>
            <span>Order </span>
            <select
              value={props.sort}
              className='filter-select'
              onChange={props.handleFilterByOrder}
            >
              <option value='latest'>Latest</option>
              <option value='lowest'>Lowest</option>
              <option value='heighst'>Heighst </option>
            </select>
          </div>
        </div>
      </div>
    </Flip>
  );
}
