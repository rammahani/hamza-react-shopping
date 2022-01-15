import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../css/Cart/Cart.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { removeCart } from '../../store/actions/Cart';
import { Modal } from 'react-modal';
function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [order, setorder] = useState(false);
  const [value, setValue] = useState('');

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    setorder(order);
  };
  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.value,
    }));
  };
const closeModal=()=>{
  setorder(false);
}
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
        <Modal isOpen={order} onRequestClose={closeModal}>

          <div className='orderInfo'>
          <span className='close-icon' onClick={closeModal}>&times;</span>
            <p className='alert-success'> order done</p>
            <table>
              <tr>
                <tb>name: </tb>
                <tb>{}order.name</tb>
              </tr>
              <tr>
                <tb>email: </tb>
                <tb>{}order.email</tb>
              </tr>
              <tr>
                <tb>total: </tb>
                <tb>
                  {props.cardItems.reduce((acc, p) => {
                    return acc + p.price;
                  }, 0)}
                </tb>
              </tr>
              <td> Selected items: </td>
              <tr>
              <td>
              {props.cardItems.map(p=>{
                <div className='cart-data'>
                <p>Number of products: {p.qty} </p>
                <p>product name: {p.title} </p>
                </div>
              })}
              </td>
              </tr>
            </table>
          </div>
        </Modal>
        <div className='cart-items'>
          {props.cartItems.map((item) => (
            <div className='cart-item' key={item._id}>
              <img src={item.imageUrl} />
              <div className='cart-info'>
                <div>
                  <p>{item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => props.removeCart(item)}>Remove</button>
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

export default connect(
  (state) => {
    return { cartItems: state.cart.cartItems };
  },
  { removeCart }
)(Cart);
