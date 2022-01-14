import { FETCH_PRODUCTS, FILTER_SORT, FILTER_SIZE } from './types';

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('/api/products')
      .then((res) => res.JSON())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterBySize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.filter((p) => p.size.indexOf(value) != -1);
    dispatch({
      type: FILTER_SIZE,
      data: {
        size: value,
        products: value == 'ALL' ? products : newProducts,
      },
    });
  };
};

export const filterBySort = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProdcuts = productsClone.sort(function (a, b) {
      if (value === 'lowest') {
        return a.price - b.price;
      } else if ((value = 'heighest')) {
        return b.price - a.price;
      } else {
        return a._id < b._id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_SORT,
      data: {
        sort: value,
        products: newProdcuts,
      },
    });
  };
};
