import React from 'react';
import '../../css/Filter/Filter.css';
import ProductModal from '../Products/ProductModal';

import Products from '../Products/Products';
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux';
import { filterBySize, filterBySort } from '../../store/actions/products';
function Filter(props) {
  return (
    <Flip left>
      {props.filteredProducts && props.filteredProducts.length ? (
        <div>
          <div className='filter-wrapper'>
            <h2 className='filter-title'>Filter</h2>
            <div className='num-of-products'>
              Quantity is {props.filteredProducts.length}
            </div>
            <div className='filer-by-size'>
              <span>Size </span>
              <select
                value={props.size}
                className='filter-select'
                onChange={(e) =>
                  props.filterBySize(props.filteredProducts, e.target.value)
                }
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
                onChange={(e) => props.filterBySort(props.sort, e.target.value)}
              >
                <option value='latest'>Latest</option>
                <option value='lowest'>Lowest</option>
                <option value='heighst'>Heighst </option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        'loding'
      )}
    </Flip>
  );
}
export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filteredProducts: state.products.filteredProducts,
    };
  },
  { filterBySize, filterBySort }
)(Filter);
