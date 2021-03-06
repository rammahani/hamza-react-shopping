import React, { useState } from 'react';
import '../../css/CheckoutForm/CheckoutForm.css';
import Input from '../Input/Input';
import Zoom from 'react-reveal/Zoom';
function CheckoutForm(props) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {props.showForm && (
        <Zoom>
          <div className='checkout-form'>
            <span
              className='close-icon'
              onClick={() => props.setShowForm(false)}
            >
              &times;
            </span>
            <form onSubmit={props.submitOrder}>
              <Input
                label='name'
                type='text'
                name='name'
                onChange={props.handleChange}
              />
              <Input
                label='email'
                type='text'
                name='email'
                onChange={props.handleChange}
              />

              <div>
                <button type='submit'> checkout</button>
              </div>
            </form>
          </div>
        </Zoom>
      )}
    </>
  );
}
export default CheckoutForm;
