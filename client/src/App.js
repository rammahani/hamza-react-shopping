import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// import { constants } from './constants';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('');

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == 'ALL') {
      setProducts(data);
    } else {
      let ProductsClone = [...products];
      let newProdcuts = ProductsClone.filter(
        (product) => product.sizes.indexOf(e.target.value) != -1
      );
      setProducts(newProdcuts);
    }
  };
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let ProductsClone = [...products];
    let newProdcuts = ProductsClone.sort(function (a, b) {
      if (order == 'lowest') {
        return a.price - b.price;
      } else if ((order = 'heighest')) {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProdcuts);
  };

  return (
    <div className='layout'>
      <Header />

      <main>
        <div className='wrapper'>
          <Products products={products} className='productswrapper' />
          <Filter
            handleFilterByOrder={handleFilterByOrder}
            handleFilterBySize={handleFilterBySize}
            size={size}
            sort={sort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
