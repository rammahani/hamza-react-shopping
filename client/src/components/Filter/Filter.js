import React from 'react';
import '../../css/Filter/Filter.css';
export default function Filter() {
  return (
    <div>
      <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>
        <div className='num-of-products'>Number of products 4</div>
        <div className='filer-by-size'>
          <span>Size </span>
          <select className='filter-select'>
            <option value='ALL'>ALL</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </div>
        <div className='filer-by-order'>
          <span>Order </span>
          <select className='filter-select'>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='heighst'>Heighst </option>
          </select>
        </div>
      </div>
    </div>
  );
}
