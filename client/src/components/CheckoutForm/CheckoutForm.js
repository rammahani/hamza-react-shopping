import React, { useState } from 'react';
import '../../css/CheckoutForm/CheckoutForm.css';
function CheckoutForm(props) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {props.showForm && (
        <div className='checkout-form'>
          <span className='close-icon' onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <form action=''>
            <div>
              <label>
                {' '}
                Name
                <input
                  type='text'
                  required
                  name='name'
                  onChange={props.handleChange}
                ></input>
              </label>
            </div>
            <div>
              <label>
                {' '}
                Email
                <input
                  type='email'
                  required
                  name='email'
                  onChange={props.handleChange}
                ></input>
              </label>
            </div>
            <div>
              <button type='submit'> checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default CheckoutForm;
