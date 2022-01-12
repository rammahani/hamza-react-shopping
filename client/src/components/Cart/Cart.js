import React from 'react';
import '../../css/Cart/Cart.css';

function Cart(props) {
  return (
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
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
