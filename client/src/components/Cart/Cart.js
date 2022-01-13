import React, { useState } from 'react';
import '../../css/Cart/Cart.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');
  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
  };
  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.value,
    }));
  };

  return (
    <>
      <div className='cart-wrapper'>
        <div className='cart-title'>
          {props.cartItems.length === 0 ? (
            'Empry Cart'
          ) : (
            <p>you have {props.cartItems.length} products</p>
          )}
        </div>
        <div className='cart-items'>
          {props.cartItems.map((item) => (
            <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} />
              <div className='cart-info'>
                <div>
                  <p>{item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {props.cartItems.length !== 0 && (
          <div className='cart-footer'>
            <div className='total'>
              Total:{' '}
              {props.cartItems.reduce((acc, p) => {
                return acc + p.price * p.qty;
              }, 0)}
            </div>
            <button onClick={() => setShowForm(true)}>Select Product</button>
          </div>
        )}
      </div>
      <CheckoutForm
        value={value}
        showForm={showForm}
        setShowForm={setShowForm}
        handleChange={handleChange}
        submitOrder={submitOrder}
      />
    </>
  );
}

export default Cart;
