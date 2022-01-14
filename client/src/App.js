import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// import { constants } from './constants';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('');
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === 'ALL') {
      setProducts(data);
    } else {
      let ProductsClone = [...products];
      let newProdcuts = ProductsClone.filter(
        (product) => product.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProdcuts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let ProductsClone = [...products];
    let newProdcuts = ProductsClone.sort(function (a, b) {
      if (order === 'lowest') {
        return a.price - b.price;
      } else if ((order = 'heighest')) {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProdcuts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Provider store={store}>
      <div className='layout'>
        <Header />

        <main>
          <div className='wrapper'>
            <Products
              // products={products}
              className='productswrapper'
              addToCart={addToCart}
            />
            <Filter
              productsQuantity={products.length}
              handleFilterByOrder={handleFilterByOrder}
              handleFilterBySize={handleFilterBySize}
              size={size}
              sort={sort}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
